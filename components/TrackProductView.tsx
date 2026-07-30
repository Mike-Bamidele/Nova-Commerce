"use client";

import { useEffect } from "react";
import { useRecentlyViewed } from "@/context/RecentlyViewedContext";

export default function TrackProductView({ productId }: { productId: number }) {
  const { addToRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    addToRecentlyViewed(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return null;
}