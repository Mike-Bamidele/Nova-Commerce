import Badge from "./Badge";
import CategoryCard from "./CategoryCard";
import Section from "./Section";

export default function Categories() {
  return (
    <Section className="bg-slate-50">
      <div className="text-center">
        <Badge>Categories</Badge>

        <h2 className="mt-6 text-5xl font-bold text-slate-900">
          Browse by Lifestyle
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Carefully curated collections designed around the way you live,
          work, stay healthy and express yourself.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <CategoryCard
          emoji="👕"
          title="Fashion"
          description="Modern clothing and everyday essentials."
        />

        <CategoryCard
          emoji="💻"
          title="Productivity"
          description="Tools that help you do your best work."
        />

        <CategoryCard
          emoji="🌿"
          title="Wellness"
          description="Health products for body and mind."
        />

        <CategoryCard
          emoji="🎧"
          title="Tech"
          description="Smart accessories built for modern life."
        />
      </div>
    </Section>
  );
}