"use client";

import { useLocale } from "@/context/LocaleContext";

type LocalPriceProps = {
  usdPrice: number;
};

export default function LocalPrice({ usdPrice }: LocalPriceProps) {
  const { formatPrice, currencyCode } = useLocale();

  return (
    <div className="mt-10 flex items-baseline gap-3">
      <span className="text-5xl font-bold text-slate-900 dark:text-white">
        {formatPrice(usdPrice)}
      </span>
      {currencyCode !== "USD" && (
        <span className="text-sm text-slate-400 dark:text-slate-500">
          (${usdPrice} USD · charged in USD at checkout)
        </span>
      )}
    </div>
  );
}