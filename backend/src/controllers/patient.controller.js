const service = require("../services/patient.service");

exports.createPatient = async (req, res) => {
  try {
    const data = await service.createPatient(req.body);
    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const data = await service.getPatients();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};