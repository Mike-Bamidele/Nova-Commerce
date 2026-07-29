"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type WishlistContextType = {
  wishlist: number[];

  wishlistCount: number;

  toggleWishlist: (id: number) => void;

  removeFromWishlist: (id: number) => void;

  isWishlisted: (id: number) => boolean;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

type WishlistProviderProps = {
  children: ReactNode;
};

export function WishlistProvider({
  children,
}: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");

    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  // Save whenever wishlist changes
  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  function toggleWishlist(id: number) {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function removeFromWishlist(id: number) {
  setWishlist((current) =>
    current.filter((item) => item !== id)
  );
}

  function isWishlisted(id: number) {
  return wishlist.includes(id);
}

const wishlistCount = wishlist.length;

return (
  <WishlistContext.Provider
   value={{
  wishlist,
  wishlistCount,
  toggleWishlist,
  removeFromWishlist,
  isWishlisted,
}}
  >
    {children}
  </WishlistContext.Provider>
);
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}