"use client";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/section/Hero";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Gallery from "@/components/section/Gallery";
import Client from "@/components/section/Client";
import ContactBottom from "@/components/section/ContactBottom";

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
        {/* <div className="grid grid-cols-2">
          Image
        </div> */}
        {/* <div className="py-24">
          <div className="flex flex-col md:flex-row gap-14 lg:gap-20 px-10 lg:px-28">
            <div className="flex flex-col gap-3 md:gap-5 lg:gap-3 w-full md:w-3/4">
              <p className="font-bold text-[#df334e] uppercase text-lg">What We Do</p>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">We Are a modern-day production and content studio</p>
              <p className="text-xl lg:text-2xl">Whether it&apos;s films, TV series, or tailor-made branded content, our passion is to craft stories that not only entertain but also inspire and spark meaningful conversations.</p>
            </div>
            <div className="flex flex-col gap-5 md:gap-2 lg:gap-5 w-full md:w-1/4">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-xl lg:text-4xl text-[#df334e] font-bold border-b-2 w-fit border-[#df334e]">Ivolks Creative®</h1>
                <p className="text-base md:text-[9px] lg:text-base uppercase font-semibold tracking-[0.39em] md:tracking-[0.37em] lg:tracking-[0.39em]">Film & Television</p>
              </div>
              <div className="flex flex-col gap-1 text-xl font-bold">
                <a className="font-bold text-xl">Feature Films</a>
                <a className="font-bold text-xl">TV Series</a>
                <a className="font-bold text-xl">IP Development</a>
                <a className="font-bold text-xl">Short Films</a>
              </div>
              <div className="pt-5 flex gap-2 items-center text-[#df334e] cursor-pointer hover:text-red-600">
                <p className="font-bold text-xl">Learn More</p>
                <GoArrowRight className="text-2xl pt-1" />
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-2 lg:gap-5 w-full md:w-1/4">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-xl lg:text-4xl text-purple-700 font-bold border-b-2 w-fit border-purple-700">Ivolks Creative®</h1>
                <p className="text-base md:text-[9px] lg:text-base uppercase font-semibold tracking-[0.44em] md:tracking-[0.42em] lg:tracking-[0.44em]">Branded Content</p>
              </div>
              <div className="flex flex-col gap-1 text-xl font-bold">
                <a className="font-bold text-xl">Branded Films</a>
                <a className="font-bold text-xl">Web Series</a>
                <a className="font-bold text-xl">TV Commercial</a>
                <a className="font-bold text-xl">Vertical</a>
              </div>
              <div className="pt-5 flex gap-2 items-center text-[#df334e] cursor-pointer hover:text-red-600">
                <p className="font-bold text-xl">Learn More</p>
                <GoArrowRight className="text-2xl pt-1" />
              </div>
            </div>
          </div>
        </div> */}
        {/* <StoryTelling /> */}
        {/* <Contact /> */}
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
