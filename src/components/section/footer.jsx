import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="px-5 text-center md:text-left lg:px-[3%] py-[2%] bg-black text-white mt-auto">
      <div className="hidden md:block">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1.5 w-full">
            <p className="text-xl font-bold">New Business</p>
            <p>contact@ivolkscreative.com</p>
            <p>+62 123 4567 8910</p>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <p className="text-xl font-bold">Explore</p>
            <a href="/" className="text-sm">
              Home
            </a>
            <a href="/about" className="text-sm">
              About
            </a>
            <a href="/works" className="text-sm">
              Works
            </a>
            <a href="/contact" className="text-sm">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <p className="text-xl font-bold">Follow</p>
            <a href="https://www.instagram.com/ivolks_creative/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaInstagram />
              <p className="text-sm">Instagram</p>
            </a>
            <a href="/" target="_blank" className="flex items-center gap-1 cursor-pointer">
              <FaLinkedin />
              <p className="text-sm">Linkedin</p>
            </a>
          </div>
          <div className="w-3/4">
            <p className="text-xl font-bold">Production House Ivolks Creative HQ</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam iste ipsa, eligendi commodi aspernatur?</p>
          </div>
        </div>
      </div>
      <p className="pt-[3%] uppercase font-bold text-sm">Copyright © 2024 - PT Ivolks Creative Indonesia | All Rights Reserved</p>
    </div>
  );
}
