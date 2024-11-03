import Image from "next/image";

export default function Gallery() {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        {images.map((img, index) => (
          <div className="relative group overflow-hidden cursor-pointer" key={index}>
            <Image src={img.src} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300 xl:max-w-full" width={500} height={500} alt={img.text} priority />
            <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300">
              <h2 className="text-xl font-bold z-10">{img.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "LoremIpsum",
  },
  {
    src: "https://images.unsplash.com/photo-1723724537190-8062a9515ca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1424296308064-1eead03d1ad9?q=80&w=2070&auto=format&fit=crop",
    text: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=2070&auto=format&fit=crop",
    text: "Image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Image 6",
  },
  {
    src: "https://images.unsplash.com/photo-1526148653006-c95760000cc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Image 6",
  },
];
