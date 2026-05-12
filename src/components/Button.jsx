export default function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-700",
    outline: "border border-stone-300 bg-white text-neutral-900 hover:bg-stone-100",
  };

  const sizes = {
    default: "h-10 px-5 py-2 text-sm",
    lg: "h-12 px-7 py-3 text-base",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 ${
        variants[variant] || variants.default
      } ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}