const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const storeRoutes = require("./src/routes/storeRoutes");
const productRoutes = require("./src/routes/productRoutes");
const testRoutes = require("./src/routes/testRoutes");
const cartRoutes = require("./src/routes/cartRoutes");

const authRoutes = require("./src/routes/authRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);
app.use("/api/test", testRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;
