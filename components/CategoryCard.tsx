type CategoryCardProps = {
  title: string;
  description: string;
  emoji: string;
};

export default function CategoryCard({
  title,
  description,
  emoji,
}: CategoryCardProps) {
  return (
    <div className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-8 text-5xl">{emoji}</div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-center font-medium text-indigo-600">
        Explore →
      </div>
    </div>
  );
}