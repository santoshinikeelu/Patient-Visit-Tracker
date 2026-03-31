function VisitList({ visits }) {
 return (
    <div>
      <h3 className="font-semibold mb-2">Visits</h3>
      <ul className="space-y-2">
        {visits.map((v) => (
          <li
            key={v.id}
            className="border p-3 rounded bg-gray-50"
          >
            <strong>{v.clinician.name}</strong> visited{" "}
            <strong>{v.patient.name}</strong>
            <div className="text-sm text-gray-600">{v.notes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VisitList;