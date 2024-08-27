const prisma = require("../config/db.js");
const createBlog = async (blogData) => {
  return await prisma.blogs.create({ data: blogData });
};

const updateBlog = async (id, blogData) => {
  return await prisma.blogs.update({
    where: { id: parseInt(id) },
    data: blogData,
  });
};

const getAllBlogs = async () => {
  return await prisma.blogs.findMany();
};

const findBlogById = async (id) => {
  return await prisma.blogs.findUnique({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createBlog,
  updateBlog,
  getAllBlogs,
  findBlogById,
};
