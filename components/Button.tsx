type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-700"
      : "border border-slate-300 text-slate-900 hover:bg-slate-100";

  return (
    <button
      className={`rounded-full px-8 py-4 font-medium transition duration-300 ${styles}`}
    >
      {children}
    </button>
  );
}