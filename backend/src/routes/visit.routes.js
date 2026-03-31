const express = require("express");
const router = express.Router();
const controller = require("../controllers/visit.controller");

router.get("/", controller.getVisits);
router.post("/", controller.createVisit);

module.exports = router;