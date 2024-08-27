const blogService = require("../service/blogService.js");
const createBlog = async (req, res) => {
  const { author, title, description, content } = req.body;

  try {
    const blog = await blogService.createBlog(
      author,
      title,
      description,
      content,
      req.files
    );
    res.status(201).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create blog", details: error.message });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedBlog = await blogService.updateBlog(id, data, req.files);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update blog", details: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve blogs", details: error.message });
  }
};

const findBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await blogService.findBlogById(id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve blog", details: error.message });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  getAllBlogs,
  findBlogById,
};
