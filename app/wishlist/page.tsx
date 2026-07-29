"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WishlistPage from "@/components/WishlistPage";

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <WishlistPage />
    </main>
  );
}