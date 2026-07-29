"use client";

import { ChevronDown } from "lucide-react";

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative shrink-0">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          cursor-pointer appearance-none rounded-2xl border border-slate-200
          bg-white py-3 pl-5 pr-11 text-sm font-medium text-slate-700 shadow-sm
          transition-all duration-300 hover:border-slate-400
          focus:border-indigo-500 focus:outline-none
          dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-white/25 dark:focus:border-indigo-400
        "
      >
        <option value="featured" className="dark:bg-slate-900">Featured</option>
        <option value="price-low" className="dark:bg-slate-900">Price: Low to High</option>
        <option value="price-high" className="dark:bg-slate-900">Price: High to Low</option>
        <option value="rating" className="dark:bg-slate-900">Highest Rated</option>
        <option value="name" className="dark:bg-slate-900">Name (A–Z)</option>
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
      />
    </div>
  );
}