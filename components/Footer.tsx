import Link from "next/link";
import { ShieldCheck, Truck, Check } from "lucide-react";
import { SiInstagram, SiFacebook, SiX } from "@icons-pack/react-simple-icons";

const shopLinks = [
  { label: "Fashion", href: "/shop?category=Fashion" },
  { label: "Tech", href: "/shop?category=Tech" },
  { label: "Productivity", href: "/shop?category=Productivity" },
  { label: "Wellness", href: "/shop?category=Wellness" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const supportLinks = [
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
                N
              </span>
              <span className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Nova<span className="font-light text-indigo-600 dark:text-indigo-400">Commerce</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
              Thoughtfully curated products for modern living — quality, design, and everyday
              excellence, delivered.
            </p>

            <div className="mt-6 flex gap-3">
  {[SiInstagram, SiX, SiFacebook].map((Icon, i) => (
    <a
      key={i}
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:border-white dark:hover:text-white"
    >
      <Icon size={17} />
    </a>
  ))}
</div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              Shop
            </h4>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              Support
            </h4>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 border-y border-slate-100 py-6 dark:border-white/10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" /> Secure Checkout
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Truck size={16} className="text-emerald-600 dark:text-emerald-400" /> Free Worldwide Shipping
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Check size={16} className="text-emerald-600 dark:text-emerald-400" /> 30-Day Returns
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} NovaCommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}