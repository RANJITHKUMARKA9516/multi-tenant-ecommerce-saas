const Store = require("../models/Store");
const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

const getPendingStores = async (req, res) => {
  try {
    // const stores = await Store.find({
    //   status: "pending",
    // }).populate("owner", "name email");
    const stores = await Store.find();

    res.json({
      success: true,
      stores,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const approveStore = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);

    if (!store) {
      return res.status(404).json({
        success: false,
        message: "Store not found",
      });
    }

    store.status = "approved";

    await store.save();

    res.json({
      success: true,
      message: "Store Approved",
      store,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAdminAnalytics = async (req, res) => {
  try {
    const totalStores = await Store.countDocuments();

    const pendingStores = await Store.countDocuments({
      status: "pending",
    });

    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const totalVendors = await User.countDocuments({
      role: "vendor",
    });

    res.json({
      success: true,
      analytics: {
        totalStores,
        pendingStores,
        totalProducts,
        totalOrders,
        totalVendors,
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
  getPendingStores,
  approveStore,
  getAdminAnalytics,
};
