"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LINKS = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Süreç",      href: "#surec" },
  { label: "Portföy",    href: "#portfolyo" },
  { label: "İletişim",   href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const textColor = scrolled ? "#0a0a0a" : "#fff";
  const iconColor = open ? "#0a0a0a" : textColor;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "0 clamp(24px, 6vw, 80px)",
          height: 64,
          background: scrolled && !open ? "rgba(255,255,255,0.92)" : "transparent",
          borderBottom: scrolled && !open ? "1px solid #e8e8e8" : "1px solid transparent",
          boxShadow: scrolled && !open ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
          backdropFilter: scrolled && !open ? "blur(12px)" : "none",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* LEFT — empty */}
        <div />

        {/* LOGO — center */}
        <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }} onClick={() => setOpen(false)}>
          <Image
            src={open || scrolled ? "/logo siyah.png" : "/logo beyaz.png"}
            alt="cihanbeytech"
            width={180}
            height={45}
            style={{ objectFit: "contain", transition: "opacity 0.3s" }}
            priority
          />
        </a>

        {/* RIGHT — hamburger */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            zIndex: 210,
          }}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "block", width: 24, height: 1.5, background: iconColor, transformOrigin: "center", transition: "background 0.3s" }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            style={{ display: "block", width: 24, height: 1.5, background: iconColor, transition: "background 0.3s" }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "block", width: 24, height: 1.5, background: iconColor, transformOrigin: "center", transition: "background 0.3s" }}
          />
        </button>
        </div>
      </motion.nav>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 190,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 clamp(32px, 8vw, 100px)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {LINKS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 8vw, 80px)",
                    letterSpacing: "-0.04em",
                    color: "#0a0a0a",
                    textDecoration: "none",
                    lineHeight: 1.1,
                    borderBottom: "1px solid #f0f0f0",
                    paddingBottom: 16,
                    display: "block",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#7c3aed"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#0a0a0a"; }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 32 }}
            >
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 11, color: "#aaa", letterSpacing: "0.1em" }}>
                © 2025 cihanbeytech
              </span>
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 11, color: "#aaa", letterSpacing: "0.1em" }}>
                Istanbul, TR
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
