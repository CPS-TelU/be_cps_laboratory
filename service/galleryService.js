const galleryRepository = require("../repository/galleryRepository.js");
const imagekit = require("../libs/imagekit.js");

const createGallery = async (title, description, file) => {
  let image = null;

  if (file) {
    const imageUpload = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "gallery",
    });
    image = imageUpload.url;
  }
  const galleryData = {
    title,
    description,
    image,
  };
  return await galleryRepository.createGallery(galleryData);
};

const updateGallery = async (id, data, file) => {
  let imageUrl = data.image;
  if (file) {
    const imageUpload = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "gallery",
    });
    imageUrl = imageUpload.url;
  }
  const galleryData = {
    ...data,
    image: imageUrl,
  };
  return await galleryRepository.updateGallery(id, galleryData);
};

const getAllGallery = async () => {
  return await galleryRepository.getAllGallery();
};

module.exports = { createGallery, updateGallery, getAllGallery };
