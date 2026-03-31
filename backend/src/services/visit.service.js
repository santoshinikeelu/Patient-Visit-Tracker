const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getVisits = () => {
  return prisma.visit.findMany({
    include: {
      clinician: true,
      patient: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
};

exports.createVisit = (data) => {
  return prisma.visit.create({
    data: {
      clinicianId: Number(data.clinicianId),
      patientId: Number(data.patientId),
      notes: data.notes
    }
  });
};