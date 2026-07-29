"use client";

import { useState } from "react";
import Badge from "./Badge";
import Section from "./Section";
import FeaturedProductCard from "./FeaturedProductCard";
import { products } from "@/data/products";

const categories = ["All", "Fashion", "Tech", "Productivity", "Wellness"];

export default function FeaturedProducts() {
  const [category, setCategory] = useState("All");

  const filteredProducts = (
    category === "All" ? products : products.filter((p) => p.category === category)
  ).slice(0, 4);

  return (
    <>
      <Section>
        <div className="text-center">
          <Badge>Featured Collection</Badge>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Handpicked Products For Modern Living
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Discover a curated selection of premium products chosen
            for design, functionality and everyday excellence.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`
                  cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition
                  ${
                    active
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-slate-500 dark:text-slate-400">
              No products found in this category yet.
            </p>
          ) : (
            filteredProducts.map((product, index) => (
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
                eager={index === 0}
              />
            ))
          )}
        </div>
      </Section>
    </>
  );
}