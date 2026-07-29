"use client";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CartItemCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CartItemCard({ id, name, image, price, quantity }: CartItemCardProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:flex-row md:items-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5">
        <Image src={image} alt={name} fill sizes="128px" className="object-contain p-3" />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{name}</h2>
        <p className="mt-3 text-slate-500 dark:text-slate-400">Quantity: {quantity}</p>
      </div>

      <div className="flex flex-col items-end gap-5">
        <p className="text-3xl font-bold text-slate-900 dark:text-white">${(price * quantity).toFixed(2)}</p>

        <div className="flex items-center rounded-full border border-slate-200 dark:border-white/10">
          <button
            onClick={() => decreaseQuantity(id)}
            className="cursor-pointer p-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <Minus size={16} />
          </button>

          <span className="w-12 text-center font-semibold text-slate-900 dark:text-white">{quantity}</span>

          <button
            onClick={() => increaseQuantity(id)}
            className="cursor-pointer p-3 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(id)}
          className="flex cursor-pointer items-center gap-2 text-sm text-red-500 transition hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
}