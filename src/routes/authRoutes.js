const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

router.get("/profile", auth, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
