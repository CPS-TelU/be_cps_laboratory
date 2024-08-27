const express = require("express");
const {
  createGallery,
  updateGallery,
} = require("../controller/galleryController.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.post("/gallery", upload.any("images"), createGallery);
router.put("/gallery/:id", upload.any("images"), updateGallery);

module.exports = router;
