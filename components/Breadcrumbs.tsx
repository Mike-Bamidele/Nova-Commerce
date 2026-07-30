import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm">
      <Link href="/" className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
        Home
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight size={14} className="text-slate-300 dark:text-slate-600" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-900 dark:text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}