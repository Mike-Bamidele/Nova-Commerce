"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AmbientBackground />

      <Container className="relative flex min-h-screen items-center justify-center py-16">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10">
            <CheckCircle2 size={40} className="text-emerald-600 dark:text-emerald-400" />
          </div>

          <h1 className="mt-8 text-3xl font-bold text-slate-900 dark:text-white">
            Order Confirmed
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Thank you for your purchase. A confirmation email is on its way, and
            your order will be processed shortly.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    </section>
  );
}