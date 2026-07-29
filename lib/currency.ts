// Static approximate exchange rates (USD base).
// These drift over time — for a production store handling real
// international sales, swap this for a live rates API
// (e.g. exchangerate-api.com) fetched periodically, not hardcoded.
const RATES: Record<string, { rate: number; symbol: string; code: string }> = {
  US: { rate: 1, symbol: "$", code: "USD" },
  NG: { rate: 1550, symbol: "\u20a6", code: "NGN" },
  GB: { rate: 0.78, symbol: "\u00a3", code: "GBP" },
  CA: { rate: 1.36, symbol: "CA$", code: "CAD" },
  AU: { rate: 1.52, symbol: "AU$", code: "AUD" },
  EU: { rate: 0.92, symbol: "\u20ac", code: "EUR" },
};

export function getCurrencyForCountry(countryCode: string) {
  return RATES[countryCode] ?? RATES.US;
}

export function formatLocalPrice(usdPrice: number, countryCode: string): string {
  const { rate, symbol } = getCurrencyForCountry(countryCode);
  const converted = usdPrice * rate;

  const formatted =
    converted >= 1000
      ? Math.round(converted).toLocaleString()
      : converted.toFixed(2);

  return `${symbol}${formatted}`;
}