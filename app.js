const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Routes
const authRoutes = require("./src/routes/authRoutes");
const storeRoutes = require("./src/routes/storeRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const analyticsRoutes = require("./src/routes/analyticsRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const vendorRoutes = require("./src/routes/vendorRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");
const testRoutes = require("./src/routes/testRoutes");

// Error Handler
const errorHandler = require("./src/middleware/errorMiddleware");

const app = express();

// Security
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// Body Parser
app.use(express.json());

// Cookies
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/stores", storeRoutes);

app.use("/api/products", productRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/vendor", vendorRoutes);

app.use("/api/payment", paymentRoutes);

app.use("/api/test", testRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
