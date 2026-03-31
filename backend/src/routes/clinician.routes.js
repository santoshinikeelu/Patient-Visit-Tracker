const express = require("express");
const router = express.Router();
const controller = require("../controllers/clinician.controller");

router.get("/", controller.getClinicians);
router.post("/", controller.createClinician);

module.exports = router;