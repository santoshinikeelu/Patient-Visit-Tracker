export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
    >
      {children}
    </button>
  );
}