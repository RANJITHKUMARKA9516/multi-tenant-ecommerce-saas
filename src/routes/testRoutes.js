const express = require("express");

const router = express.Router();

const { testCloudinary } = require("../controllers/testController");

router.get("/cloudinary", testCloudinary);
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API Healthy",
  });
});

module.exports = router;
