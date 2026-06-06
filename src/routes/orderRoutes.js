const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getOrderById,
} = require("../controllers/orderController");

router.post("/", auth(["customer"]), createOrder);

router.get("/my-orders", auth(["customer"]), getMyOrders);

router.get("/:id", auth(["customer"]), getOrderById);

module.exports = router;
