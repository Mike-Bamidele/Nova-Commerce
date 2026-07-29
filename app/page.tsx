import Navbar from "@/components/Navbar";
import PremiumHero from "@/components/PremiumHero";
import Categories from "@/components/Categories";
import TrustBar from "@/components/TrustBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <PremiumHero />
      <TrustBar />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </>
  );
}