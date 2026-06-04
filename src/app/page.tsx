"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import ClientLogos from "@/components/ClientLogos";
import SolutionCards from "@/components/SolutionCards";
import ProductSpotlight from "@/components/ProductSpotlight";
import ProductFeatures from "@/components/ProductFeatures";
import NewsSection from "@/components/NewsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<"ko" | "en">("ko");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "ko" | "en" | null;
    if (savedLang) {
      setLanguage(savedLang);
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection language={language} />
        <PainPoints language={language} />
        <ClientLogos language={language} />
        <SolutionCards language={language} />
        <ProductSpotlight language={language} />
        <ProductFeatures language={language} />
        <NewsSection language={language} />
        <ContactCTA language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
