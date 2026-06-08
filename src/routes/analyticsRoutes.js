const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  getAdminAnalytics,
  getVendorAnalytics,
} = require("../controllers/analyticsController");

router.get("/admin", auth(["admin"]), getAdminAnalytics);

router.get("/vendor", auth(["vendor"]), getVendorAnalytics);

module.exports = router;
