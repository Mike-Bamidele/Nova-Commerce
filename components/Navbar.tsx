"use client";

import { ShoppingBag, Heart, ChevronDown, LogOut, User, Sun, Moon, Menu, X, Package } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const shopCategories = ["Fashion", "Tech", "Productivity", "Wellness"];

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { theme, setTheme } = useTheme();

  const [cartOpen, setCartOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
          className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-slate-900 transition-all duration-300 dark:bg-white ${
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
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[88px] lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900 lg:h-9 lg:w-9 lg:text-sm">
              N
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white lg:text-[22px]">
              Nova<span className="font-light text-indigo-600 dark:text-indigo-400">Commerce</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-12 md:flex">
            <li>{navLink("/", "Home")}</li>

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
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-slate-900 transition-all duration-300 dark:bg-white ${
                    pathname === "/shop" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              {shopMenuOpen && (
                <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4">
                  <div className="overflow-hidden rounded-[20px] border border-slate-900/[0.06] bg-white/95 p-2 shadow-[0_24px_60px_rgba(15,23,42,0.16)] dark:border-white/[0.08] dark:bg-slate-900/95 dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
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
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme toggle: desktop only, lives in mobile menu instead */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 md:flex"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={19} strokeWidth={1.75} className="text-slate-200" />
                ) : (
                  <Moon size={19} strokeWidth={1.75} className="text-slate-700" />
                )}
              </button>
            )}

            {/* Wishlist: desktop only, lives in mobile menu instead */}
            <Link
              href="/wishlist"
              className="relative hidden h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 md:flex"
            >
              <Heart size={19} strokeWidth={1.75} className="text-slate-700 dark:text-slate-200" />
              {wishlistCount > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart: always visible, every screen size */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 lg:h-11 lg:w-11"
            >
              <ShoppingBag size={18} strokeWidth={1.75} className="text-slate-700 dark:text-slate-200 lg:h-[19px] lg:w-[19px]" />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-indigo-600 text-[9px] font-bold text-white lg:right-1.5 lg:top-1.5 lg:h-[18px] lg:w-[18px] lg:text-[10px]">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="mx-1 hidden h-6 w-px bg-slate-200 dark:bg-white/10 md:block" />

            {/* Account: desktop only, lives in mobile menu instead */}
            <div className="hidden md:block">
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
                      <div className="overflow-hidden rounded-[20px] border border-slate-900/[0.06] bg-white/95 p-1.5 shadow-[0_24px_60px_rgba(15,23,42,0.16)] dark:border-white/[0.08] dark:bg-slate-900/95 dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                        <div className="px-3.5 py-3">
                          <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">{session.user?.name}</p>
                          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{session.user?.email}</p>
                        </div>
                        <div className="my-1 h-px bg-slate-100 dark:bg-white/10" />
                        <Link
                          href="/account/orders"
                          className="flex w-full items-center gap-2 rounded-2xl px-3.5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                        >
                          <Package size={16} />
                          My Orders
                        </Link>
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

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:bg-slate-100 dark:hover:bg-white/10 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} className="text-slate-700 dark:text-slate-200" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] bg-black/40 md:hidden"
            />

            <motion.aside
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-xs flex-col border-l border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden"
              style={{ paddingTop: "var(--safe-top)", paddingBottom: "var(--safe-bottom)" }}
            >
              <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-white/10">
                <span className="text-lg font-semibold text-slate-950 dark:text-white">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    Shop
                  </Link>

                  <div className="ml-3 flex flex-col gap-1 border-l border-slate-200 pl-3 dark:border-white/10">
                    {shopCategories.map((category) => (
                      <Link
                        key={category}
                        href={`/shop?category=${category}`}
                        className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/wishlist"
                    className="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    Wishlist
                    {wishlistCount > 0 && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  {session && (
                    <Link
                      href="/account/orders"
                      className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                    >
                      My Orders
                    </Link>
                  )}
                </nav>

                <div className="mt-6 border-t border-slate-200 pt-6 dark:border-white/10">
                  {mounted && (
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                    >
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                  )}
                </div>
              </div>

              <div className="border-t border-slate-200 p-5 dark:border-white/10">
                {session ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {session.user?.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={session.user.image} alt="" className="h-9 w-9 rounded-full object-cover" />
                      ) : (
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
                          {initials || <User size={14} />}
                        </span>
                      )}
                      <span className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                        {session.user?.name?.split(" ")[0]}
                      </span>
                    </div>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="flex cursor-pointer items-center gap-1.5 text-sm font-medium text-rose-600 dark:text-rose-400"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className="flex w-full items-center justify-center rounded-full bg-slate-900 py-3.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}