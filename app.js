const express = require("express");
const adminRoutes = require("./routes/adminRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const assistantRoutes = require("./routes/assistantRoutes.js");
const galleryRoutes = require("./routes/galleryRoutes.js");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Setup session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" }, // secure true only in production
  })
);

// CORS options to allow localhost and production domain
let corsOptions = {
  origin: [
    "http://localhost:3000", // local development
    "https://www.cpslaboratory.com", // production
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allowed HTTP methods
  credentials: true, // allow credentials like cookies or sessions
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Handle preflight requests (for methods like POST, DELETE, etc.)
app.options("*", cors(corsOptions));

// JSON body parsing middleware
app.use(express.json());

// Routes
app.use("/auth", adminRoutes);
app.use("/api", blogRoutes);
app.use("/api", assistantRoutes);
app.use("/api", galleryRoutes);

module.exports = app;
