import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ModalContact({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("Clicked outside modal");
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={modalRef}
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }} // Duration of the animation
      className="bg-white rounded-lg shadow-lg w-96 fixed bottom-24 right-6 z-50">
      <div className="bg-purple-600 text-white text-center py-3 rounded-t-lg">
        <p className="font-semibold">Hello! Please contact our team below according to your needs.</p>
      </div>
      <div className="p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <img alt="Logo of a red antelope" className="w-12 h-12 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/X5YC5XeZo5SzPSNhnOxsVzoul0a8XuwBtqeZDKO4q7QlSorTA.jpg" width="50" />
          <div className="ml-3 text-left">
            <p className="text-gray-500 text-sm">For Business Inquiries</p>
            <p className="text-black font-bold text-lg">Studio Antelope</p>
            <p className="text-black font-bold text-lg">Productions</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          You can also contact us
          <a className="text-red-500" href="#">
            via this page
          </a>
          .
        </p>
        <button onClick={onClose} className="mt-4 bg-purple-600 text-white rounded py-2 px-4">
          Close
        </button>
      </div>
    </motion.div>
  );
}
