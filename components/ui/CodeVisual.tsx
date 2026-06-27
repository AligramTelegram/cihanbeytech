"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CODE_LINES = [
  { tokens: [{ t: "const", c: "#7c3aed" }, { t: " hero", c: "#0a0a0a" }, { t: " =", c: "#888" }, { t: " () =>", c: "#7c3aed" }, { t: " {", c: "#888" }] },
  { tokens: [{ t: "  return", c: "#7c3aed" }, { t: " (", c: "#888" }], indent: 1 },
  { tokens: [{ t: "    <", c: "#888" }, { t: "motion.div", c: "#0891b2" }, { t: " animate", c: "#7c3aed" }, { t: "={{", c: "#888" }], indent: 2 },
  { tokens: [{ t: "      opacity", c: "#0a0a0a" }, { t: ": ", c: "#888" }, { t: "1", c: "#16a34a" }, { t: ",", c: "#888" }], indent: 3 },
  { tokens: [{ t: "      y", c: "#0a0a0a" }, { t: ": ", c: "#888" }, { t: "0", c: "#16a34a" }, { t: ",", c: "#888" }], indent: 3 },
  { tokens: [{ t: "    }}", c: "#888" }, { t: ">", c: "#888" }], indent: 2 },
  { tokens: [{ t: "      <", c: "#888" }, { t: "h1", c: "#0891b2" }, { t: " className", c: "#7c3aed" }, { t: '="hero-title"', c: "#16a34a" }, { t: ">", c: "#888" }], indent: 3 },
  { tokens: [{ t: "        cihanbeytech", c: "#0a0a0a" }], indent: 4 },
  { tokens: [{ t: "      </", c: "#888" }, { t: "h1", c: "#0891b2" }, { t: ">", c: "#888" }], indent: 3 },
  { tokens: [{ t: "    </", c: "#888" }, { t: "motion.div", c: "#0891b2" }, { t: ">", c: "#888" }], indent: 2 },
  { tokens: [{ t: "  )", c: "#888" }], indent: 1 },
  { tokens: [{ t: "}", c: "#888" }] },
];

const FLOATING_BADGES = [
  { label: "Next.js 15", icon: "▲", color: "#0a0a0a", x: "8%", y: "12%", delay: 0 },
  { label: "Framer Motion", icon: "◎", color: "#7c3aed", x: "75%", y: "8%", delay: 0.4 },
  { label: "TypeScript", icon: "TS", color: "#0891b2", x: "82%", y: "72%", delay: 0.8 },
  { label: "Tailwind CSS", icon: "◈", color: "#0d9488", x: "5%", y: "78%", delay: 1.2 },
];

export default function CodeVisual() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorLine, setCursorLine] = useState(0);

  useEffect(() => {
    const total = CODE_LINES.length;
    let line = 0;
    const interval = setInterval(() => {
      if (line < total) {
        setVisibleLines(line + 1);
        setCursorLine(line);
        line++;
      } else {
        line = 0;
        setVisibleLines(0);
        setCursorLine(0);
      }
    }, 260);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* floating tech badges */}
      {FLOATING_BADGES.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: b.delay + 0.8, duration: 0.5 },
            scale: { delay: b.delay + 0.8, duration: 0.5 },
            y: { delay: b.delay + 1.2, duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: 8,
            padding: "6px 12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            zIndex: 10,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: 13, color: b.color, fontWeight: 700 }}>{b.icon}</span>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 11, color: "#0a0a0a", letterSpacing: "0.04em" }}>{b.label}</span>
        </motion.div>
      ))}

      {/* code editor window */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(480px, 90%)",
          background: "#0a0a0a",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)",
          zIndex: 5,
        }}
      >
        {/* title bar */}
        <div
          style={{
            padding: "10px 16px",
            background: "#111",
            display: "flex",
            alignItems: "center",
            gap: 6,
            borderBottom: "1px solid #1e1e1e",
          }}
        >
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 11,
              color: "#555",
              marginLeft: 8,
              letterSpacing: "0.05em",
            }}
          >
            Hero.tsx
          </span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
            {["JSX", "UTF-8"].map((t) => (
              <span key={t} style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 9, color: "#333", letterSpacing: "0.08em" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* code area */}
        <div style={{ padding: "16px 0", minHeight: 280 }}>
          <AnimatePresence>
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1.5px 16px",
                  background: i === cursorLine ? "rgba(255,255,255,0.04)" : "transparent",
                  position: "relative",
                }}
              >
                {/* line number */}
                <span
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 11,
                    color: "#2a2a2a",
                    minWidth: 28,
                    userSelect: "none",
                  }}
                >
                  {i + 1}
                </span>
                {/* tokens */}
                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 12, lineHeight: 1.7 }}>
                  {line.tokens.map((tok, j) => (
                    <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                  ))}
                </span>
                {/* cursor blink */}
                {i === cursorLine && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{
                      display: "inline-block",
                      width: 2,
                      height: 14,
                      background: "#7c3aed",
                      marginLeft: 1,
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* status bar */}
        <div
          style={{
            padding: "5px 16px",
            background: "#7c3aed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, color: "#fff", letterSpacing: "0.06em" }}>
            ◉ cihanbeytech
          </span>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)" }}>
            Ln {cursorLine + 1}, Col 1
          </span>
        </div>
      </motion.div>

      {/* ambient glow under editor */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)",
          width: 360,
          height: 200,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
}
