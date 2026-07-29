"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { formatLocalPrice, getCurrencyForCountry } from "@/lib/currency";

type LocaleContextType = {
  country: string;
  formatPrice: (usdPrice: number) => string;
  currencyCode: string;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState("US");

  useEffect(() => {
    const detected = getCookie("nova-country");
    if (detected) setCountry(detected);
  }, []);

  const { code } = getCurrencyForCountry(country);

  return (
    <LocaleContext.Provider
      value={{
        country,
        currencyCode: code,
        formatPrice: (usdPrice: number) => formatLocalPrice(usdPrice, country),
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}