const express = require("express");
const {
  createBlog,
  updateBlog,
  getAllBlogs,
  findBlogById,
} = require("../controller/blogController.js");
const upload = require("../middleware/multer.js");
const router = express.Router();

router.post("/blog", upload.any("images"), createBlog);
router.put("/blogs/:id", upload.any("images"), updateBlog);
router.get("/Blogs", getAllBlogs);
router.get("/blogs/:id", findBlogById);

module.exports = router;
