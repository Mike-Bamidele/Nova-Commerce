type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
      {children}
    </span>
  );
}