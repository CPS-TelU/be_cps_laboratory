const express = require("express");
const {
  createGallery,
  updateGallery,
  getAllGallery,
} = require("../controller/galleryController.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.post("/gallery", upload.single("image"), createGallery);
router.put("/gallery/:id", upload.single("image"), updateGallery);
router.get("/galleries", getAllGallery);

module.exports = router;
