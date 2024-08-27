const express = require("express");
const adminController = require("../controller/adminController.js");
const authentication = require("../middleware/authentication.js");
const router = express.Router();

router.post("/login", adminController.login);
router.post("/register", adminController.register);
router.post("/logout", authentication, adminController.logout);

module.exports = router;
