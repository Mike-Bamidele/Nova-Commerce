"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-24 text-center dark:border-white/15 dark:bg-white/[0.02]">
      <div className="mb-6 rounded-full bg-white p-5 shadow-sm dark:bg-white/5">
        <Heart size={42} className="text-rose-500 dark:text-rose-400" />
      </div>

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        Your wishlist is empty
      </h2>

      <p className="mt-4 max-w-md text-lg leading-8 text-slate-500 dark:text-slate-400">
        Save products you love and they&apos;ll appear here for easy access whenever you&apos;re ready to buy.
      </p>

      <Link
        href="/shop"
        className="mt-10 rounded-2xl bg-slate-900 px-8 py-4 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
}