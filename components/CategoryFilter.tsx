"use client";

import { products } from "@/data/products";

type CategoryFilterProps = {
  value: string;
  onChange: (category: string) => void;
};

const categories = ["All", "Tech", "Fashion", "Wellness", "Productivity"];

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  const countFor = (category: string) =>
    category === "All" ? products.length : products.filter((p) => p.category === category).length;

  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((category) => {
        const active = value === category;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`
              flex cursor-pointer items-center gap-2 rounded-full px-5 py-3
              text-sm font-medium transition-all duration-300
              ${
                active
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 dark:bg-white dark:text-slate-900 dark:shadow-none"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-white/25"
              }
            `}
          >
            {category}
            <span
              className={`
                rounded-full px-1.5 py-0.5 text-xs
                ${active ? "bg-white/20" : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400"}
              `}
            >
              {countFor(category)}
            </span>
          </button>
        );
      })}
    </div>
  );
}