const service = require("../services/clinician.service");

exports.createClinician = async (req, res) => {
  try {
    const data = await service.createClinician(req.body);
    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClinicians = async (req, res) => {
  try {
    const data = await service.getClinicians();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};