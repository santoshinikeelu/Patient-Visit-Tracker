const express = require("express");
const cors = require("cors");

const clinicianRoutes = require("./routes/clinician.routes");
const patientRoutes = require("./routes/patient.routes");
const visitRoutes = require("./routes/visit.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clinicians", clinicianRoutes);
app.use("/patients", patientRoutes);
app.use("/visits", visitRoutes);

module.exports = app;