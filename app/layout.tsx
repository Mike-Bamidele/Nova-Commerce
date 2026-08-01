import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleContext";
import Footer from "@/components/Footer";
import WelcomeOfferModal from "@/components/WelcomeOfferModal";
import { ToastProvider } from "@/context/ToastContext";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),

  title: {
    default: "NovaCommerce — Premium Fashion, Tech, Productivity & Wellness",
    template: "%s | NovaCommerce",
  },

  description:
    "Discover premium, thoughtfully curated products for modern living across fashion, technology, productivity and wellness.",

  openGraph: {
    title: "NovaCommerce — Premium Products for Modern Living",

    description:
      "Discover premium, thoughtfully curated products across fashion, technology, productivity and wellness.",

    url: "/",

    siteName: "NovaCommerce",

    images: [
      {
        url: "/nova-og.png",
        width: 1200,
        height: 630,
        alt: "NovaCommerce",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NovaCommerce",

    description:
      "Premium Fashion • Technology • Productivity • Wellness",

    images: ["/nova-og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-slate-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
  >
    Skip to content
  </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NovaCommerce",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/icon.png`,
            }),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToastProvider>
            <AuthProvider>
              <LocaleProvider>
                <WishlistProvider>
                  <CartProvider>
                    <RecentlyViewedProvider>
                      <div id="main-content" className="flex-1">
                        {children}
                      </div>
                      <Footer />
                      <WelcomeOfferModal />
                    </RecentlyViewedProvider>
                  </CartProvider>
                </WishlistProvider>
              </LocaleProvider>
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}