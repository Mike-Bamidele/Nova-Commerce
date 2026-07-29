import ProductTrust from "./ProductTrust";

type ProductInformationProps = {
  description?: string;
  features?: string[];
  specifications?: {
    material?: string;
    weight?: string;
    dimensions?: string;
    connectivity?: string;
    battery?: string;
    warranty?: string;
  };
};

export default function ProductInformation({
  description,
  features,
  specifications,
}: ProductInformationProps) {
  return (
    <section className="mt-24 border-t border-slate-200 pt-20 dark:border-white/10">
      <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
        {/* Left Column */}
        <div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Description</h2>
            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
              {description ?? "Premium craftsmanship designed for modern lifestyles."}
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Features</h2>

            <ul className="mt-6 space-y-4">
              {(features ?? []).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="mt-1 text-indigo-600 dark:text-indigo-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <ProductTrust />
      </div>

      {/* Specifications */}
      {specifications && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Specifications</h2>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <table className="w-full">
              <tbody>
                {Object.entries(specifications).map(
                  ([key, value]) =>
                    value && (
                      <tr key={key} className="border-b border-slate-200 last:border-0 dark:border-white/10">
                        <td className="bg-slate-50 px-6 py-5 font-semibold capitalize text-slate-900 dark:bg-white/[0.03] dark:text-white">
                          {key}
                        </td>
                        <td className="px-6 py-5 text-slate-600 dark:text-slate-400">{value}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}