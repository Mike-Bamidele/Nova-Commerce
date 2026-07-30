type StockBadgeProps = {
  stock?: number;
};

export default function StockBadge({ stock }: StockBadgeProps) {
  if (stock === undefined) return null;

  if (stock === 0) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 dark:text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        Out of Stock
      </span>
    );
  }

  if (stock <= 5) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 dark:text-amber-400">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
        Only {stock} left in stock
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
      In Stock
    </span>
  );
}