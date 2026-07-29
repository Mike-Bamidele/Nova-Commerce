"use client";

import { Truck } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const SHIPPING_BANDS: Record<string, string> = {
  US: "2\u20134 business days",
  CA: "3\u20135 business days",
  NG: "5\u20138 business days",
  GB: "4\u20136 business days",
  AU: "6\u20139 business days",
};

export default function ShippingEstimate() {
  const { country } = useLocale();
  const estimate = SHIPPING_BANDS[country] ?? "7\u201312 business days";

  return (
    <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
      <Truck size={16} className="text-emerald-600 dark:text-emerald-400" />
      Estimated delivery: <span className="font-semibold text-slate-900 dark:text-white">{estimate}</span>
    </div>
  );
}