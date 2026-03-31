const service = require("../services/visit.service");

exports.getVisits = async (req, res) => {
  try {
    const data = await service.getVisits();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVisit = async (req, res) => {
  try {
    const data = await service.createVisit(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};