const express = require("express");
const adminRoutes = require("./routes/adminRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const assistantRoutes = require("./routes/assistantRoutes.js");
const galleryRoutes = require("./routes/galleryRoutes.js");
const session = require("express-session");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

let corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", adminRoutes);
app.use("/api", blogRoutes);
app.use("/api", assistantRoutes);
app.use("/api", galleryRoutes);

module.exports = app;
