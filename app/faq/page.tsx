"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";
import BackButton from "@/components/BackButton";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3–7 business days depending on your location. You'll receive a tracking link by email once your order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return any unused item in its original packaging within 30 days of delivery for a full refund. Contact support to start a return.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes — we offer free worldwide shipping on every order with no minimum purchase required.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with a tracking link. You can also check order status from your account.",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "If your order hasn't shipped yet, contact support as soon as possible and we'll do our best to accommodate changes or cancellations.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Not at checkout currently, but reach out to support after placing your order and we'll see what we can arrange.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-6">
  <BackButton />

  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
    FAQ
  </span>
</div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-14 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 dark:text-slate-500 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <p className="px-6 pb-5 leading-7 text-slate-600 dark:text-slate-400">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}