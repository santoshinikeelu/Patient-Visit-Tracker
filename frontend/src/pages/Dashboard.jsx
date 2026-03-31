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
    const c = await api.get("/clinicians");
    const p = await api.get("/patients");
    const v = await api.get("/visits");

    setClinicians(c.data);
    setPatients(p.data);
    setVisits(v.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addClinician = async () => {
    await api.post("/clinicians", { name: clinicianName });
    setClinicianName("");
    loadData();
  };

  const addPatient = async () => {
    await api.post("/patients", { name: patientName });
    setPatientName("");
    loadData();
  };

  const addVisit = async () => {
    await api.post("/visits", {
      clinicianId,
      patientId,
      notes,
    });
    loadData();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 gap-6">
        <Card title="Clinician Management">
          <div className="flex gap-2">
            <Input
              value={clinicianName}
              onChange={(e) => setClinicianName(e.target.value)}
              placeholder="Clinician name"
            />
            <Button onClick={addClinician}>Add</Button>
          </div>
        </Card>

        <Card title="Patient Management">
          <div className="flex gap-2">
            <Input
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Patient name"
            />
            <Button onClick={addPatient}>Add</Button>
          </div>
        </Card>

        <Card title="Create Visit">
          <div className="space-y-3">
            <select
              className="w-full border rounded-lg p-2"
              onChange={(e) => setClinicianId(e.target.value)}
            >
              <option>Select Clinician</option>
              {clinicians.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              className="w-full border rounded-lg p-2"
              onChange={(e) => setPatientId(e.target.value)}
            >
              <option>Select Patient</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <Input
              placeholder="Notes"
              onChange={(e) => setNotes(e.target.value)}
            />

            <Button onClick={addVisit}>Create Visit</Button>
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
        <div className="space-y-3">
          {visits.map((v) => (
            <VisitCard key={v.id} visit={v} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;