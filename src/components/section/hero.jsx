import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const newOpacity = Math.max(1 - currentScrollY / 200, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <video className="w-full h-screen object-cover" autoPlay loop muted>
        <source src={"videos/video_hero.mp4"} />
      </video>
      <motion.div initial="hidden" animate={{ opacity, y: 0 }} variants={variants} transition={{ duration: 0.5 }} className="absolute top-0 w-11/12 h-full flex flex-col justify-center pl-10 md:pl-16 md:w-[88%] lg:pl-40 lg:w-[48%]">
        <p className="font-extrabold text-[8px] md:text-sm uppercase text-white">Welcome to Ivolks Creative®</p>
        <p className="text-white text-2xl md:text-5xl lg:text-8xl font-bold py-3">Award-Winning Creators</p>
        <p className="text-white font-semibold text-sm md:text-xl lg:text-2xl">Based in Jakarta, Indonesia, we produce and distribute quality content to both local and global audiences</p>
        <div className="flex gap-3 pt-3">
          <button className="bg-[#df334e] font-bold uppercase py-2 px-4 rounded-md text-white hover:bg-red-700 text-sm lg:text-base">About US</button>
          <button className="bg-[#cdcdcd] font-bold uppercase py-2 px-4 rounded-md hover:bg-slate-200 text-sm lg:text-base">Get in Touch</button>
        </div>
      </motion.div>
    </div>
  );
}