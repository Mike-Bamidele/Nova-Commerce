"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your email provider or a /api/contact route
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-6">
  <Link
    href="/"
    className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
  >
    <ArrowLeft size={16} />
    Back to Home
  </Link>

  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
    Careers
  </span>
</div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Get in Touch
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Questions about an order, a product, or anything else? We usually
          respond within one business day.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "support@novacommerce.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 012-3456" },
              { icon: MapPin, label: "Office", value: "Lagos, Nigeria" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-[28px] border border-slate-200/70 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            {submitted ? (
              <p className="rounded-2xl bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                Thanks for reaching out — we&apos;ll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 cursor-pointer rounded-full bg-slate-900 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-slate-900"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}