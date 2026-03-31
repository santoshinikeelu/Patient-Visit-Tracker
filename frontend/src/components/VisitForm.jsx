import { useState } from "react";
import api from "../api/api";

function VisitForm({ clinicians, patients, refresh }) {
  const [clinicianId, setClinicianId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    if (!clinicianId || !patientId) return;

    await api.post("/visits", {
      clinicianId,
      patientId,
      notes,
    });

    refresh();
  };

  return (
    <div>
      <h3>Create Visit</h3>

      <select onChange={(e) => setClinicianId(e.target.value)}>
        <option>Select Clinician</option>
        {clinicians.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <select onChange={(e) => setPatientId(e.target.value)}>
        <option>Select Patient</option>
        {patients.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>

      <input
        placeholder="Notes"
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={handleSubmit}>Create Visit</button>
    </div>
  );
}

export default VisitForm;