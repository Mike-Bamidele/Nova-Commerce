"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { useState } from "react";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, subtotal, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const FREE_SHIPPING_THRESHOLD = 300;
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  const [checkingOut, setCheckingOut] = useState(false);

const handleCheckout = async () => {
  setCheckingOut(true);
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error ?? "Something went wrong starting checkout.");
      setCheckingOut(false);
    }
  } catch {
    alert("Something went wrong starting checkout.");
    setCheckingOut(false);
  }
};

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-black/40"
          />

          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950"
            style={{ paddingTop: "var(--safe-top)", paddingBottom: "var(--safe-bottom)", paddingRight: "var(--safe-right)" }}
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Shopping Cart</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Review your selected items</p>
              </div>

              <button
                onClick={onClose}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex min-h-full flex-col items-center justify-center px-1 py-1 text-center">
                  <div className="relative mt-1 mb-1 flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-white/5">
                    <div className="absolute -top-2 left-6 h-4 w-4 rounded-full bg-indigo-200 dark:bg-indigo-500/30" />
                    <div className="absolute right-5 top-6 h-3 w-3 rounded-full bg-violet-300 dark:bg-violet-500/30" />
                    <div className="absolute bottom-4 left-3 h-2 w-2 rounded-full bg-indigo-400 dark:bg-indigo-400/30" />
                    <span className="text-4xl">🛍️</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Your cart feels lonely
                  </h3>

                  <p className="mt-4 max-w-sm leading-7 text-slate-500 dark:text-slate-400">
                    Discover thoughtfully selected products designed to elevate your everyday lifestyle.
                  </p>

                  <button
                    onClick={onClose}
                    className="mt-8 cursor-pointer rounded-full bg-slate-900 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-400"
                  >
                    Explore Collection →
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <AnimatePresence mode="popLayout">
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="sticky bottom-0 border-t border-slate-200 bg-white p-6 shadow-[0_-10px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Free Express Shipping</span>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{Math.round(progress)}%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {remaining > 0 ? (
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                      You&apos;re only <span className="font-semibold text-slate-900 dark:text-white">${remaining.toFixed(2)}</span>{" "}
                      away from <span className="font-semibold text-indigo-600 dark:text-indigo-400">FREE Express Shipping</span>
                    </p>
                  ) : (
                    <p className="mt-3 font-semibold text-emerald-600 dark:text-emerald-400">
                      ✓ Congratulations! You&apos;ve unlocked FREE Express Shipping.
                    </p>
                  )}
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">${subtotal.toFixed(2)}</span>
                </div>

                <button
  onClick={handleCheckout}
  disabled={checkingOut}
  className="group relative w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-900 py-4 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 dark:bg-white dark:text-slate-900"
>
  <span className="relative flex items-center justify-center gap-2">
    {checkingOut ? "Redirecting..." : "Secure Checkout"}
    {!checkingOut && <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>}
  </span>
</button>

                <button
                  onClick={onClose}
                  className="mt-3 w-full cursor-pointer rounded-2xl border border-slate-200 py-3.5 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}