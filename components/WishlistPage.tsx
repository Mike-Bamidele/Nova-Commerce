"use client";

import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import WishlistItemCard from "./WishlistItemCard";
import EmptyWishlist from "./EmptyWishlist";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <>
      <div className="mb-14">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
          Wishlist
        </span>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Your Wishlist
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Save your favorite products and purchase them whenever you're ready.
        </p>
      </div>

      <p className="mb-10 text-slate-500 dark:text-slate-400">{wishlistProducts.length} saved products</p>

      {wishlistProducts.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistProducts.map((product) => (
            <WishlistItemCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}