"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "PopSosyal",
    category: "Sosyal Medya",
    year: "2025",
    desc: "Sosyal medya büyüme platformu. Instagram, TikTok, YouTube için takipçi ve etkileşim hizmetleri. 7/24 destek, 30 gün iade garantisi.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    color: "#7c3aed",
    img: "/Ekran görüntüsü 2026-06-27 224920.png",
    link: "https://popsosyal.com",
  },
  {
    num: "02",
    title: "API Calculators",
    category: "SaaS · DevTools",
    year: "2025",
    desc: "Geliştiriciler için altyapı maliyet hesaplayıcısı. LLM, vektör DB, cloud VPS fiyatlarını tek platformda karşılaştır. 12+ sağlayıcı desteği.",
    tags: ["React", "TypeScript", "Vercel"],
    color: "#c026d3",
    img: "/Ekran görüntüsü 2026-06-27 224952.png",
    link: "https://apicalculators.com",
  },
  {
    num: "03",
    title: "Hemen Salon",
    category: "SaaS · Sağlık",
    year: "2025",
    desc: "Kuaför ve güzellik salonları için yönetim yazılımı. Online randevu, SMS/WhatsApp hatırlatma, CRM ve finansal raporlar.",
    tags: ["Next.js", "Node.js", "Tailwind"],
    color: "#7c3aed",
    img: "/Ekran görüntüsü 2026-06-27 225023.png",
    link: "https://hemensalon.com",
  },
  {
    num: "04",
    title: "Dyt. İrem Eker",
    category: "Diyetisyen",
    year: "2025",
    desc: "Diyetisyen için kişisel danışmanlık web sitesi. Online randevu, beslenme programları ve hasta hikayeleri ile güven odaklı tasarım.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    color: "#c026d3",
    img: "/Ekran görüntüsü 2026-06-27 225100.png",
    link: "#",
  },
  {
    num: "05",
    title: "Glam Studio",
    category: "Güzellik Merkezi",
    year: "2025",
    desc: "Güzellik ve estetik merkezi için lüks konsept site. Online rezervasyon, hizmet kataloğu ve öncesi/sonrası galeri.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    color: "#7c3aed",
    img: "/Ekran görüntüsü 2026-06-27 225228.png",
    link: "#",
  },
  {
    num: "06",
    title: "Dyt. Beslenme",
    category: "Diyetisyen",
    year: "2024",
    desc: "Klinik diyetisyen için dijital varlık projesi. Blog, diyet programı tanıtımı ve WhatsApp entegrasyonlu iletişim formu.",
    tags: ["Next.js", "Sanity CMS", "Vercel"],
    color: "#c026d3",
    img: "/Screenshot.png",
    link: "#",
  },
];

function ProgressDot({
  scrollYProgress, start, end, color,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number; end: number; color: string;
}) {
  const width = useTransform(scrollYProgress, [start, end], [8, 28]);
  const bg = useTransform(scrollYProgress, [start, Math.min(end, 0.999)], ["#e0e0e0", color]);
  return <motion.div style={{ width, height: 8, borderRadius: 4, background: bg }} />;
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(projects.length - 1) * 100}vw`]);
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return (
    <section id="portfolyo" style={{ background: "#fff", padding: "80px 24px 60px" }}>
      <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#aaa" }}>Portföy</span>
        <div style={{ width: 28, height: 1, background: "#e0e0e0" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {projects.map((project, i) => (
          <div key={i} style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: project.color, border: `1px solid ${project.color}40`, padding: "4px 12px", borderRadius: 2 }}>{project.category}</span>
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, color: "#bbb" }}>{project.year}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 900, fontSize: "clamp(32px, 8vw, 48px)", lineHeight: 0.95, textTransform: "uppercase", color: "#0a0a0a", marginBottom: 12 }}>{project.title}</h2>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 13, color: "#888", lineHeight: 1.8, marginBottom: 20 }}>{project.desc}</p>
            <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "16/9", marginBottom: 16 }}>
              <Image src={project.img} alt={project.title} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="100vw" />
            </div>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontFamily: "var(--font-body), sans-serif", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: project.color, borderBottom: `1px solid ${project.color}40`, paddingBottom: 4 }}>
                Siteyi Gör <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <section
      id="portfolyo"
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh`, position: "relative" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", transform: "translateZ(0)" }}>

        {/* Progress dots */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%",
          transform: "translateX(-50%)", zIndex: 20, display: "flex", gap: 8,
        }}>
          {projects.map((p, i) => (
            <ProgressDot
              key={i} scrollYProgress={scrollYProgress}
              start={i / projects.length} end={(i + 1) / projects.length}
              color={p.color}
            />
          ))}
        </div>

        {/* Slide track */}
        <motion.div style={{ x, display: "flex", width: `${projects.length * 100}vw`, height: "100%", willChange: "transform" }}>
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                width: "100vw",
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 100px)",
                position: "relative",
                background: "#ffffff",
                overflow: "hidden",
              }}
            >
              {/* Watermark number */}
              <span style={{
                position: "absolute",
                right: "clamp(24px, 4vw, 60px)",
                bottom: "clamp(40px, 4vw, 60px)",
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(120px, 20vw, 260px)",
                color: "rgba(0,0,0,0.04)",
                lineHeight: 1, userSelect: "none", letterSpacing: "-0.05em",
              }}>
                {project.num}
              </span>

              {/* Section tag top-left */}
              <div style={{
                position: "absolute", top: "clamp(90px, 10vw, 130px)",
                left: "clamp(24px, 8vw, 100px)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#aaa" }}>
                  Portföy
                </span>
                <div style={{ width: 28, height: 1, background: "#e0e0e0" }} />
              </div>

              {/* Content grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(32px, 5vw, 80px)",
                width: "100%",
                maxWidth: 1200,
                alignItems: "center",
                position: "relative", zIndex: 2,
              }}>
                {/* Left — info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                    <span style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: project.color, border: `1px solid ${project.color}40`,
                      padding: "4px 12px", borderRadius: 2,
                    }}>
                      {project.category}
                    </span>
                    <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, color: "#bbb", letterSpacing: "0.1em" }}>
                      {project.year}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(40px, 6vw, 80px)",
                    lineHeight: 0.92, letterSpacing: "-0.02em",
                    textTransform: "uppercase", color: "#0a0a0a", marginBottom: 24,
                  }}>
                    {project.title}
                  </h2>

                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "clamp(13px, 1.2vw, 15px)",
                    color: "#888", lineHeight: 1.8, maxWidth: 380, marginBottom: 32,
                  }}>
                    {project.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: 10, color: "#999",
                        border: "1px solid #e8e8e8",
                        padding: "4px 12px", letterSpacing: "0.1em",
                        textTransform: "uppercase", borderRadius: 2,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 32, height: 1, background: project.color }} />
                    <span style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: 11, color: project.color,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                    }}>
                      {project.num} / {String(projects.length).padStart(2,"0")}
                    </span>
                  </div>
                </div>

                {/* Right — image + link */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    boxShadow: `0 32px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)`,
                  }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      sizes="50vw"
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(135deg, ${project.color}10 0%, transparent 60%)`,
                      pointerEvents: "none",
                    }} />
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      textDecoration: "none",
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: project.color,
                      borderBottom: `1px solid ${project.color}40`,
                      paddingBottom: 4,
                      width: "fit-content",
                    }}
                  >
                    Siteyi Gör
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
