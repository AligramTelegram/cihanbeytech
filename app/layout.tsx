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
  title: "cihanbeytech — Web Tasarım Ajansı | İstanbul",
  description: "Markanızı dijital dünyada bir güç odağına dönüştürüyoruz. Profesyonel web tasarım, UI/UX, Next.js geliştirme ve dijital strateji hizmetleri.",
  keywords: "web tasarım, web ajansı, ui ux tasarım, next.js geliştirme, framer motion, istanbul, dijital ajans, e-ticaret sitesi, landing page",
  metadataBase: new URL("https://cihanbeytech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://cihanbeytech.vercel.app",
    siteName: "cihanbeytech",
    title: "cihanbeytech — Web Tasarım Ajansı | İstanbul",
    description: "Markanızı dijital dünyada bir güç odağına dönüştürüyoruz. Tasarım + Kod + Strateji.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "cihanbeytech — Web Tasarım Ajansı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cihanbeytech — Web Tasarım Ajansı",
    description: "Markanızı dijital dünyada bir güç odağına dönüştürüyoruz. Tasarım + Kod + Strateji.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon siyah.png",
    apple: "/icon siyah.png",
    shortcut: "/icon siyah.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "cihanbeytech",
  description: "İstanbul merkezli web tasarım ajansı. UI/UX, Next.js geliştirme, dijital strateji.",
  url: "https://cihanbeytech.vercel.app",
  email: "cihanbeydigital@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: "Worldwide",
  serviceType: ["Web Tasarım", "UI/UX Tasarım", "Web Geliştirme", "Dijital Strateji"],
  openingHours: "Mo-Sa 09:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${barlow.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise-overlay" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
