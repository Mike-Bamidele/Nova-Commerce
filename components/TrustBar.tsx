import { Star, Truck, Lock, Undo2 } from "lucide-react";

const items = [
  {
    icon: Star,
    title: "4.9 Customer Rating",
    text: "Trusted by 40,000+ shoppers",
    accent: "from-amber-400/20 to-yellow-300/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Truck,
    title: "Free Worldwide Shipping",
    text: "Fast delivery across 120+ countries",
    accent: "from-sky-400/20 to-cyan-300/10",
    iconColor: "text-sky-600",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    text: "256-bit encrypted payment protection",
    accent: "from-indigo-400/20 to-violet-300/10",
    iconColor: "text-indigo-600",
  },
  {
    icon: Undo2,
    title: "30-Day Returns",
    text: "Simple, hassle-free exchanges",
    accent: "from-emerald-400/20 to-green-300/10",
    iconColor: "text-emerald-600",
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-20" style={{ contentVisibility: "auto", containIntrinsicSize: "0 600px" }}>
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          WHY SHOP WITH NOVA
        </p>
        <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">
          Built Around Trust.
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:opacity-0 dark:group-hover:opacity-60 ${item.accent}`}
              />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent dark:from-white/[0.06]" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition-transform duration-500 group-hover:scale-110 dark:bg-white/5">
                  <Icon size={24} strokeWidth={1.75} className={item.iconColor} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}