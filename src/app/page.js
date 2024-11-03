"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Gallery from "@/components/section/Gallery";
import Client from "@/components/section/Client";
import ContactBottom from "@/components/section/ContactBottom";
import Hero from "@/components/section/Hero";
import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };

  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* Content */}
        <Gallery />
        <Client />
        <ContactBottom />
        {scrolling && (
          <button onClick={scrollToTop} className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50">
            <FaArrowUp />
          </button>
        )}
      </main>
    </>
  );
}
