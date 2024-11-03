import { LiaTimesSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

export default function VideoPreview({ isOpen, onClose, initialItem, items }) {
  const [activeItem, setActiveItem] = useState(initialItem);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveItem(initialItem);
      setIsPlaying(false);
    }
  }, [isOpen, initialItem]);

  useEffect(() => {
    setIsPlaying(false);
  }, [activeItem]);

  if (!isOpen) return null;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const getVideoUrl = (link) => {
    const url = new URL(link);
    url.searchParams.set("autoplay", "1");
    return url.toString();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
      <div className="w-full h-full bg-black text-white overflow-hidden relative">
        <div className="flex justify-between py-3 px-5">
          <p className="uppercase">Commercial Storytelling</p>
          <button onClick={onClose} className="text-white hover:text-gray-400 z-10">
            <LiaTimesSolid size={25} />
          </button>
        </div>

        {/* Arrow Move Video */}
        <div className="absolute top-[40%] left-5 z-10 select-none">
          <IoIosArrowBack
            className="cursor-pointer text-3xl"
            onClick={() => {
              const currentIndex = items.findIndex((item) => item.id === activeItem.id);
              if (currentIndex > 0) {
                setActiveItem(items[currentIndex - 1]);
              }
            }}
          />
        </div>
        <div className="absolute top-[40%] right-5 z-10 select-none">
          <IoIosArrowForward
            className="cursor-pointer text-3xl"
            onClick={() => {
              const currentIndex = items.findIndex((item) => item.id === activeItem.id);
              if (currentIndex < items.length - 1) {
                setActiveItem(items[currentIndex + 1]);
              }
            }}
          />
        </div>

        {/* Video Section */}
        <div className="py-5 flex justify-center items-center gap-10 md:px-10 lg:px-32">
          <div className="w-4/5 md:h-[30vh] lg:h-[80vh] relative">
            {isPlaying ? (
              <iframe src={getVideoUrl(activeItem.link)} title={activeItem.title} className="w-full h-full object-cover" allow="autoplay; fullscreen" />
            ) : (
              <>
                <Image src={activeItem.thumbnailUrl} className="w-full h-full object-cover bg-black opacity-55" alt={activeItem.title} width={500} height={500} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <p className="text-white">Ivolks Creative</p>
                  <p className="text-white text-3xl font-bold bg-opacity-50 px-2 rounded">{activeItem.title}</p>
                  <div onClick={handlePlayClick} className="flex gap-2 items-center cursor-pointer">
                    <FaRegCirclePlay className="text-2xl" />
                    <p className="text-sm">Play Video</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="w-1/5 md:max-h-[30vh] lg:max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl">{activeItem.title}</h2>
            <p className="text-sm text-gray-400 py-5">Ivolks Creative · {activeItem.duration}</p>
            <p>{activeItem.description}</p>
          </div>
        </div>

        {/* Other Video */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 overflow-y-hidden">
          <div className="flex space-x-4 overflow-x-auto overflow-y-hidden">
            {items.map((item) => (
              <div key={item.id} onClick={() => setActiveItem(item)} className={`relative flex-shrink-0 w-40 h-24 cursor-pointer transition-transform duration-300 ${activeItem.id === item.id ? "transform scale-110" : ""}`}>
                <Image src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" width={500} height={500} />
                {activeItem.id === item.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-md">
                    <p className="text-white text-[9px] font-semibold">{item.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
