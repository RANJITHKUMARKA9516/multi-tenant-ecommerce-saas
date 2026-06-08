const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const { getVendorOrders } = require("../controllers/orderController");

router.get("/orders", auth(["vendor"]), getVendorOrders);

module.exports = router;
