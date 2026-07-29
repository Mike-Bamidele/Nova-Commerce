"use client";

type ActiveFiltersProps = {
  search: string;
  category: string;
  sort: string;
  onClearSearch: () => void;
  onClearCategory: () => void;
  onResetAll: () => void;
};

export default function ActiveFilters({
  search,
  category,
  sort,
  onClearSearch,
  onClearCategory,
  onResetAll,
}: ActiveFiltersProps) {
  const hasFilters = search || category !== "All" || sort !== "featured";

  if (!hasFilters) return null;

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      {search && (
        <button
          onClick={onClearSearch}
          className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 text-sm transition hover:bg-slate-200 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:bg-white/10"
        >
          Search: &quot;{search}&quot; ✕
        </button>
      )}

      {category !== "All" && (
        <button
          onClick={onClearCategory}
          className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 text-sm transition hover:bg-slate-200 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:bg-white/10"
        >
          {category} ✕
        </button>
      )}

      {sort !== "featured" && (
        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm dark:bg-white/[0.06] dark:text-slate-300">
          {sort === "price-low" && "Price: Low to High"}
          {sort === "price-high" && "Price: High to Low"}
          {sort === "rating" && "Highest Rated"}
          {sort === "name" && "Name (A–Z)"}
        </div>
      )}

      <button
        onClick={onResetAll}
        className="cursor-pointer text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
      >
        Clear All
      </button>
    </div>
  );
}