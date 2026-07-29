"use client";

import { ShoppingBag, Heart, ChevronDown, LogOut, User, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const shopCategories = ["Fashion", "Tech", "Productivity", "Wellness"];

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const pathname = usePathname();
  const goHome = () => {
  if (pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    router.push("/");
  }
};
  const router = useRouter();
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();

  const [cartOpen, setCartOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = session?.user?.name
    ?.split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const navLink = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className="group relative py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
      >
        {label}
        <span
          className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-slate-900 transition-colours duration-300 dark:bg-white ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-slate-900/[0.06] bg-white/95 dark:border-white/[0.08] dark:bg-slate-950/95"
        style={{ paddingTop: "var(--safe-top)" }}
      >
        <nav className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <button
  onClick={goHome}
  className="flex cursor-pointer items-center gap-2.5"
>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
              N
            </span>
            <span className="text-[22px] font-semibold tracking-tight text-slate-950 dark:text-white">
              Nova<span className="font-light text-indigo-600 dark:text-indigo-400">Commerce</span>
            </span>
          </button>

          {/* Navigation */}
          <ul className="hidden items-center gap-12 md:flex">
            <li>
  <button
  onClick={goHome}
    className="group relative cursor-pointer py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
  >
    Home

    <span
      className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-slate-900 transition-colours duration-300 dark:bg-white ${
        pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </button>
</li>

            <li
              className="relative"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <Link
                href="/shop"
                className="group relative flex items-center gap-1 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              >
                Shop
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${shopMenuOpen ? "rotate-180" : ""}`} />
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-slate-900 transition-colours duration-300 dark:bg-white ${
                    pathname === "/shop" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              {shopMenuOpen && (
                <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-[20px] border border-slate-900/[0.06] bg-white/95 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-slate-900/95 dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                    {shopCategories.map((category) => (
                      <Link
                        key={category}
                        href={`/shop?category=${category}`}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                      >
                        {category}
                        <span className="text-slate-300 dark:text-slate-600">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>{navLink("/wishlist", "Wishlist")}</li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2.5">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={19} strokeWidth={1.75} className="text-slate-200" />
                ) : (
                  <Moon size={19} strokeWidth={1.75} className="text-slate-700" />
                )}
              </button>
            )}

            <Link
              href="/wishlist"
              className="relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Heart size={19} strokeWidth={1.75} className="text-slate-700 dark:text-slate-200" />
              {wishlistCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <ShoppingBag size={19} strokeWidth={1.75} className="text-slate-700 dark:text-slate-200" />
              {cartCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="mx-1 h-6 w-px bg-slate-200 dark:bg-white/10" />

            {status === "loading" ? (
              <div className="h-11 w-11 animate-pulse rounded-full bg-slate-100 dark:bg-white/10" />
            ) : session ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="flex cursor-pointer items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  {session.user?.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={session.user.image}
                      alt={session.user.name ?? "User"}
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                    />
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
                      {initials || <User size={14} />}
                    </span>
                  )}
                  <span className="max-w-[100px] truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                    {session.user?.name?.split(" ")[0] ?? "Account"}
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full w-56 pt-4">
                    <div className="overflow-hidden rounded-[20px] border border-slate-900/[0.06] bg-white/95 p-1.5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-slate-900/95 dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                      <div className="px-3.5 py-3">
                        <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">{session.user?.name}</p>
                        <p className="truncate text-xs text-slate-500 dark:text-slate-400">{session.user?.email}</p>
                      </div>
                      <div className="my-1 h-px bg-slate-100 dark:bg-white/10" />
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="flex w-full cursor-pointer items-center gap-2 rounded-2xl px-3.5 py-3 text-sm font-medium text-rose-600 transition hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}