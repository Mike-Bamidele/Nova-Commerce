import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <div className="mb-8">
  <Link
    href="/"
    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
  >
    <ArrowLeft size={16} />
    Back to Home
  </Link>
</div>

<span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
  Terms of Service
</span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-12 max-w-3xl space-y-10">
          {[
            {
              title: "1. Acceptance of Terms",
              text: "By accessing or placing an order through NovaCommerce, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our site or services.",
            },
            {
              title: "2. Eligibility",
              text: "You must be at least 18 years old, or the age of legal majority in your jurisdiction, to create an account or place an order on NovaCommerce. By using our site, you represent that you meet this requirement.",
            },
            {
              title: "3. Account Registration",
              text: "You may browse our store without an account, but certain features — including order tracking and wishlist — require registration. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorized use of your account.",
            },
            {
              title: "4. Product Information & Pricing",
              text: "We make every effort to display product details, images, and pricing accurately. However, we do not warrant that product descriptions or other content are error-free. Prices are listed in USD and are subject to change without notice. In the event of a pricing error, we reserve the right to cancel any orders placed at the incorrect price.",
            },
            {
              title: "5. Orders & Payment",
              text: "All orders are subject to acceptance and product availability. Payment is processed securely through Stripe at the time of checkout. We reserve the right to refuse or cancel any order for reasons including suspected fraud, unauthorized transactions, or errors in pricing or product information.",
            },
            {
              title: "6. Shipping & Delivery",
              text: "Estimated delivery timeframes provided at checkout and on product pages are approximate and not guaranteed. NovaCommerce is not responsible for delays caused by shipping carriers, customs processing, or other circumstances beyond our reasonable control.",
            },
            {
              title: "7. Returns & Refunds",
              text: "Eligible items may be returned within 30 days of delivery, provided they are unused and in their original packaging, as detailed on our Shipping & Returns page. Refunds are issued to the original payment method once the returned item has been received and inspected.",
            },
            {
              title: "8. Intellectual Property",
              text: "All content on this site — including text, graphics, logos, product images, and site design — is the property of NovaCommerce or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.",
            },
            {
              title: "9. Prohibited Conduct",
              text: "You agree not to use this site for any unlawful purpose, to attempt unauthorized access to our systems, to interfere with the site's operation, or to submit false or fraudulent orders.",
            },
            {
              title: "10. Limitation of Liability",
              text: "To the fullest extent permitted by law, NovaCommerce shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site or products purchased through it. Our total liability for any claim shall not exceed the amount you paid for the applicable order.",
            },
            {
              title: "11. Changes to These Terms",
              text: "We may revise these Terms of Service from time to time. Material changes will be reflected by an updated \u201cLast updated\u201d date above. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.",
            },
            {
              title: "12. Governing Law",
              text: "These terms are governed by the laws of the jurisdiction in which NovaCommerce operates, without regard to conflict-of-law principles.",
            },
            {
              title: "13. Contact Us",
              text: "If you have questions about these Terms of Service, please reach out through our Contact page.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}