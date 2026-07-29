import ProductGridSkeleton from "@/components/ProductGridSkeleton";

export default function ShopLoading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mb-8 h-5 w-32 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

      <div className="mb-14">
        <div className="h-4 w-16 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-4 h-12 w-96 max-w-full animate-pulse rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-5 h-6 w-full max-w-2xl animate-pulse rounded bg-slate-200 dark:bg-white/10" />
      </div>

      <div className="mb-10 flex flex-wrap gap-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-11 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
        ))}
      </div>

      <ProductGridSkeleton count={8} />
    </main>
  );
}