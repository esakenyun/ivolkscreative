import Image from "next/image";

export default function Client() {
  return (
    <div className="flex flex-col items-center justify-center py-[3%] gap-5">
      <p className="text-2xl md:text-4xl font-extrabold text-center">Client</p>
      {/* List Client */}
      <div className="grid grid-cols-4 gap-5 md:gap-10 items-center">
        <Image src={"/client/fiesta.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="client" priority />
        <Image src={"/client/campina.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="client" priority />
        <Image src={"/client/klink2.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="client" priority />
        <Image src={"/client/cappanda.png"} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} alt="client" priority />
      </div>
    </div>
  );
}
