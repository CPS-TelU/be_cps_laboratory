const blogRepository = require("../repository/blogRepository.js");
const imagekit = require("../libs/imagekit.js");

const createBlog = async (author, title, description, content, files) => {
  const imageUploads = await Promise.all(
    files.map((file) => {
      return imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: "blogs",
      });
    })
  );

  const images = {};
  imageUploads.forEach((upload, index) => {
    images[`image_${index}`] = upload.url;
  });

  const blogData = {
    author,
    title,
    description,
    content,
    ...images,
  };

  return await blogRepository.createBlog(blogData);
};

const updateBlog = async (id, data, files) => {
  let images = {};
  if (files && files.length > 0) {
    const imageUploads = await Promise.all(
      files.map((file) => {
        return imagekit.upload({
          file: file.buffer,
          fileName: file.originalname,
          folder: "blogs",
        });
      })
    );

    imageUploads.forEach((upload, index) => {
      images[`image_${index}`] = upload.url;
    });
  }

  const blogData = {
    ...data,
    ...images,
  };

  return await blogRepository.updateBlog(id, blogData);
};

const getAllBlogs = async () => {
  return await blogRepository.getAllBlogs();
};

const findBlogById = async (id) => {
  return await blogRepository.findBlogById(id);
};

module.exports = {
  createBlog,
  updateBlog,
  getAllBlogs,
  findBlogById,
};
