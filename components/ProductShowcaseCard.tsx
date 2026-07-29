"use client";

import Image from "next/image";
import Link from "next/link";
import WishlistButton from "./WishlistButton";

type ProductShowcaseCardProps = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  featured?: boolean;
};

export default function ProductShowcaseCard({
  id,
  title,
  subtitle,
  price,
  image,
  featured = false,
}: ProductShowcaseCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="
        group
        block
        overflow-hidden
        rounded-[30px]
        bg-white
        border
        border-slate-200/80
        shadow-sm
        transition-all
        duration-300
        hover:shadow-xl
      "
    >
      {/* IMAGE */}

      <div
        className={`
          relative
          overflow-hidden
          bg-gradient-to-br
          from-slate-50
          to-white
          ${featured ? "h-[380px]" : "h-[220px]"}
        `}
      >
        <div className="absolute right-5 top-5 z-20">
          <WishlistButton productId={id} />
        </div>

        <Image
          src={image}
          alt={title}
          fill
          priority={featured}
          sizes="220px"
          className="
            object-contain
            p-8
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}

      <div className="space-y-3 p-7">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
          {subtitle}
        </p>

        <h3
          className={`
            font-bold
            text-slate-900
            line-clamp-2
            ${featured ? "text-3xl" : "text-lg"}
          `}
        >
          {title}
        </h3>

        <div className="flex items-center justify-between pt-3">

          <span
            className={`
              font-black
              tracking-tight
              ${featured ? "text-4xl" : "text-2xl"}
            `}
          >
            {price}
          </span>

          <span
            className="
              rounded-full
              bg-slate-900
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              transition
              group-hover:bg-indigo-600
            "
          >
            View →
          </span>

        </div>

      </div>

    </Link>
  );
}