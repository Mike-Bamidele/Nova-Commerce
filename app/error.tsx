"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AmbientBackground />

      <Container className="relative flex min-h-screen flex-col items-center justify-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-500/10">
          <AlertTriangle size={36} className="text-rose-600 dark:text-rose-400" />
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Something went wrong
        </h1>

        <p className="mt-4 max-w-md text-lg leading-8 text-slate-600 dark:text-slate-400">
          An unexpected error occurred. You can try again, or head back to the
          homepage.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="cursor-pointer rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}