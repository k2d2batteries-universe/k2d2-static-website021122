import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Ticker from "@/src/components/Ticker";
import HowItWorks from "@/src/components/HowItWorks";
import Brands from "@/src/components/Brands";
import Products from "@/src/components/Products";
import Features from "@/src/components/Features";
import AdBanner from "@/src/components/AdBanner";
import Testimonials from "@/src/components/Testimonials";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";
import FloatingCTA from "@/src/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Brands />
        <Products />
        <Features />
        <AdBanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
      <FloatingCTA />
    </>
  );
}
