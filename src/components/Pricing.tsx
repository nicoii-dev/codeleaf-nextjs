"use client";

import { motion } from "framer-motion";
import { ACCENT, PRICING } from "../lib/content";

function PlanCard({
  plan,
  highlighted = false,
}: {
  plan: { name: string; description: string; price: string; features: readonly string[]; cta: string; badge?: string };
  highlighted?: boolean;
}) {
  return (
    <div
      style={{
        border: highlighted ? `2px solid ${ACCENT}` : "1px solid #DDE5DE",
        borderRadius: 18,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        background: highlighted ? "#FFFFFF" : "#F9FBF8",
        boxShadow: highlighted ? "0 24px 48px -28px rgba(19,35,26,0.35)" : undefined,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22 }}>{plan.name}</h3>
        {plan.badge && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: 999,
              background: ACCENT,
              color: "#FFFFFF",
            }}
          >
            {plan.badge}
          </span>
        )}
      </div>
      <p style={{ margin: 0, fontSize: 15, color: "#4A5A50" }}>{plan.description}</p>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 700 }}>{plan.price}</div>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, lineHeight: 1.9, color: "#2F4A3A" }}>
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <a
        href="#contact"
        style={{
          marginTop: "auto",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 48,
          borderRadius: 999,
          border: highlighted ? "none" : "1.5px solid #13231A",
          background: highlighted ? ACCENT : "transparent",
          color: highlighted ? "#FFFFFF" : "#13231A",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        {plan.cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      style={{ background: "#FFFFFF", borderTop: "1px solid #DDE5DE", borderBottom: "1px solid #DDE5DE" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px", display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 3.6vw, 46px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Simple packages, clear prices
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#4A5A50" }}>
            Pick a starting point. Every package can be adjusted to fit your needs.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          <PlanCard plan={PRICING.starter} />
          <PlanCard plan={PRICING.business} highlighted />
          <PlanCard plan={PRICING.custom} />
        </div>
        <p style={{ margin: 0, fontSize: 15, color: "#4A5A50" }}>{PRICING.maintenanceNote}</p>
      </div>
    </motion.section>
  );
}
