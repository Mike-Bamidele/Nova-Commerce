export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]">
      <div className="h-72 bg-slate-100 dark:bg-white/5" />
      <div className="p-6">
        <div className="h-3 w-20 rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-3 h-5 w-3/4 rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-4 h-4 w-24 rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-6 flex items-center justify-between">
          <div className="h-6 w-16 rounded bg-slate-200 dark:bg-white/10" />
          <div className="h-9 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}