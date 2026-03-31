export default function StatsCard({ title, value }) {
  return (
    <div className="bg-teal-50 rounded-lg p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-bold text-teal-600">{value}</div>
    </div>
  );
}