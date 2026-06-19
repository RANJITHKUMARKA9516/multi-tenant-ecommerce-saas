const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getVendorOrders,
  getVendorAnalytics,
} = require("../controllers/orderController");

router.get("/orders", auth(["vendor"]), getVendorOrders);

router.get("/analytics", auth(["vendor"]), getVendorAnalytics);

module.exports = router;
