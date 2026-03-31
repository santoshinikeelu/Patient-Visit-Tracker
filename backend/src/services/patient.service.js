const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPatients = () => {
  return prisma.patient.findMany();
};

exports.createPatient = (data) => {
  return prisma.patient.create({
    data: { name: data.name }
  });
};