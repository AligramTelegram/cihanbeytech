"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "./ui/Marquee";
import { fadeIn } from "@/lib/animations";

const marqueeItems = [
  "Web Tasarım", "Framer Motion", "Next.js", "UI/UX", "E-Ticaret",
  "Landing Page", "Branding", "TypeScript", "Hız Optimizasyonu", "SEO",
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <Marquee items={marqueeItems} />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          padding: "clamp(48px, 6vw, 80px) clamp(24px, 8vw, 128px)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            {/* logo + tagline */}
            <div>
              <Image
                src="/logo siyah.png"
                alt="cihanbeytech"
                width={1941}
                height={286}
                style={{ display: "block", width: "clamp(200px, 30vw, 360px)", height: "auto" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 12,
                  letterSpacing: "0.06em",
                  width: "clamp(200px, 30vw, 360px)",
                }}
              >
                Dijital deneyimler inşa ediyoruz.
              </p>
            </div>

            {/* links */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 9,
                    color: "var(--muted)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Navigasyon
                </div>
                <div className="flex flex-col gap-3">
                  {["Hakkımızda", "Süreç", "Portföy", "İletişim"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/[ıİ]/g, "i").replace(/[öÖ]/g, "o").replace(/[şŞ]/g, "s").replace(/[üÜ]/g, "u").replace(/[çÇ]/g, "c")}`}
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: 12,
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        letterSpacing: "0.04em",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 9,
                    color: "var(--muted)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Sosyal
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Instagram", href: "#" },
                    { label: "LinkedIn", href: "#" },
                    { label: "Behance", href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: 12,
                        color: "var(--muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        letterSpacing: "0.04em",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* bottom row */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginTop: 48,
              paddingTop: 24,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: "0.06em",
              }}
            >
              © 2025 cihanbeytech. Tüm hakları saklıdır.
            </span>
            <Image
              src="/icon siyah.png"
              alt="cihanbeytech icon"
              width={28}
              height={28}
              style={{ objectFit: "contain", opacity: 0.4 }}
            />
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
