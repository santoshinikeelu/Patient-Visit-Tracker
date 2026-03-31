import { useEffect, useState } from "react";
import api from "../api/api";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import StatsCard from "../components/StatsCard";
import VisitCard from "../components/VisitCard";

function Dashboard() {
  const [clinicianName, setClinicianName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [clinicians, setClinicians] = useState([]);
  const [patients, setPatients] = useState([]);
  const [visits, setVisits] = useState([]);
  const [clinicianId, setClinicianId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [notes, setNotes] = useState("");

  const loadData = async () => {
    const clinicians = await api.get("/clinicians");
    const patients = await api.get("/patients");
    const visits = await api.get("/visits");

    setClinicians(clinicians);
    setPatients(patients);
    setVisits(visits);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addClinician = async () => {
    try {
      await api.post("/clinicians", { name: clinicianName });
      setClinicianName("");
      await loadData();
    } catch (error) {
      console.error("Error adding clinician", error);
      alert("Failed to add clinician");
    }
  };

  const addPatient = async () => {
    try {
      await api.post("/patients", { name: patientName });
      setPatientName("");
      await loadData();
    } catch (error) {
      alert("Failed to add patient");
    }
  };

  const addVisit = async () => {
    try {
      await api.post("/visits", {
        clinicianId,
        patientId,
        notes,
      });
      setClinicianId("");
      setPatientId("");
      setNotes("");
      await loadData();
    } catch (error) {
      alert("Failed to create visit");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Header />

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 gap-6">
        <Card title="Clinician Management">
          <div className="flex gap-2">
            <Input
              value={clinicianName}
              onChange={(e) => setClinicianName(e.target.value)}
              placeholder="Clinician name"
            />
            <Button onClick={addClinician} disabled={!clinicianName}>
              Add Clinician
            </Button>
          </div>
        </Card>

        <Card title="Patient Management">
          <div className="flex gap-2">
            <Input
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Patient name"
            />
            <Button onClick={addPatient} disabled={!patientName}>
              Add Patient
            </Button>
          </div>
        </Card>

        <Card title="Create Visit">
          <div className="space-y-3">
            <select
              className="w-full border rounded-lg p-2"
              value={clinicianId}
              onChange={(e) => setClinicianId(e.target.value)}
            >
              <option value="">Select Clinician</option>
              {clinicians.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              className="w-full border rounded-lg p-2"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
            >
              <option value="">Select Patient</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <Input
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <Button
              onClick={addVisit}
              disabled={!clinicianId || !patientId || !notes}
            >
              Create Visit
            </Button>
          </div>
        </Card>

        <Card title="Quick Stats">
          <div className="grid grid-cols-3 gap-3">
            <StatsCard title="Patients" value={patients.length} />
            <StatsCard title="Visits" value={visits.length} />
            <StatsCard title="Clinicians" value={clinicians.length} />
          </div>
        </Card>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-lg font-semibold mb-4">Recent Visits</h2>

        {visits.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow-sm text-gray-400 text-center">
            No visits recorded yet
          </div>
        ) : (
          <div className="space-y-3">
            {visits.map((v) => (
              <VisitCard key={v.id} visit={v} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;