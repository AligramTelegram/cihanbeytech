"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHANNELS = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    desc: "Hızlı yanıt için yazın",
    value: "+90 ___ ___ __ __",
    href: "https://wa.me/90XXXXXXXXXX",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: "#25d366",
    border: "rgba(37,211,102,0.2)",
    glow: "rgba(37,211,102,0.08)",
  },
  {
    key: "mail",
    label: "E-Posta",
    desc: "Detaylı proje için yazın",
    value: "cihanbeydigital@gmail.com",
    href: "mailto:cihanbeydigital@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
    color: "#7c3aed",
    border: "rgba(124,58,237,0.2)",
    glow: "rgba(124,58,237,0.08)",
  },
  {
    key: "instagram",
    label: "Instagram",
    desc: "Portfolyo ve güncel işler",
    value: "@cihanbeytech",
    href: "https://instagram.com/cihanbeytech",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "#e1306c",
    border: "rgba(225,48,108,0.2)",
    glow: "rgba(225,48,108,0.08)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="iletisim"
      ref={ref}
      style={{
        background: "#08040f",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT — big title */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}>
        {/* ambient glow */}
        <div style={{
          position: "absolute", bottom: "0%", left: "-20%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eyebrow */}
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "var(--font-body), sans-serif", fontSize: 11,
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#7c3aed",
            marginBottom: 28,
          }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "#7c3aed" }} />
            İletişim
          </span>

          {/* big heading */}
          <h2 style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(52px, 8vw, 110px)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#ffffff",
            marginBottom: 32,
          }}>
            Projenizi<br />
            <span style={{ color: "#7c3aed" }}>Konuşalım.</span>
          </h2>

          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "clamp(13px, 1.3vw, 16px)",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.85,
            maxWidth: 380,
            marginBottom: 48,
          }}>
            Fikriniz var, biz gerçeğe dönüştürüyoruz.<br />
            24 saat içinde geri dönüş garantisi.
          </p>

          {/* bottom info */}
          <div style={{
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex", flexDirection: "column", gap: 8,
          }}>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
              İstanbul, Türkiye
            </span>
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
              Pzt – Cmt &nbsp;·&nbsp; 09:00 – 18:00
            </span>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — channels */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)",
        gap: 16,
      }}>
        {CHANNELS.map((ch, i) => (
          <motion.a
            key={ch.key}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 6 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              padding: "clamp(20px, 2.5vw, 28px) clamp(20px, 2.5vw, 28px)",
              background: ch.glow,
              border: `1px solid ${ch.border}`,
              borderRadius: 14,
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.3s, background 0.3s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = ch.color;
              (e.currentTarget as HTMLElement).style.background = ch.glow.replace("0.08", "0.13");
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = ch.border;
              (e.currentTarget as HTMLElement).style.background = ch.glow;
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {/* icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: `${ch.color}15`,
                border: `1px solid ${ch.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: ch.color, flexShrink: 0,
              }}>
                {ch.icon}
              </div>

              <div>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 10, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                  marginBottom: 4,
                }}>
                  {ch.label}
                </div>
                <div style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.6vw, 19px)",
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}>
                  {ch.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 2,
                }}>
                  {ch.desc}
                </div>
              </div>
            </div>

            {/* arrow */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ch.color} strokeWidth="1.5" style={{ opacity: 0.6, flexShrink: 0 }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
