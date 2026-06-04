const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const storeRoutes = require("./src/routes/storeRoutes");

const authRoutes = require("./src/routes/authRoutes");

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

module.exports = app;
