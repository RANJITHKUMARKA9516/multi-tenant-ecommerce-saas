const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

router.get("/orders", auth(["admin"]), getAllOrders);

router.put("/orders/:id", auth(["admin"]), updateOrderStatus);

module.exports = router;
