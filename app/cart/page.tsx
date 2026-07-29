"use client";
import CartItemCard from "@/components/CartItemCard";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-12 lg:px-4">

        <h1 className="text-5xl font-bold text-slate-900">
          Shopping Cart
        </h1>

        <p className="mt-3 text-slate-600">
          Review your selected items before checkout.
        </p>

      </div>

      {cart.length === 0 ? (

        <div className="rounded-3xl border border-slate-200 p-16 text-center">

          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>

          <p className="mt-4 text-slate-500">
            Browse our collection and add something you'll love.
          </p>

          <Link
            href="/"
            className="
              mt-8
              inline-flex
              rounded-full
              bg-slate-900
              px-8
              py-4
              font-medium
              text-white
              transition
              hover:bg-indigo-600
            "
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        <div>

          {cart.map((item) => (

  <CartItemCard
    key={item.id}
    id={item.id}
    name={item.name}
    image={item.image}
    price={item.price}
    quantity={item.quantity}
  />

))}

        </div>

      )}

    </main>
  );
}