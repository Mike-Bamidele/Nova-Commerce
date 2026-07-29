export default function ProductLoading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 h-11 w-40 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />

      <div className="grid gap-14 lg:grid-cols-2">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-24 w-24 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/10" />
            ))}
          </div>
          <div className="flex-1 animate-pulse rounded-[32px] bg-slate-100 p-12 dark:bg-white/5">
            <div className="aspect-square rounded-2xl bg-slate-200 dark:bg-white/10" />
          </div>
        </div>

        <div>
          <div className="flex gap-3">
            <div className="h-8 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
            <div className="h-8 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-white/10" />
          </div>

          <div className="mt-6 h-14 w-full max-w-md animate-pulse rounded bg-slate-200 dark:bg-white/10" />
          <div className="mt-3 h-14 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

          <div className="mt-6 h-6 w-48 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

          <div className="mt-10 h-12 w-40 animate-pulse rounded bg-slate-200 dark:bg-white/10" />

          <div className="mt-8 h-24 w-full max-w-xl animate-pulse rounded bg-slate-200 dark:bg-white/10" />

          <div className="mt-10 h-14 w-44 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    </main>
  );
}