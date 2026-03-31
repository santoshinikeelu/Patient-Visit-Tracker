export default function Badge({ text }) {
  return (
    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
      {text}
    </span>
  );
}