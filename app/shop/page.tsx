"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import ShopCatalog from "@/components/ShopCatalog";
import BackButton from "@/components/BackButton";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <Link
  href="/"
  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
>
  <ArrowLeft size={16} />
  Back to Home
</Link>

      <div className="mb-14">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
          Shop
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Discover Premium Products
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Explore thoughtfully curated products designed to elevate your
          everyday lifestyle with premium quality and modern design.
        </p>
      </div>

      <ShopCatalog products={products} />
    </main>
  );
}