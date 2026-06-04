const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  register,
  login,
  logout,
  getMe,
} = require("../controllers/authController");

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", auth(), getMe);

router.get("/vendor-dashboard", auth(["vendor"]), (req, res) => {
  res.json({
    message: "Vendor Dashboard",
  });
});

router.get("/admin-dashboard", auth(["admin"]), (req, res) => {
  res.json({
    message: "Admin Dashboard",
  });
});

module.exports = router;
