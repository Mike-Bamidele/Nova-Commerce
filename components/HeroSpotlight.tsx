"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

type HeroSpotlightProps = {
  products: Product[];
  interval?: number;
};

export default function HeroSpotlight({ products, interval = 4500 }: HeroSpotlightProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (paused || products.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, interval);
    return () => clearInterval(timer);
  }, [paused, products.length, interval]);

  const product = products[index];
  if (!product) return null;

  const hasDiscount = product.comparePrice && product.comparePrice > product.price;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-44 lg:w-52 rounded-[28px] border border-white/60 bg-white/90 p-3 shadow-[0_30px_60px_rgba(15,23,42,0.14)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link href={`/products/${product.id}`}>
            {product.badge && (
              <span className="mb-1.5 inline-block rounded-full bg-slate-900/90 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white dark:bg-white dark:text-slate-900">
                {product.badge}
              </span>
            )}

            <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50 dark:bg-white/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="220px"
                className="object-contain p-2.5"
              />
            </div>

            <p className="mt-2 line-clamp-1 text-sm font-semibold text-slate-900 dark:text-white">
              {product.name}
            </p>

            <div className="mt-1 flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                ({product.reviews.toLocaleString()})
              </span>
            </div>
          </Link>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
                ${product.price}
              </span>
              {hasDiscount && (
                <span className="text-[10px] text-slate-400 line-through dark:text-slate-500">
                  ${product.comparePrice}
                </span>
              )}
            </div>

            <button
              onClick={() => {
                addToCart({ id: product.id, name: product.name, image: product.image, price: product.price });
                showToast(`${product.name} added to cart`);
              }}
              className="
                flex h-7 w-7 cursor-pointer items-center justify-center rounded-full
                bg-slate-100 text-slate-700 transition-colors duration-300
                hover:bg-slate-900 hover:text-white
                dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-900
              "
              aria-label={`Add ${product.name} to bag`}
            >
              +
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="mt-3 flex justify-center gap-1.5">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-colors duration-300 ${
              i === index ? "w-4 bg-slate-900 dark:bg-white" : "w-1.5 bg-slate-300 dark:bg-white/20"
            }`}
            aria-label={`Show product ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}