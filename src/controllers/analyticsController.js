const User = require("../models/User");
const Store = require("../models/Store");
const Product = require("../models/Product");
const Order = require("../models/Order");

const getAdminAnalytics = async (req, res) => {
  try {
    console.log("ADMIN ANALYTICS HIT");

    const orders = await Order.find();

    console.log("TOTAL ORDERS FOUND:", orders.length);
    console.log("FIRST ORDER:", orders[0]);
    const totalRevenue = orders.reduce((sum, order) => {
      return sum + Number(order.totalAmount || 0);
    }, 0);

    console.log("TOTAL REVENUE:", totalRevenue);

    const totalUsers = await User.countDocuments();

    const totalVendors = await User.countDocuments({
      role: "vendor",
    });

    const totalCustomers = await User.countDocuments({
      role: "customer",
    });

    const totalStores = await Store.countDocuments();

    const pendingStores = await Store.countDocuments({
      status: "pending",
    });

    const approvedStores = await Store.countDocuments({
      status: "approved",
    });

    const rejectedStores = await Store.countDocuments({
      status: "rejected",
    });

    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const pendingOrders = await Order.countDocuments({
      status: "Pending",
    });

    const processingOrders = await Order.countDocuments({
      status: "Processing",
    });

    const deliveredOrders = await Order.countDocuments({
      status: "Delivered",
    });

    res.status(200).json({
      success: true,
      analytics: {
        totalUsers,
        totalVendors,
        totalCustomers,
        totalStores,
        pendingStores,
        approvedStores,
        rejectedStores,
        totalProducts,
        totalOrders,
        pendingOrders,
        processingOrders,
        deliveredOrders,
        totalRevenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getVendorAnalytics = async (req, res) => {
  try {
    const store = await Store.findOne({
      owner: req.user.id,
    });

    const products = await Product.find({
      store: store._id,
    });

    const productIds = products.map((p) => p._id);

    const orders = await Order.find({
      "items.product": {
        $in: productIds,
      },
    });

    let revenue = 0;

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (
          productIds.some((id) => id.toString() === item.product.toString())
        ) {
          revenue += item.price * item.quantity;
        }
      });
    });

    res.status(200).json({
      success: true,

      analytics: {
        totalProducts: products.length,

        totalOrders: orders.length,

        revenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAdminAnalytics,
  getVendorAnalytics,
};
