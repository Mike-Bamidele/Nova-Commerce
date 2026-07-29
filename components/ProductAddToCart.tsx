"use client";

import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

type ProductAddToCartProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function ProductAddToCart({ id, name, image, price }: ProductAddToCartProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    addToCart({ id, name, image, price });
    showToast(`${name} added to cart`);
  };

  return (
    <button
      onClick={handleAdd}
      className="
        mt-10 cursor-pointer rounded-2xl bg-slate-900 px-10 py-4
        font-semibold text-white transition-all duration-300
        hover:bg-indigo-600 hover:shadow-xl active:scale-95
        dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-400
      "
    >
      Add to Cart
    </button>
  );
}