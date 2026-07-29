import Link from "next/link";
import { XCircle } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";

export default function CheckoutCancelPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <AmbientBackground />

      <Container className="relative flex min-h-screen items-center justify-center py-16">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-500/10">
            <XCircle size={40} className="text-rose-600 dark:text-rose-400" />
          </div>

          <h1 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white">
            Checkout Cancelled
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Your order wasn&apos;t completed and your cart is still saved.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
          >
            Back to Shop
          </Link>
        </div>
      </Container>
    </section>
  );
}