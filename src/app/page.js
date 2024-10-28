"use client";
import Navbar from "@/components/navigation/navbar";
import Contact from "@/components/section/contact";
import Footer from "@/components/section/footer";
import Hero from "@/components/section/hero";
import StoryTelling from "@/components/section/storytelling";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* Content */}
        <div className="py-24">
          <div className="flex flex-col md:flex-row gap-14 lg:gap-20 px-10 lg:px-28">
            <div className="flex flex-col gap-3 md:gap-5 lg:gap-3 w-full md:w-3/4">
              <p className="font-bold text-[#df334e] uppercase text-lg">What We Do</p>
              <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">We Are a modern-day production and content studio</p>
              <p className="text-xl lg:text-2xl">Whether it&apos;s films, TV series, or tailor-made branded content, our passion is to craft stories that not only entertain but also inspire and spark meaningful conversations.</p>
            </div>
            <div className="flex flex-col gap-5 md:gap-2 lg:gap-5 w-full md:w-1/4">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-xl lg:text-4xl text-[#df334e] font-bold border-b-2 w-fit border-[#df334e]">Ivolks Creative</h1>
                <p className="text-base md:text-[9px] lg:text-base uppercase font-semibold tracking-[0.32em]">Film & Television</p>
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
                <h1 className="text-4xl md:text-xl lg:text-4xl text-purple-700 font-bold border-b-2 w-fit border-purple-700">Ivolks Creative</h1>
                <p className="text-base md:text-[9px] lg:text-base uppercase font-semibold tracking-[0.36em]">Branded Content</p>
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
        </div>
        <StoryTelling />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
