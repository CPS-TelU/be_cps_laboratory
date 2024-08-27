const assistantService = require("../service/assistantService.js");
const createAssistant = async (req, res) => {
  const { name, instagram, linkedin, github } = req.body;

  try {
    const assistant = await assistantService.createAssistant(
      name,
      instagram,
      linkedin,
      github,
      req.file
    );
    res.status(201).json(assistant);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create assistant", details: error.message });
  }
};

const updateAssistant = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedAssistant = await assistantService.updateAssistant(
      id,
      data,
      req.file
    );
    res.status(200).json(updatedAssistant);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update assistant", details: error.message });
  }
};

const getAllAssistants = async (req, res) => {
  try {
    const assistants = await assistantService.getAllAssistants();
    res.status(200).json(assistants);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get assistants", details: error.message });
  }
};

const findAssistantById = async (req, res) => {
  const { id } = req.params;

  try {
    const assistant = await assistantService.findAssistantById(id);
    if (assistant) {
      res.status(200).json(assistant);
    } else {
      res.status(404).json({ error: "Assistant not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to find assistant", details: error.message });
  }
};

module.exports = {
  createAssistant,
  updateAssistant,
  getAllAssistants,
  findAssistantById,
};
