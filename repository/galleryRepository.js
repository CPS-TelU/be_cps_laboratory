const prisma = require("../config/db.js");

const createGallery = async (galleryData) => {
  return await prisma.galleries.create({ data: galleryData });
};

const updateGallery = async (id, galleryData) => {
  return await prisma.galleries.update({
    where: { id: parseInt(id) },
    data: galleryData,
  });
};

module.exports = { createGallery, updateGallery };
