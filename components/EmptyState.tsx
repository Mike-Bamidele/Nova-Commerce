import { SearchX } from "lucide-react";

type EmptyStateProps = {
  onClear: () => void;
};

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 px-8 py-24 text-center dark:border-white/10 dark:bg-white/[0.02]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/5">
        <SearchX size={36} className="text-slate-400 dark:text-slate-500" />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white">No products found</h2>

      <p className="mt-4 max-w-md leading-7 text-slate-500 dark:text-slate-400">
        We couldn&apos;t find any products matching your search or selected category.
        Try another keyword or clear your filters.
      </p>

      <button
        onClick={onClear}
        className="mt-10 cursor-pointer rounded-2xl bg-slate-900 px-7 py-3 font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
      >
        Clear Filters
      </button>
    </div>
  );
}