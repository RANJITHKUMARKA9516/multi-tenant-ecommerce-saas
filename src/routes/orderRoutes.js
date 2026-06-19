const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getOrderById,
  getVendorOrders,
} = require("../controllers/orderController");

router.post("/", auth(["customer"]), createOrder);

router.get("/my-orders", auth(["customer"]), getMyOrders);

router.get("/:id", auth(["customer"]), getOrderById);

router.get("/vendor-orders", auth(["vendor"]), getVendorOrders);

module.exports = router;
