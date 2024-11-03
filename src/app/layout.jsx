import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/scrolling/SmoothScrolling";
import Footer from "@/components/section/Footer";

const monserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Ivolks Creative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <div className="flex flex-col min-h-screen">
          <SmoothScrolling>{children}</SmoothScrolling>
          <Footer />
        </div>
      </body>
    </html>
  );
}
