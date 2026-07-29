"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CartItemProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

function CartItem({
  id,
  name,
  image,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: CartItemProps) {
  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 120, scale: 0.85 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5">
        <Image
  src={image}
  alt={name}
  fill
  sizes="96px"
  className="rounded-xl object-cover opacity-0 transition-opacity duration-500 [&.loaded]:opacity-100"
  onLoad={(e) => e.currentTarget.classList.add("loaded")}
/>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-semibold text-slate-900 dark:text-white">{name}</h3>
        <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">${price}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
            <button
              onClick={() => decreaseQuantity(id)}
              className="cursor-pointer px-3 py-1.5 text-lg text-slate-700 transition-colors active:scale-90 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-white/10"
            >
              −
            </button>
            <span className="min-w-8 text-center font-semibold text-slate-900 dark:text-white">{quantity}</span>
            <button
              onClick={() => increaseQuantity(id)}
              className="cursor-pointer px-3 py-1.5 text-lg text-slate-700 transition-colors active:scale-90 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-white/10"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(id)}
            className="cursor-pointer text-sm font-medium text-red-500 transition hover:text-red-600 hover:underline dark:text-red-400 dark:hover:text-red-300"
          >
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(CartItem);