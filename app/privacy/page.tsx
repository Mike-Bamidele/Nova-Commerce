import Link from "next/link";
import { Briefcase } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";
import BackButton from "@/components/BackButton";

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-6">
  <BackButton />

  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
    Careers
  </span>
</div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-12 max-w-3xl space-y-10">
          {[
            {
              title: "Information We Collect",
              text: "We collect information you provide directly to us, such as your name, email address, shipping address, and payment details when you create an account or place an order. We also collect basic usage data to help us improve the site.",
            },
            {
              title: "How We Use Your Information",
              text: "We use your information to process orders, communicate with you about your purchases, provide customer support, and, with your consent, send marketing communications you can unsubscribe from at any time.",
            },
            {
              title: "Payment Information",
              text: "Payments are processed securely through Stripe. We do not store your full card details on our servers — Stripe handles this in compliance with PCI-DSS standards.",
            },
            {
              title: "Data Sharing",
              text: "We do not sell your personal information. We share data only with service providers who help us operate the store — such as payment processors and shipping carriers — solely for that purpose.",
            },
            {
              title: "Your Rights",
              text: "You can request access to, correction of, or deletion of your personal data at any time by contacting our support team.",
            },
            {
              title: "Contact Us",
              text: "If you have questions about this policy, reach out via our contact page.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">{section.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}