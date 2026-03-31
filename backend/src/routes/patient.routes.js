const express = require("express");
const router = express.Router();
const controller = require("../controllers/patient.controller");

router.post("/", controller.createPatient);
router.get("/", controller.getPatients);

module.exports = router;