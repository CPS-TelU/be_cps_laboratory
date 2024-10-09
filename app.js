const express = require("express");
const adminRoutes = require("./routes/adminRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const assistantRoutes = require("./routes/assistantRoutes.js");
const galleryRoutes = require("./routes/galleryRoutes.js");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" }, // Secure cookie hanya aktif di production
  })
);

let corsOptions = {
  origin: ["http://localhost:3000", "https://www.cpslaboratory.com"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // Izinkan pengiriman cookie dan credentials
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

app.use(express.json());

app.use("/auth", adminRoutes);
app.use("/api", blogRoutes);
app.use("/api", assistantRoutes);
app.use("/api", galleryRoutes);

module.exports = app;
