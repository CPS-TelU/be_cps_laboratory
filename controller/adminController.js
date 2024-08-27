const adminController = require("../service/adminService.js");

const login = async (req, res) => {
  const { kodas, password } = req.body;
  try {
    const result = await adminController.login(kodas, password);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  const { kodas, password } = req.body;
  try {
    const newAdmin = await adminController.register(kodas, password);
    res.status(201).json({
      message: "Admin successfully created",
      data: newAdmin,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
};

module.exports = { login, register, logout };
