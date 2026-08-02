import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductAddToCart from "@/components/ProductAddToCart";
import ProductGallery from "@/components/ProductGallery";
import ProductInformation from "@/components/ProductInformation";
import RelatedProducts from "@/components/RelatedProducts";
import BackButton from "@/components/BackButton";
import ShippingEstimate from "@/components/ShippingEstimate";
import LocalPrice from "@/components/LocalPrice";
import StockBadge from "@/components/StockBadge";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackProductView from "@/components/TrackProductView";
import RecentlyViewedSection from "@/components/RecentlyViewedSection";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description?.slice(0, 155) ?? `Shop ${product.name} at NovaCommerce.`,
    openGraph: {
      title: product.name,
      description: product.description?.slice(0, 155),
      images: product.image.startsWith("http") ? [product.image] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.description,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: product.price,
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              reviewCount: product.reviews,
            },
          }),
        }}
      />

      <div className="mb-10">
  <BackButton label="Back to Products" fallbackHref="/shop" />
</div>

<Breadcrumbs
  items={[
    { label: "Shop", href: "/shop" },
    { label: product.category, href: `/shop?category=${product.category}` },
    { label: product.name },
  ]}
/>

      <div className="grid items-start gap-14 lg:grid-cols-2">
        <ProductGallery name={product.name} images={product.images ?? [product.image]} />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
              {product.category}
            </span>

            {product.brand && (
              <span className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {product.brand}
              </span>
            )}

            {product.badge && (
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                {product.badge}
              </span>
            )}
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {product.name}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-yellow-500">*****</span>
            <span className="font-medium text-slate-900 dark:text-white">{product.rating}</span>
            <span className="text-slate-500 dark:text-slate-400">({product.reviews} reviews)</span>
          </div>

          <LocalPrice usdPrice={product.price} />
<div className="mt-3">
  <StockBadge stock={product.stock} />
</div>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Available Colors
              </p>

              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          <p className="mt-8 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
            Premium quality product designed with modern craftsmanship,
            exceptional durability and everyday comfort.
          </p>

          <ProductAddToCart id={product.id} name={product.name} image={product.image} price={product.price} />
          <ShippingEstimate />
        </div>
      </div>

      <ProductInformation
        description={product.description}
        features={product.features}
        specifications={product.specifications}
      />

      <RelatedProducts currentProductId={product.id} category={product.category} />
<RecentlyViewedSection excludeId={product.id} />
      <TrackProductView productId={product.id} />
    </main>
  );
}