"use client";

interface Props {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 18 }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div
        className="inline-flex gap-12 py-4"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--muted)", fontFamily: "var(--font-body), sans-serif" }}
          >
            {i % 2 === 0 ? (
              <span style={{ color: "var(--accent)", marginRight: "12px" }}>✦</span>
            ) : (
              <span style={{ marginRight: "12px", color: "var(--border)" }}>◆</span>
            )}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
