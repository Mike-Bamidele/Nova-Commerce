"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type RecentlyViewedContextType = {
  recentlyViewed: number[];
  addToRecentlyViewed: (id: number) => void;
};

const RecentlyViewedContext = createContext<RecentlyViewedContextType | null>(null);

const MAX_ITEMS = 8;

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nova-recently-viewed");
    if (saved) setRecentlyViewed(JSON.parse(saved));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("nova-recently-viewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed, hydrated]);

  const addToRecentlyViewed = (id: number) => {
    setRecentlyViewed((prev) => {
      const withoutCurrent = prev.filter((p) => p !== id);
      return [id, ...withoutCurrent].slice(0, MAX_ITEMS);
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);
  if (!context) throw new Error("useRecentlyViewed must be used inside RecentlyViewedProvider");
  return context;
}