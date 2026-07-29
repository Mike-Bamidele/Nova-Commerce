import ProductGridSkeleton from "@/components/ProductGridSkeleton";

export default function WishlistLoading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mb-8 h-5 w-32 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

      <div className="mb-14">
        <div className="h-4 w-20 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-4 h-12 w-80 animate-pulse rounded bg-slate-200 dark:bg-white/10" />
        <div className="mt-5 h-6 w-full max-w-2xl animate-pulse rounded bg-slate-200 dark:bg-white/10" />
      </div>

      <div className="mb-10 h-5 w-32 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

      <ProductGridSkeleton count={4} />
    </main>
  );
}