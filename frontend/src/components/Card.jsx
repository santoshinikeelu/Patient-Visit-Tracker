export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}