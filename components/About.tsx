"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SLIDES = [
  {
    num: "01",
    tag: "Kim Biz",
    title: "Dijital Dünyada\nGüç Odağı",
    body: "cihanbeytech olarak her projeye stratejik bir bakış açısıyla yaklaşıyoruz. Tasarım ve teknolojinin kesiştiği noktada, markanızı rakiplerinizden sıyrılacak dijital deneyimlere dönüştürüyoruz.",
    stats: [{ v: "50+", l: "Proje" }, { v: "5+", l: "Yıl" }],
    accent: "#7c3aed",
  },
  {
    num: "02",
    tag: "Ne Yapıyoruz",
    title: "Tasarım +\nKod + Strateji",
    body: "UI/UX tasarımından full-stack geliştirmeye, marka stratejisinden dijital pazarlamaya kadar her adımda yanınızdayız. Her çözüm ölçülebilir sonuçlar için inşa edilir.",
    stats: [{ v: "100%", l: "Memnuniyet" }, { v: "12+", l: "Ülke" }],
    accent: "#c026d3",
  },
  {
    num: "03",
    tag: "Neden Biz",
    title: "Kaliteden\nAsla Ödün Yok",
    body: "Minimalizm ve fonksiyonellik odaklı yaklaşımımız, kullanıcıları harekete geçiren, dönüşüm oranlarını artıran arayüzler üretmemizi sağlıyor. Her piksel, her satır kod bir amaca hizmet eder.",
    stats: [{ v: "48h", l: "Yanıt Süresi" }, { v: "∞", l: "Revizyon" }],
    accent: "#7c3aed",
  },
];

function ProgressDot({
  scrollYProgress,
  start,
  end,
  accent,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  accent: string;
}) {
  const width = useTransform(scrollYProgress, [start, end], [8, 28]);
  const bg = useTransform(scrollYProgress, [start, Math.min(end, 0.999)], ["#e0e0e0", accent]);
  return <motion.div style={{ width, height: 8, borderRadius: 4, background: bg }} />;
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(SLIDES.length - 1) * 100}vw`]);

  return (
    <section
      id="hakkimizda"
      ref={containerRef}
      style={{ height: `${SLIDES.length * 100}vh`, position: "relative" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

        {/* Section label */}
        <div style={{
          position: "absolute", top: 40, left: "clamp(24px, 6vw, 80px)", zIndex: 20,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#888" }}>
            Hakkımızda
          </span>
          <div style={{ width: 32, height: 1, background: "#e0e0e0" }} />
        </div>

        {/* Progress dots */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          zIndex: 20, display: "flex", gap: 8,
        }}>
          {SLIDES.map((slide, i) => (
            <ProgressDot
              key={i}
              scrollYProgress={scrollYProgress}
              start={i / SLIDES.length}
              end={(i + 1) / SLIDES.length}
              accent={slide.accent}
            />
          ))}
        </div>

        {/* Slide track */}
        <motion.div style={{ x, display: "flex", width: `${SLIDES.length * 100}%`, height: "100%" }}>
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              style={{
                width: `${100 / SLIDES.length}%`,
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "clamp(60px, 8vw, 120px) clamp(24px, 8vw, 120px)",
                position: "relative",
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
                borderRight: "1px solid #f0f0f0",
              }}
            >
              {/* Watermark number */}
              <span style={{
                position: "absolute", right: "clamp(24px, 6vw, 80px)", bottom: "clamp(40px, 6vw, 80px)",
                fontFamily: "var(--font-display), sans-serif", fontWeight: 900,
                fontSize: "clamp(120px, 18vw, 240px)", color: "rgba(0,0,0,0.04)",
                lineHeight: 1, userSelect: "none", letterSpacing: "-0.05em",
              }}>
                {slide.num}
              </span>

              {/* Content */}
              <div style={{ maxWidth: 640, position: "relative", zIndex: 2 }}>
                {/* Tag */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: slide.accent, display: "inline-block" }} />
                  <span style={{
                    fontFamily: "var(--font-body), sans-serif", fontSize: 11,
                    letterSpacing: "0.2em", textTransform: "uppercase", color: slide.accent,
                  }}>
                    {slide.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "var(--font-display), sans-serif", fontWeight: 900,
                  fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 0.95,
                  letterSpacing: "-0.02em", textTransform: "uppercase",
                  color: "#0a0a0a", marginBottom: 32, whiteSpace: "pre-line",
                }}>
                  {slide.title}
                </h2>

                {/* Body */}
                <p style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: "clamp(14px, 1.4vw, 17px)",
                  color: "#666", lineHeight: 1.8, maxWidth: 480, marginBottom: 48,
                }}>
                  {slide.body}
                </p>

                {/* Stats */}
                <div style={{ display: "flex", gap: "clamp(24px, 4vw, 48px)", flexWrap: "wrap" }}>
                  {slide.stats.map(s => (
                    <div key={s.l}>
                      <div style={{
                        fontFamily: "var(--font-display), sans-serif", fontWeight: 900,
                        fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.03em",
                        color: slide.accent, lineHeight: 1,
                      }}>
                        {s.v}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-body), sans-serif", fontSize: 11,
                        color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 6,
                      }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right accent line */}
              <div style={{
                position: "absolute", right: 0, top: "10%", width: 3, height: "80%",
                background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)`,
                opacity: 0.3,
              }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
