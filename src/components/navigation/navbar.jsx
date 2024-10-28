import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const scrollNavbar = () => {
    setNavbar(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => {
      window.removeEventListener("scroll", scrollNavbar);
    };
  }, []);

  return (
    <header className={`${navbar ? "bg-white shadow-md" : "bg-transparent"} fixed top-0 w-full transition-all duration-300`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold ${navbar ? "text-[#df334e]" : "text-white"}`}>
            Ivolks Creative
          </a>
          <div className="hidden md:flex items-center space-x-4">
            {["Works", "About", "Services", "Community", "Contact"].map((item, index) => (
              <a key={index} href="#" className={`font-bold uppercase cursor-pointer ${navbar ? "text-gray-600" : "text-white"} hover:text-blue-600`}>
                {item}
              </a>
            ))}
            <a href="#" className={`font-bold uppercase ${navbar ? "text-gray-600" : "text-white"} hover:text-blue-600`}>
              <FaSearch className="mt-0.5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
