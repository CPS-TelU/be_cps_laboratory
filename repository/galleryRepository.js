const prisma = require("../config/db.js");

const createGallery = async (galleryData) => {
  return await prisma.gallery.create({ data: galleryData });
};

const updateGallery = async (id, galleryData) => {
  return await prisma.gallery.update({
    where: { id: parseInt(id) },
    data: galleryData,
  });
};
const getAllGallery = async () => {
  return await prisma.gallery.findMany();
};

module.exports = { createGallery, updateGallery, getAllGallery };
