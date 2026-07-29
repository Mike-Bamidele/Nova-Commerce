"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to your email provider (Mailchimp, Resend, custom API route, etc.)
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-900 py-20 dark:bg-black">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
          Stay in the loop
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Get 10% Off Your First Order
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/60">
          Join our list for early access to new arrivals, exclusive drops, and members-only pricing.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex items-center justify-center gap-2 text-lg font-semibold text-emerald-400"
          >
            <CheckCircle2 size={22} />
            You&apos;re in! Check your inbox for your code.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:bg-white/10"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/40">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}