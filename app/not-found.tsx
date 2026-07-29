import Link from "next/link";
import { SearchX } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <AmbientBackground />

      <Container className="relative flex min-h-screen flex-col items-center justify-center py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5">
          <SearchX size={36} className="text-slate-400 dark:text-slate-500" />
        </div>

        <h1 className="mt-8 text-6xl font-bold tracking-tight text-slate-900 dark:text-white">404</h1>

        <p className="mt-4 max-w-md text-lg leading-8 text-slate-600 dark:text-slate-400">
          We couldn&apos;t find the page you&apos;re looking for. It may have been
          moved, or the link might be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/30"
          >
            Browse Shop
          </Link>
        </div>
      </Container>
    </section>
  );
}