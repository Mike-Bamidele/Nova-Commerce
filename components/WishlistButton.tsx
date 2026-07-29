"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

type WishlistButtonProps = {
  productId: number;
  className?: string;
};

export default function WishlistButton({
  productId,
  className = "",
}: WishlistButtonProps) {
  const { toggleWishlist, isWishlisted } = useWishlist();

  const liked = isWishlisted(productId);

  return (
    <button
      type="button"
      aria-label={
        liked ? "Remove from wishlist" : "Add to wishlist"
      }
      aria-pressed={liked}
      onClick={() => toggleWishlist(productId)}
      className={`
        group
        cursor-pointer
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-slate-200/70
        bg-white/80
        backdrop-blur-sm
        shadow-md
        transition-all
        duration-300
        hover:scale-110
        hover:border-rose-300
        hover:bg-white
        active:scale-95
        ${className}
      `}
    >
      <Heart
        size={20}
        strokeWidth={2}
        className={`
          transition-all
          duration-300
          ${
            liked
              ? "fill-rose-500 text-rose-500 scale-110"
              : "text-slate-500 group-hover:text-rose-500"
          }
        `}
      />
    </button>
  );
}