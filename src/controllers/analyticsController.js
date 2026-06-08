const User = require("../models/User");
const Store = require("../models/Store");
const Product = require("../models/Product");
const Order = require("../models/Order");

const getAdminAnalytics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalStores = await Store.countDocuments();

    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const revenueData = await Order.aggregate([
      {
        $group: {
          _id: null,
          revenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const totalRevenue = revenueData[0]?.revenue || 0;

    res.status(200).json({
      success: true,

      analytics: {
        totalUsers,
        totalStores,
        totalProducts,
        totalOrders,
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
