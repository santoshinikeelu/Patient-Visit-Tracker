export default function Header() {
  return (
    <div className="sticky top-0 bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-teal-600">
        Patient Visit Tracker
      </h1>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center">
          S
        </div>
      </div>
    </div>
  );
}