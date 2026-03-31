// import { useState } from "react";
// import api from "../api/api";

// function PatientForm({ refresh }) {
//   const [name, setName] = useState("");

//   const handleSubmit = async () => {
//     if (!name) return;
//     await api.post("/patients", { name });
//     setName("");
//     refresh();
//   };

//   return (
//     <div>
//       <h3>Add Patient</h3>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Patient name"
//       />
//       <button onClick={handleSubmit}>Add</button>
//     </div>
//   );
// }

// export default PatientForm;