import Link from "next/link";
import { ArrowLeft, Truck, RotateCcw, Clock } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";
import BackButton from "@/components/BackButton";

export default function ShippingPage() {
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
          Shipping & Returns
        </h1>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Truck, title: "Free Shipping", text: "On all orders, worldwide, no minimum." },
            { icon: Clock, title: "3–7 Business Days", text: "Standard delivery time depending on destination." },
            { icon: RotateCcw, title: "30-Day Returns", text: "Unused items in original packaging." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200/70 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Shipping</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              We offer free worldwide shipping on every order, no minimum
              purchase required. Orders are processed within 1–2 business days
              and typically arrive within 3–7 business days depending on your
              location. You&apos;ll receive a tracking link by email as soon as
              your order ships.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Returns</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              If something isn&apos;t right, you can return any unused item in its
              original packaging within 30 days of delivery for a full refund.
              To start a return, contact our support team with your order
              number and we&apos;ll send you a prepaid return label.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Exchanges</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
              Need a different size or color? Reach out to us and we&apos;ll
              arrange an exchange as soon as the original item is on its way
              back to us — no need to wait for the return to be processed
              first.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}