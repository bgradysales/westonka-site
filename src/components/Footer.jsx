export default function Footer({ text }) {
  return (
    <footer className="py-8 px-6 bg-white border-t border-stone-200 text-stone-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between text-sm">
        <p>© {new Date().getFullYear()} Westonka Outdoor Living</p>
        <p>{text}</p>
      </div>
    </footer>
  );
}