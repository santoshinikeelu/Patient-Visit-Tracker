const service = require("../services/visit.service");

exports.createVisit = async (req, res) => {
  try {
    const data = await service.createVisit(req.body);
    res.status(201).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVisits = async (req, res) => {
  try {
    const data = await service.getVisits();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};