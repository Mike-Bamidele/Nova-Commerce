"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  label?: string;
  fallbackHref?: string;
};

export default function BackButton({ label = "Back to Home", fallbackHref = "/" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="
        mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full
        border border-slate-200 bg-white px-5 py-3 text-sm font-medium
        text-slate-700 transition-all duration-300
        hover:-translate-x-1 hover:border-slate-900 hover:text-slate-900
        dark:border-white/10 dark:bg-white/[0.03]
        dark:text-slate-300 dark:hover:border-white dark:hover:text-white
      "
    >
      <ArrowLeft size={16} />
      {label}
    </button>
  );
}