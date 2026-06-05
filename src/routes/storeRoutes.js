const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createStore,
  getMyStore,
  updateStore,
  deleteStore,
} = require("../controllers/storeController");

router.post("/", auth(["vendor"]), createStore);

router.get("/my-store", auth(["vendor"]), getMyStore);

router.put("/my-store", auth(["vendor"]), updateStore);

router.delete("/my-store", auth(["vendor"]), deleteStore);

module.exports = router;
