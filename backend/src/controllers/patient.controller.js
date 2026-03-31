const service = require("../services/patient.service");

exports.getPatients = async (req, res) => {
  try {
    const data = await service.getPatients();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPatient = async (req, res) => {
  try {
    const data = await service.createPatient(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};