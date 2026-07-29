"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  image: string;
  title: string;
  description: string;
  count: number;
  index: number;
};

export default function CategoryCard({
  image,
  title,
  description,
  count,
  index,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/shop?category=${title}`}
        className="
          group relative flex h-96 flex-col justify-end overflow-hidden rounded-3xl
          border border-slate-200/70 transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl
          dark:border-white/10 dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={index === 0}
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient scrim for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative p-7">
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/80">{description}</p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wide text-white/60">
              {count} products
            </span>

            <span className="flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-2.5">
              Explore
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}