const assistantRepository = require("../repository/assistantRepository.js");
const imagekit = require("../libs/imagekit.js");
const createAssistant = async (
  name,
  instagram,
  linkedin,
  github,
  divisi,
  kode,
  role,
  major,
  file
) => {
  let image = null;

  if (file) {
    const imageUpload = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "assistants",
    });
    image = imageUpload.url;
  }

  const assistantData = {
    name,
    instagram,
    linkedin,
    github,
    divisi,
    kode,
    role,
    major,
    image,
  };

  return await assistantRepository.createAssistant(assistantData);
};

const updateAssistant = async (id, data, file) => {
  let imageUrl = data.image;

  if (file) {
    const imageUpload = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "assistants",
    });
    imageUrl = imageUpload.url;
  }

  const assistantData = {
    ...data,
    image: imageUrl,
  };

  return await assistantRepository.updateAssistant(id, assistantData);
};

const getAllAssistants = async () => {
  return await assistantRepository.getAllAssistants();
};

const findAssistantById = async (id) => {
  return await assistantRepository.findAssistantById(id);
};

module.exports = {
  createAssistant,
  updateAssistant,
  getAllAssistants,
  findAssistantById,
};
