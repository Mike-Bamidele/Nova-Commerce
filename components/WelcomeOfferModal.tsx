"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Mail } from "lucide-react";

export default function WelcomeOfferModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("nova-welcome-seen");
    if (seen) return;

    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    localStorage.setItem("nova-welcome-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to your email provider
    setSubmitted(true);
    setTimeout(close, 1800);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[200] bg-black/50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-[201] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-slate-200 bg-white p-8 shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>

            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Welcome
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
              Enjoy 15% Off Your First Order
            </h2>

            <p className="mt-3 text-slate-600">
              Sign up now and we&apos;ll send your discount code straight to your inbox.
            </p>

            {submitted ? (
              <p className="mt-6 rounded-2xl bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700">
                🎉 Check your inbox — your code is on its way.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer rounded-2xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Claim My Discount
                </button>
              </form>
            )}

            <button
              onClick={close}
              className="mt-4 w-full cursor-pointer text-center text-xs font-medium text-slate-400 hover:text-slate-600"
            >
              No thanks, I&apos;ll pay full price
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}