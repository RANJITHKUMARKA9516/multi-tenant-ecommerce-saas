const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createPaymentOrder,
  verifyPayment,
} = require("../controllers/paymentController");

router.post("/create-order", auth(["customer"]), createPaymentOrder);

router.post("/verify", auth(["customer"]), verifyPayment);

module.exports = router;
