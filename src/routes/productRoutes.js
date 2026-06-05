const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createProduct,
  getMyProducts,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  getAllProducts,
} = require("../controllers/productController");

// Public Routes
router.get("/", getAllProducts);

// Vendor Routes
router.get("/my-products", auth(["vendor"]), getMyProducts);

router.post("/", auth(["vendor"]), createProduct);

router.post(
  "/image/:id",
  auth(["vendor"]),
  upload.single("image"),
  uploadProductImage,
);

router.put("/:id", auth(["vendor"]), updateProduct);

router.delete("/:id", auth(["vendor"]), deleteProduct);

module.exports = router;
