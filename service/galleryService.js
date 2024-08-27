const galleryRepository = require("../repository/galleryRepository.js");
const imagekit = require("../libs/imagekit.js");

const createGallery = async (title, description, file) => {
  const imageUpload = await Promise.all(
    file.map((file) => {
      return imagekit.upload({
        file: file.buffer,
        fileName: file.originalname,
        folder: "gallery",
      });
    })
  );

  const image = {};
  imageUpload.forEach((upload, index) => {
    image[`image_${index}`] = upload.url;
  });
  const galleryData = {
    title,
    description,
    ...image,
  };
  return await galleryRepository.createGallery(galleryData);
};

const updateGallery = async (id, title, description, file) => {
  let image = {};
  if (file && file.length > 0) {
    const imageUpload = await Promise.all(
      file.map((file) => {
        return imagekit.upload({
          file: file.buffer,
          fileName: file.originalname,
          folder: "gallery",
        });
      })
    );
    imageUpload.forEach((upload, index) => {
      image[`image_${index}`] = upload.url;
    });
  }
  const galleryData = {
    title,
    description,
    ...image,
  };
  return await galleryRepository.updateGallery(id, galleryData);
};

module.exports = { createGallery, updateGallery };
