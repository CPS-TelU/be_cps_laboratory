const galleryService = require("../service/galleryService");

const createGallery = async (req, res) => {
  const { title, description } = req.body;
  try {
    const gallery = await galleryService.createGallery(
      title,
      description,
      req.files
    );
    res.status(201).json(gallery);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create gallery", details: error.message });
  }
};

const updateGallery = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const gallery = await galleryService.updateGallery(
      id,
      title,
      description,
      req.files
    );
    res.status(200, "Updated gallery successfully").json(gallery);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update gallery", details: error.message });
  }
};

module.exports = { createGallery, updateGallery };
