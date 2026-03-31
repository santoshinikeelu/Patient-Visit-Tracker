import Badge from "./Badge";

export default function VisitCard({ visit }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between">
        <div>
          <div className="font-semibold text-gray-800">
            {visit.clinician.name}
          </div>
          <div className="text-sm text-gray-500">
            visited {visit.patient.name}
          </div>
          <div className="text-sm mt-2 text-gray-600">
            {visit.notes}
          </div>
        </div>

        <div className="text-right">
          <Badge text="Completed" />
          <div className="text-xs text-gray-400 mt-2">
            {new Date(visit.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}