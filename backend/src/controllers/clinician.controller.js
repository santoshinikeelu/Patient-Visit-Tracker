const service = require("../services/clinician.service");

exports.getClinicians = async (req, res) => {
  try {
    const data = await service.getClinicians();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createClinician = async (req, res) => {
  try {
    const data = await service.createClinician(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};