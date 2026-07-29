"use client";

import Badge from "./Badge";
import CategoryCard from "./CategoryCard";
import Section from "./Section";
import { products } from "@/data/products";

const categories = [
  {
    image: "/images/categories/fashion.jpg",
    title: "Fashion",
    description: "Modern clothing and everyday essentials.",
  },
  {
    image: "/images/categories/productivity.jpg",
    title: "Productivity",
    description: "Tools that help you do your best work.",
  },
  {
    image: "/images/categories/wellness.jpg",
    title: "Wellness",
    description: "Health products for body and mind.",
  },
  {
    image: "/images/categories/tech.jpg",
    title: "Tech",
    description: "Smart accessories built for modern life.",
  },
];

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
        {categories.map((category, index) => (
          <CategoryCard
            key={category.title}
            image={category.image}
            title={category.title}
            description={category.description}
            count={products.filter((p) => p.category === category.title).length}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}