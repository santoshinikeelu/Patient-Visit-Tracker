const express = require("express");
const router = express.Router();
const controller = require("../controllers/clinician.controller");

router.post("/", controller.createClinician);
router.get("/", controller.getClinicians);

module.exports = router;