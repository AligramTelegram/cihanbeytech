"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Keşif & Strateji",
    desc: "Markanızı, hedef kitlenizi ve rakiplerinizi derinlemesine analiz ediyoruz. Her karar veriye dayalı, her strateji amaca yönelik.",
    tags: ["Analiz", "Brief", "Araştırma"],
  },
  {
    num: "02",
    title: "Tasarım & Konsept",
    desc: "Wireframe'den yüksek çözünürlüklü prototipe. Kullanıcı deneyimini merkeze alarak estetik ile fonksiyonelliği harmanlıyoruz.",
    tags: ["UI/UX", "Prototip", "Moodboard"],
  },
  {
    num: "03",
    title: "Geliştirme",
    desc: "Next.js, Framer Motion ve modern teknolojilerle hayata geçiriyoruz. Hızlı, erişilebilir, SEO uyumlu.",
    tags: ["Next.js", "Tailwind", "Framer"],
  },
  {
    num: "04",
    title: "Lansman & Destek",
    desc: "Test, optimizasyon ve canlıya geçiş. Lansman sonrası 3 ay boyunca yanınızdayız.",
    tags: ["Deploy", "Test", "Destek"],
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        paddingLeft: 64,
        paddingBottom: index < steps.length - 1 ? "clamp(56px, 7vw, 88px)" : 0,
        position: "relative",
      }}
    >
      {/* dot */}
      <motion.div
        initial={{ scale: 0, backgroundColor: "rgba(255,255,255,0.1)" }}
        animate={inView ? { scale: 1, backgroundColor: "#7c3aed" } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 12,
          height: 12,
          borderRadius: "50%",
          border: "2px solid #7c3aed",
          transform: "translateX(-50%)",
          zIndex: 2,
          marginLeft: 1,
        }}
      />

      {/* glow on active dot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#7c3aed",
          filter: "blur(8px)",
          transform: "translateX(-50%)",
          zIndex: 1,
          marginLeft: 1,
          opacity: 0.5,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* num + title row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <span style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 11,
            color: "#7c3aed",
            letterSpacing: "0.2em",
            flexShrink: 0,
          }}>
            {step.num}
          </span>
          <h3 style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(26px, 3.5vw, 44px)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 1,
          }}>
            {step.title}
          </h3>
        </div>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "clamp(13px, 1.2vw, 15px)",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.85,
          maxWidth: 520,
        }}>
          {step.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {step.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 10,
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "4px 12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: 2,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);
  const headerInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      id="surec"
      ref={sectionRef}
      style={{
        background: "#08040f",
        padding: "clamp(80px, 12vw, 140px) clamp(24px, 8vw, 128px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ambient glow */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "60%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(56px, 8vw, 96px)" }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "var(--font-body), sans-serif", fontSize: 11,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#7c3aed",
            marginBottom: 20,
          }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "#7c3aed" }} />
            Süreç
          </span>
          <h2 style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(42px, 7vw, 96px)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#ffffff",
          }}>
            Nasıl<br />
            <span style={{ color: "#7c3aed" }}>Çalışıyoruz?</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 1 }}>

          {/* Track line */}
          <div style={{
            position: "absolute",
            left: 0,
            top: 8,
            bottom: 8,
            width: 1,
            background: "rgba(255,255,255,0.08)",
          }} />

          {/* Progress line */}
          <motion.div style={{
            position: "absolute",
            left: 0,
            top: 8,
            width: 1,
            height: lineH,
            background: "linear-gradient(to bottom, #7c3aed, #c026d3)",
            originY: 0,
            boxShadow: "0 0 8px rgba(124,58,237,0.6)",
          }} />

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
