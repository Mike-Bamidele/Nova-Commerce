"use client";

import { useRecentlyViewed } from "@/context/RecentlyViewedContext";
import { products } from "@/data/products";
import FeaturedProductCard from "./FeaturedProductCard";

export default function RecentlyViewedSection({ excludeId }: { excludeId?: number }) {
  const { recentlyViewed } = useRecentlyViewed();

  const items = recentlyViewed
    .filter((id) => id !== excludeId)
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="mt-28">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Recently Viewed</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Pick up where you left off.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <FeaturedProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
            comparePrice={product.comparePrice}
            rating={product.rating}
            reviews={product.reviews}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
}