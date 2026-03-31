const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


exports.createClinician = (data) => {
  return prisma.clinician.create({
    data: { name: data.name }
  });
};

exports.getClinicians = () => {
  return prisma.clinician.findMany();
};
