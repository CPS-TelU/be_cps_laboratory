const {
  findAdminByKodas,
  createAdmin,
} = require("../repository/adminRepository.js");
const { hashPassword, comparePassword } = require("../utils/hashPassword.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (kodas, password) => {
  const admin = await findAdminByKodas(kodas);
  if (!admin) throw new Error("Invalid credentials");

  const isMatch = await comparePassword(password, admin.password);
  if (!isMatch) throw new Error("Your password or kodas is incorrect");

  const token = jwt.sign(
    { id: admin.id, kodas: admin.kodas },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token };
};
const register = async (kodas, password) => {
  const hashedPassword = await hashPassword(password);
  return createAdmin({ kodas, password: hashedPassword });
};

module.exports = { login, register };
