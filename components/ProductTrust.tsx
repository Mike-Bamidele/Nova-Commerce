import { Truck, RotateCcw, ShieldCheck, Lock, Headset } from "lucide-react";

export default function ProductTrust() {
  const items = [
    { icon: Truck, title: "Free Shipping", text: "Free shipping on eligible orders." },
    { icon: RotateCcw, title: "Easy Returns", text: "30-day hassle-free returns." },
    { icon: ShieldCheck, title: "Warranty Included", text: "Manufacturer warranty on all products." },
    { icon: Lock, title: "Secure Checkout", text: "SSL encrypted payment protection." },
    { icon: Headset, title: "24/7 Support", text: "Friendly customer support whenever you need us." },
  ];

  return (
    <aside className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Why Shop With Us</h3>

      <div className="mt-8 space-y-7">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
              <Icon size={22} />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}