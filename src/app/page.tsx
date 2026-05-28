import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import SolutionCards from "@/components/SolutionCards";
import ProductSpotlight from "@/components/ProductSpotlight";
import ProductFeatures from "@/components/ProductFeatures";
import AppDownload from "@/components/AppDownload";
import NewsSection from "@/components/NewsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <ProductSpotlight />
        <SolutionCards />
        <ProductFeatures />
        <AppDownload />
        <NewsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
