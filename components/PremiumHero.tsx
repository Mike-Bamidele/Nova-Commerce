"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Truck, Star, Plus, ArrowRight } from "lucide-react";

import AmbientBackground from "./AmbientBackground";
import Container from "./Container";
import HeroSpotlight from "./HeroSpotlight";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import Link from "next/link";

import { products, type Product } from "@/data/products";

const categories = ["Fashion", "Tech", "Productivity", "Wellness"];

const trustBadges = [
  { icon: ShieldCheck, text: "Secure Checkout" },
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: Check, text: "30-Day Returns" },
];

const heroProductIds = {
  featured: 1,
  floating: [
  { id: 7, position: "top-0 right-0 lg:-top-4 lg:-right-6 lg:-right-10", size: "w-28 lg:w-32" },
  { id: 24, position: "bottom-0 left-0 lg:-bottom-2 lg:-left-6 lg:-left-10", size: "w-28 lg:w-32" },
  { id: 18, position: "bottom-0 right-0 lg:-bottom-8 lg:-right-2 lg:-right-6", size: "w-28 lg:w-32" },
],
};

const spotlightIds = [12, 50, 9, 33, 13, 14, 10, 1, 7, 3, 21, 55, 32, 4, 8, 35, 40];

const featuredProduct = products.find((p) => p.id === heroProductIds.featured);
const heroProduct = featuredProduct ?? products[0];

const spotlightProducts = spotlightIds
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is Product => Boolean(p));

const floatingProducts = heroProductIds.floating
  .map((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return null;
    return { ...product, position: item.position, size: item.size };
  })
  .filter((p): p is Product & { position: string; size: string } => p !== null);

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

type FloatingCardProps = {
  product: Product;
  className?: string;
  large?: boolean;
};

function FloatingCard({ product, className = "", large = false }: FloatingCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const hasDiscount = product.comparePrice && product.comparePrice > product.price;

  const handleAdd = () => {
    addToCart({ id: product.id, name: product.name, image: product.image, price: product.price });
    showToast(`${product.name} added to cart`);
  };

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`
          group ${large ? "w-44 lg:w-52" : "w-full"}
          rounded-[24px] border border-white/60 bg-white/95 p-2.5
          shadow-[0_20px_50px_rgba(15,23,42,0.14)]
          transition-shadow duration-300
          hover:shadow-[0_30px_70px_rgba(15,23,42,0.2)]
          dark:border-white/10 dark:bg-slate-900/95 dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
          dark:hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)]
        `}
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
              sizes="220px"
              className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <p className="mt-2 line-clamp-1 text-xs font-semibold text-slate-900 dark:text-white lg:text-sm">
            {product.name}
          </p>

          <div className="mt-1 flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{product.rating.toFixed(1)}</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">({product.reviews.toLocaleString()})</span>
          </div>
        </Link>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
              ${product.price}
            </span>
            {hasDiscount && (
              <span className="text-[10px] text-slate-400 line-through dark:text-slate-500">${product.comparePrice}</span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className="
              flex h-7 w-7 cursor-pointer items-center justify-center rounded-full
              bg-slate-100 text-slate-700 transition-all duration-300
              hover:bg-slate-900 hover:text-white
              dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-900
            "
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PremiumHero() {
  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* LEFT SIDE */}
          <div className="relative z-20 -mt-10">
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white dark:bg-white dark:text-slate-900"
            >
              New Season
            </motion.span>

            <motion.div variants={fadeUp} className="mt-6">
              <h1 className="max-w-xl text-4xl leading-[1.05] text-slate-950 dark:text-white sm:text-5xl xl:text-6xl">
                Discover
                <span className="block">Premium</span>
                <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent dark:from-white dark:via-slate-300 dark:to-slate-500">
                  {heroProduct.category}
                </span>
                <span className="block">Essentials</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg leading-8 text-slate-600 dark:text-slate-400">
              {heroProduct.description?.slice(0, 150)}...
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-900 dark:shadow-none dark:hover:bg-slate-200"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/shop?view=lookbook"
                className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5"
              >
                Explore Lookbook
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">{heroProduct.rating.toFixed(1)}/5</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {heroProduct.reviews.toLocaleString()}+ reviews · 3,200+ customers
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 backdrop-blur-sm shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200/70 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  {category}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div variants={fadeUp} className="relative mx-auto mt-16 aspect-square w-full max-w-lg lg:-mt-35">
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <HeroSpotlight products={spotlightProducts} />
            </div>

            {floatingProducts.map((product) => (
              <div key={product.id} className={`absolute z-10 ${product.position} ${product.size}`}>
                <FloatingCard product={product} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}