const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

router.post("/add", auth(["customer"]), addToCart);

router.get("/", auth(["customer"]), getCart);

router.delete("/remove/:productId", auth(["customer"]), removeFromCart);

module.exports = router;
