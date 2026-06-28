"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/animations";
import MagneticBtn from "./ui/MagneticBtn";

const VIDEO_SRC = "/hero-v2.mp4";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#08040f",
      }}
    >
      {/* VIDEO */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}>
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* OVERLAYS */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(8,4,15,0.55)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,4,15,0.85) 40%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,4,15,0.3) 0%, transparent 30%, rgba(8,4,15,0.6) 100%)", zIndex: 2, pointerEvents: "none" }} />

      {/* MAIN CONTENT */}
      <motion.div
        style={{
          y, opacity,
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(100px, 12vw, 160px) clamp(24px, 6vw, 80px) clamp(40px, 6vw, 80px)",
        }}
      >
        {/* eyebrow */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" style={{ marginBottom: 20 }}>
          <span style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c026d3",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "#c026d3" }} />
            Web Tasarım Ajansı
          </span>
        </motion.div>

        {/* BIG TITLE */}
        <div style={{ marginBottom: 40, maxWidth: "clamp(280px, 90vw, 700px)" }}>
          {["Dijital", "Varlığınızı", "İnşa Edelim."].map((line, i) => (
            <div key={line} style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(64px, 10vw, 148px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color: i === 1 ? "transparent" : "#ffffff",
                  WebkitTextStroke: i === 1 ? "2px #ffffff" : "none",
                  display: "block",
                  margin: 0,
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={8}
        >
          <MagneticBtn
            href="#iletisim"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1.5px solid #c026d3",
              color: "#fff",
              background: "transparent",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 11,
              letterSpacing: "0.18em",
              padding: "14px 28px",
              textTransform: "uppercase",
              borderRadius: 999,
            }}
          >
            ▶ Proje Başlat
          </MagneticBtn>
        </motion.div>
      </motion.div>


      {/* SCROLL INDICATOR */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={15}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 22, height: 36,
            border: "1.5px solid rgba(255,255,255,0.2)",
            borderRadius: 11,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 3, height: 6, background: "#c026d3", borderRadius: 2 }}
          />
        </motion.div>
        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
