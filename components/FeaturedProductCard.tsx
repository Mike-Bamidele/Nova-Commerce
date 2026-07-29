"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Plus } from "lucide-react";
import WishlistButton from "./WishlistButton";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

type FeaturedProductCardProps = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  comparePrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  eager?: boolean;
};

export default function FeaturedProductCard({
  id,
  name,
  image,
  category,
  price,
  comparePrice,
  rating,
  reviews,
  badge,
  eager = false,
}: FeaturedProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const hasDiscount = comparePrice && comparePrice > price;

  const handleAdd = () => {
    addToCart({ id, name, image, price });
    showToast(`${name} added to cart`);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="relative overflow-hidden bg-slate-50 dark:bg-white/5">
        {badge && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
            {badge}
          </span>
        )}

        <div className="absolute right-5 top-5 z-20">
          <WishlistButton productId={id} />
        </div>

        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            priority={eager}
            loading={eager ? "eager" : "lazy"}
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
            className="object-contain p-8 opacity-0 transition-[opacity,transform] duration-700 [&.loaded]:opacity-100 group-hover:scale-105"
onLoad={(e) => e.currentTarget.classList.add("loaded")}
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 transition-all duration-500 group-hover:opacity-100" />

          <button
            onClick={handleAdd}
            className="
              absolute bottom-5 right-5 z-20 flex h-11 w-11 cursor-pointer items-center
              justify-center rounded-full bg-white text-slate-900 opacity-0
              shadow-lg transition-all duration-300 translate-y-2
              group-hover:translate-y-0 group-hover:opacity-100
              hover:bg-slate-900 hover:text-white
              dark:bg-slate-900 dark:text-white dark:hover:bg-white dark:hover:text-slate-900
            "
            aria-label={`Add ${name} to cart`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <span className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {category}
        </span>

        <h3 className="mt-3 line-clamp-1 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {name}
        </h3>

        <div className="mt-4 flex items-center gap-1.5 text-sm">
          <Star size={15} className="fill-amber-400 text-amber-400" />
          <span className="font-medium text-slate-700 dark:text-slate-300">{rating}</span>
          <span className="text-slate-400 dark:text-slate-500">({reviews})</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">${price}</span>
            {hasDiscount && (
              <span className="text-sm text-slate-400 line-through dark:text-slate-500">${comparePrice}</span>
            )}
          </div>

          <Link
            href={`/products/${id}`}
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}