const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const {
  getPendingStores,
  approveStore,
  getAdminAnalytics,
} = require("../controllers/adminController");

router.get("/stores/pending", getPendingStores);

router.put("/stores/:id/approve", approveStore);
router.get("/analytics", getAdminAnalytics);

router.get("/orders", getAllOrders);

router.put("/orders/:id/status", updateOrderStatus);

module.exports = router;
