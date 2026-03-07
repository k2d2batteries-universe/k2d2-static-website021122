import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Ticker from "@/src/components/Ticker";
import Products from "@/src/components/Products";
import AdBanner from "@/src/components/AdBanner";
import Features from "@/src/components/Features";
import Contact from "@/src/components/Contact";
import Testimonials from "@/src/components/Testimonials";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Products />
        <AdBanner />
        <Features />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
      {/* Client-side scroll reveal — runs after hydration */}
      <ScrollReveal />
    </>
  );
}
