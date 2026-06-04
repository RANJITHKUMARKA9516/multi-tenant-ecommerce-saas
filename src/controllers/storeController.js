const Store = require("../models/Store");
const createStore = async (req, res) => {
  try {
    const { storeName, description } = req.body;

    const existingStore = await Store.findOne({
      owner: req.user.id,
    });

    if (existingStore) {
      return res.status(400).json({
        success: false,
        message: "Vendor already owns a store",
      });
    }

    const store = await Store.create({
      storeName,
      description,
      owner: req.user.id,
    });

    res.status(201).json({
      success: true,
      store,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyStore = async (req, res) => {
  try {
    const store = await Store.findOne({
      owner: req.user.id,
    }).populate("owner", "name email role");

    if (!store) {
      return res.status(404).json({
        success: false,
        message: "Store not found",
      });
    }

    res.status(200).json({
      success: true,
      store,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateStore = async (req, res) => {
  try {
    const { storeName, description } = req.body;

    const store = await Store.findOne({
      owner: req.user.id,
    });

    if (!store) {
      return res.status(404).json({
        success: false,
        message: "Store not found",
      });
    }

    store.storeName = storeName || store.storeName;

    store.description = description || store.description;

    await store.save();

    res.status(200).json({
      success: true,
      store,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createStore,
  getMyStore,
  updateStore,
};
