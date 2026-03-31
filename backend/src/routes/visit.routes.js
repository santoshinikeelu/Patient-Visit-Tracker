const express = require("express");
const router = express.Router();
const controller = require("../controllers/visit.controller");

router.post("/", controller.createVisit);
router.get("/", controller.getVisits);

module.exports = router;