"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Badge from "./Badge";
import Section from "./Section";

const testimonials = [
  {
    name: "Amara Okafor",
    role: "Verified Buyer · Lagos",
    quote:
      "Ordered the Executive Office Chair for my home office and honestly didn't expect it to feel this solid. Assembly took maybe 15 minutes, and the lumbar support has genuinely helped my back during long work days.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Verified Buyer · Seattle",
    quote:
      "The NOVOO USB-C Hub has been sitting on my desk for two months now and hasn't dropped connection once. Small thing, but the packaging felt premium too — didn't expect that at this price point.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Verified Buyer · Toronto",
    quote:
      "Bought the Classic Monogram Tote as a gift and ended up ordering one for myself a week later. The leather quality is noticeably better than similarly priced bags I've bought elsewhere.",
    rating: 5,
  },
  {
    name: "Marcus Bello",
    role: "Verified Buyer · London",
    quote:
      "Shipping was faster than I expected for an international order — arrived in 4 days. The Adjustable Laptop Stand does exactly what it says, and the cooling fans are quieter than I thought they'd be.",
    rating: 4,
  },
  {
    name: "Elena Rossi",
    role: "Verified Buyer · Milan",
    quote:
      "Customer support helped me size-swap my order within minutes over chat, no back and forth. That alone made me trust the store enough to order again.",
    rating: 5,
  },
  {
    name: "Tunde Adeyemi",
    role: "Verified Buyer · Abuja",
    quote:
      "I was skeptical about buying a fountain pen online without holding it first, but the Parker IM writes exactly as smooth as described. Feels like a proper gift-worthy item.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center">
        <Badge>Testimonials</Badge>

        <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Loved by Thousands
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Real feedback from customers who chose quality without compromise.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <Quote className="h-8 w-8 text-indigo-200 dark:text-indigo-400/30" />

            <div className="mt-4 flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6 dark:border-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}