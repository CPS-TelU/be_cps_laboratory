const prisma = require("../config/db.js");

const createAssistant = async (assistantData) => {
  return await prisma.assistant.create({ data: assistantData });
};

const updateAssistant = async (id, assistantData) => {
  return await prisma.assistant.update({
    where: { id: parseInt(id) },
    data: assistantData,
  });
};

const getAllAssistants = async () => {
  return await prisma.assistant.findMany();
};

const findAssistantById = async (id) => {
  return await prisma.assistant.findUnique({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createAssistant,
  updateAssistant,
  getAllAssistants,
  findAssistantById,
};
