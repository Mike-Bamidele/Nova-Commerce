import { products } from "@/data/products";
import FeaturedProductCard from "./FeaturedProductCard";

type RelatedProductsProps = {
  currentProductId: number;
  category: string;
};

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = products
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-28">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">You May Also Like</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Discover more products selected just for you.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {relatedProducts.map((product) => (
          <FeaturedProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
            comparePrice={product.comparePrice}
            rating={product.rating}
            reviews={product.reviews}
            badge={product.badge}
            eager={false}
          />
        ))}
      </div>
    </section>
  );
}