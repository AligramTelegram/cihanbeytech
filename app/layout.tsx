import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "cihanbeytech — Web Tasarım Ajansı",
  description: "Markanızı dijital dünyada bir güç odağına dönüştürüyoruz. Tasarım + Kod + Strateji.",
  keywords: "web tasarım, web ajansı, next.js, framer motion, istanbul",
  icons: {
    icon: "/Adsız tasarım (1).png",
    apple: "/Adsız tasarım (1).png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${barlow.variable} ${jakarta.variable}`}>
      <body>
        <div className="noise-overlay" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
