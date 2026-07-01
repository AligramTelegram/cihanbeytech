"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/animations";

const PACKAGES = [
  {
    name: "Başlangıç Paketi",
    desc: "Tek sayfa landing page",
    price: "8.000₺ – 12.000₺",
    commission: "%25 komisyon",
    color: "#7c3aed",
  },
  {
    name: "Standart Paket",
    desc: "Çok sayfalı kurumsal site",
    price: "15.000₺ – 25.000₺",
    commission: "%25 komisyon",
    color: "#c026d3",
  },
  {
    name: "Meta Reklam Yönetimi",
    desc: "Aylık reklam yönetim hizmeti",
    price: "3.000₺ – 6.000₺ / ay",
    commission: "%20 komisyon (aylık, tekrarlayan)",
    color: "#7c3aed",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Müşteri Bul",
    desc: "Çevrende web sitesine veya reklam yönetimine ihtiyacı olan işletme sahiplerine ulaş. Kuaför, salon, klinik, e-ticaret — her sektörden olabilir.",
  },
  {
    num: "02",
    title: "Teklifi Sun",
    desc: "Sana verdiğimiz fiyat listesi ve satış kitiyle müşteriye teklifi anlat. Portföyümüzdeki canlı projeleri örnek göster.",
  },
  {
    num: "03",
    title: "Bize Yönlendir",
    desc: "Müşteri onay verince bizimle iletişime geç. Teknik detay, teslimat ve kalite kontrolü tamamen bizde — sen sadece satışı kapat.",
  },
  {
    num: "04",
    title: "Komisyonunu Al",
    desc: "Proje tamamlanıp ödeme alındıktan 3-5 gün içinde komisyonun hesabına geçer. Şeffaf takip, gizli kesinti yok.",
  },
];

export default function BayilikPage() {
  return (
    <main style={{ background: "#08040f", minHeight: "100vh", color: "#fff" }}>
      {/* HERO */}
      <section
        style={{
          padding: "clamp(120px, 15vw, 180px) clamp(24px, 6vw, 80px) clamp(60px, 8vw, 100px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <motion.div variants={fadeIn} initial="hidden" animate="visible" style={{ marginBottom: 20 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c026d3",
            }}
          >
            <span style={{ display: "inline-block", width: 24, height: 1, background: "#c026d3" }} />
            Bayilik Programı
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(40px, 7vw, 90px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Satış Yap, <span style={{ color: "#c026d3" }}>Komisyonunu Kazan.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "clamp(14px, 1.4vw, 18px)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            maxWidth: 560,
          }}
        >
          cihanbeytech için müşteri getir, teknik işi bize bırak. Web sitesi ve reklam yönetimi
          satışlarında %20-25 komisyon kazan — teslimat, kalite ve destek tamamen bizim sorumluluğumuzda.
        </motion.p>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section style={{ padding: "0 clamp(24px, 6vw, 80px) clamp(80px, 10vw, 120px)" }}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: 48, display: "flex", alignItems: "center", gap: 12 }}
        >
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Nasıl Çalışır
          </span>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.15)" }} />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              style={{
                padding: "clamp(24px, 3vw, 32px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 900,
                  fontSize: 32,
                  color: "#c026d3",
                  opacity: 0.6,
                  marginBottom: 16,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FİYATLAR & KOMİSYON */}
      <section style={{ padding: "0 clamp(24px, 6vw, 80px) clamp(80px, 10vw, 120px)" }}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: 48, display: "flex", alignItems: "center", gap: 12 }}
        >
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Paketler & Komisyon
          </span>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.15)" }} />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
          }}
        >
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              style={{
                padding: "clamp(28px, 3vw, 36px)",
                borderRadius: 18,
                border: `1px solid ${pkg.color}30`,
                background: `linear-gradient(135deg, ${pkg.color}12 0%, rgba(255,255,255,0.02) 60%)`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: pkg.color,
                  marginBottom: 12,
                }}
              >
                {pkg.desc}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 900,
                  fontSize: 26,
                  textTransform: "uppercase",
                  marginBottom: 20,
                  lineHeight: 1.05,
                }}
              >
                {pkg.name}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                {pkg.price}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 12,
                  color: pkg.color,
                  border: `1px solid ${pkg.color}40`,
                  padding: "6px 14px",
                  borderRadius: 999,
                }}
              >
                {pkg.commission}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px) clamp(100px, 12vw, 140px)",
          textAlign: "center",
        }}
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 56px)",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          Hazırsan <span style={{ color: "#c026d3" }}>Başlayalım.</span>
        </motion.h2>
        <motion.a
          href="https://wa.me/90XXXXXXXXXX?text=Merhaba%2C%20bayilik%20program%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            border: "1.5px solid #c026d3",
            color: "#fff",
            background: "transparent",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 12,
            letterSpacing: "0.16em",
            padding: "16px 36px",
            textTransform: "uppercase",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          WhatsApp'tan Başvur
        </motion.a>
      </section>
    </main>
  );
}
