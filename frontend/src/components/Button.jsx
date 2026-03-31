export default function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-white transition
        ${disabled ? "bg-gray-400" : "bg-teal-500 hover:bg-teal-600"}
      `}
    >
      {children}
    </button>
  );
}