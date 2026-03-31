// import { useState } from "react";
// import api from "../api/api";

// function ClinicianForm({ refresh }) {
//   const [name, setName] = useState("");

//   const handleSubmit = async () => {
//     if (!name) return;
//     await api.post("/clinicians", { name });
//     setName("");
//     refresh();
//   };

//   return (
//     <div>
//       <h3>Add Clinician</h3>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Clinician name"
//       />
//       <button onClick={handleSubmit}>Add</button>
//     </div>
//   );
// }

// export default ClinicianForm;