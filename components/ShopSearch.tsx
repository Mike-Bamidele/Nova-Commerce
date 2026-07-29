"use client";

import { Search } from "lucide-react";

type ShopSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ShopSearch({ value, onChange }: ShopSearchProps) {
  return (
    <div className="relative max-w-xl">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full rounded-2xl border border-slate-200 bg-white
          py-4 pl-14 pr-12 text-slate-700 shadow-sm outline-none
          transition-all duration-300 focus:border-indigo-500
          focus:ring-4 focus:ring-indigo-100
          dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}