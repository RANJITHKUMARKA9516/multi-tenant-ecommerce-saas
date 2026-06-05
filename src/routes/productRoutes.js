const express = require("express");
// const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createProduct,
  getMyProducts,
  updateProduct,
  deleteProduct,
  uploadProductImage,
} = require("../controllers/productController");

router.post("/", auth(["vendor"]), createProduct);
// router.post(
//   "/image/:id",
//   auth(["vendor"]),
//   upload.single("image"),
//   uploadProductImage,
// );

router.get("/my-products", auth(["vendor"]), getMyProducts);

router.put("/:id", auth(["vendor"]), updateProduct);

router.delete("/:id", auth(["vendor"]), deleteProduct);

module.exports = router;
