const express = require("express");

const router = express.Router();

const { testCloudinary } = require("../controllers/testController");

router.get("/cloudinary", testCloudinary);

module.exports = router;
