"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";

import { Product } from "@/data/products";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

type Props = {
  product: Product;
};

export default function WishlistItemCard({ product }: Props) {
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
    removeFromWishlist(product.id);
    showToast(`${product.name} added to cart`);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-white/5">
          <Image
  src={product.image}
  alt={product.name}
  fill
  sizes="220px"
  className="object-cover opacity-0 transition-[opacity,transform] duration-700 [&.loaded]:opacity-100 group-hover:scale-105"
  onLoad={(e) => e.currentTarget.classList.add("loaded")}
/>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="min-h-[90px]">
          <p className="text-sm text-slate-500 dark:text-slate-400">{product.category}</p>

          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900 dark:text-white">
            {product.name}
          </h3>
        </div>

        <p className="text-2xl font-bold text-slate-900 dark:text-white">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-auto flex gap-3">
          <button
            onClick={handleAddToCart}
            className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button
            onClick={() => removeFromWishlist(product.id)}
            className="cursor-pointer rounded-xl border border-slate-200 p-3 text-slate-700 transition hover:bg-red-50 hover:text-red-600 dark:border-white/10 dark:text-slate-300 dark:hover:bg-red-500/10 dark:hover:text-red-400"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}