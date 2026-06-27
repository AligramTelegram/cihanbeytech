"use client";

import { useEffect, useRef } from "react";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const mouse = { x: 0.5, y: 0.5 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouse);

    // ── WAVE MESH GRID ──
    const COLS = 22;
    const ROWS = 14;

    function getMeshPoint(col: number, row: number) {
      const gx = (col / (COLS - 1)) * canvas!.width;
      const gy = (row / (ROWS - 1)) * canvas!.height;
      const mx = (mouse.x - 0.5) * 40;
      const my = (mouse.y - 0.5) * 25;
      const wave1 = Math.sin(t * 0.7 + col * 0.45 + row * 0.3) * 14;
      const wave2 = Math.cos(t * 0.5 + col * 0.3 - row * 0.4) * 8;
      return {
        x: gx + mx * Math.sin(row * 0.5),
        y: gy + wave1 + wave2 + my * Math.cos(col * 0.4),
      };
    }

    // ── FLOATING UI FRAMES ──
    interface Frame {
      x: number; y: number;
      w: number; h: number;
      floatAmp: number; floatSpeed: number; floatOff: number;
      opacity: number;
    }

    const frames: Frame[] = [
      { x: 0.06, y: 0.12, w: 240, h: 160, floatAmp: 10, floatSpeed: 0.5, floatOff: 0,   opacity: 0.55 },
      { x: 0.72, y: 0.08, w: 200, h: 140, floatAmp: 14, floatSpeed: 0.4, floatOff: 1.2, opacity: 0.45 },
      { x: 0.08, y: 0.62, w: 180, h: 130, floatAmp: 8,  floatSpeed: 0.6, floatOff: 2.4, opacity: 0.4  },
      { x: 0.74, y: 0.58, w: 220, h: 150, floatAmp: 12, floatSpeed: 0.35,floatOff: 0.8, opacity: 0.5  },
    ];

    function drawFrame(f: Frame) {
      const bx = f.x * canvas.width;
      const by = f.y * canvas.height + Math.sin(t * f.floatSpeed + f.floatOff) * f.floatAmp;
      const { w, h } = f;
      const r = 10;
      const barH = 30;
      const alpha = f.opacity;

      ctx.save();

      // glow
      ctx.shadowColor = "rgba(124,58,237,0.4)";
      ctx.shadowBlur = 20;

      // body
      ctx.beginPath();
      ctx.roundRect(bx, by, w, h, r);
      ctx.fillStyle = `rgba(8,6,14,${alpha})`;
      ctx.fill();
      ctx.shadowBlur = 0;

      // border
      ctx.beginPath();
      ctx.roundRect(bx, by, w, h, r);
      ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.7})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // top bar
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(bx, by, w, barH, [r, r, 0, 0]);
      ctx.fillStyle = `rgba(20,14,35,${alpha})`;
      ctx.fill();
      ctx.restore();

      // separator line
      ctx.beginPath();
      ctx.moveTo(bx, by + barH);
      ctx.lineTo(bx + w, by + barH);
      ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // traffic dots
      ["#ff5f56","#ffbd2e","#27c93f"].forEach((c, i) => {
        ctx.beginPath();
        ctx.arc(bx + 14 + i * 14, by + barH / 2, 4, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // url bar
      ctx.beginPath();
      ctx.roundRect(bx + 56, by + 7, w - 66, 16, 4);
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.05})`;
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(bx + 56, by + 7, w - 66, 16, 4);
      ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.08})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // content lines
      const lineY = by + barH + 14;
      const lines = [0.7, 0.45, 0.8, 0.35, 0.6];
      lines.forEach((lw, i) => {
        if (lineY + i * 16 + 7 > by + h - 10) return;
        ctx.beginPath();
        ctx.roundRect(bx + 14, lineY + i * 16, (w - 28) * lw, 6, 2);
        ctx.fillStyle = i === 0
          ? `rgba(124,58,237,${alpha * 0.85})`
          : i === 2
          ? `rgba(139,92,246,${alpha * 0.4})`
          : `rgba(255,255,255,${alpha * 0.1})`;
        ctx.fill();
      });

      // corner accent
      ctx.beginPath();
      ctx.moveTo(bx + w - 1, by + h - 20);
      ctx.lineTo(bx + w - 1, by + h - 1);
      ctx.lineTo(bx + w - 20, by + h - 1);
      ctx.strokeStyle = `rgba(124,58,237,${alpha * 0.6})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    }

    // ── PARTICLES ──
    const pts = Array.from({ length: 120 }, () => ({
      x: Math.random() * 1,
      y: Math.random() * 1,
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.5 + 0.15,
    }));

    // ── SCAN LINE ──
    let scanY = 0;

    function draw() {
      animId = requestAnimationFrame(draw);
      t += 0.016;
      scanY = (scanY + 0.8) % canvas.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, "#000000");
      grad.addColorStop(0.5, "#06021a");
      grad.addColorStop(1, "#000000");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── WAVE MESH ──
      ctx.save();
      // horizontal lines
      for (let row = 0; row < ROWS; row++) {
        ctx.beginPath();
        for (let col = 0; col < COLS; col++) {
          const p = getMeshPoint(col, row);
          col === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        const rowAlpha = 0.06 + Math.abs(Math.sin(row * 0.4 + t * 0.3)) * 0.06;
        ctx.strokeStyle = `rgba(124,58,237,${rowAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      // vertical lines
      for (let col = 0; col < COLS; col++) {
        ctx.beginPath();
        for (let row = 0; row < ROWS; row++) {
          const p = getMeshPoint(col, row);
          row === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        const colAlpha = 0.04 + Math.abs(Math.sin(col * 0.35 + t * 0.25)) * 0.04;
        ctx.strokeStyle = `rgba(124,58,237,${colAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      // intersection dots
      for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS; row++) {
          const p = getMeshPoint(col, row);
          const pulse = 0.3 + Math.sin(t * 1.2 + col * 0.6 + row * 0.4) * 0.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(124,58,237,${pulse * 0.5})`;
          ctx.fill();
        }
      }
      ctx.restore();

      // ── SCAN LINE ──
      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      scanGrad.addColorStop(0, "rgba(124,58,237,0)");
      scanGrad.addColorStop(0.4, "rgba(124,58,237,0.04)");
      scanGrad.addColorStop(0.5, "rgba(124,58,237,0.12)");
      scanGrad.addColorStop(0.6, "rgba(124,58,237,0.04)");
      scanGrad.addColorStop(1, "rgba(124,58,237,0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 60, canvas.width, 120);

      // ── PARTICLES ──
      pts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.opacity})`;
        ctx.fill();
      });

      // ── FRAMES ──
      frames.forEach(drawFrame);

      // ── CENTER GLOW ──
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.5);
      glow.addColorStop(0, `rgba(124,58,237,${0.06 + Math.sin(t * 0.8) * 0.02})`);
      glow.addColorStop(1, "rgba(124,58,237,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
