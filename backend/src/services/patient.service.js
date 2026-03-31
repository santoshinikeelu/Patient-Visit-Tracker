const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createPatient = (data) => {
  return prisma.patient.create({
    data: { name: data.name }
  });
};

exports.getPatients = () => {
  return prisma.patient.findMany();
};
