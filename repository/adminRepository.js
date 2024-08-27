const prisma = require("../config/db.js");

const createAdmin = async (data) => {
  return await prisma.admin.create({ data });
};
const findAdminByKodas = async (kodas) => {
  return await prisma.admin.findUnique({ where: { kodas } });
};
module.exports = { createAdmin, findAdminByKodas };
