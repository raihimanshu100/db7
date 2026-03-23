import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown } from "lucide-react";

const tiers = [
  {
    name: "Associate",
    desc: "Entry-level governance eligibility",
    accent: "#CD7F32",
    accentRgb: "205,127,50",
    gradient: "from-amber-700/30 to-amber-900/10",
    border: "border-amber-700/40",
    glowColor: "rgba(205,127,50,0.25)",
    heightClass: "min-h-[180px] sm:min-h-[220px]",
    badge: "Bronze",
    crown: false,
  },
  {
    name: "Director",
    desc: "Proposal rights + higher voting influence",
    accent: "#C0C0C0",
    accentRgb: "192,192,192",
    gradient: "from-slate-400/25 to-slate-600/10",
    border: "border-slate-400/40",
    glowColor: "rgba(192,192,192,0.2)",
    heightClass: "min-h-[220px] sm:min-h-[280px]",
    badge: "Silver",
    crown: false,
  },
  {
    name: "Sovereign",
    desc: "Strategic ecosystem governance authority",
    accent: "#C9A227",
    accentRgb: "201,162,39",
    gradient: "from-primary/30 to-primary/8",
    border: "border-primary/50",
    glowColor: "rgba(201,162,39,0.3)",
    heightClass: "min-h-[260px] sm:min-h-[340px]",
    badge: "Gold",
    crown: true,
  },
];

const DAOTiersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dao" className="relative py-14 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">— Governance</span>
          <h2 className="section-heading mt-4">Earn Your Governance Power</h2>
        </motion.div>

        {/* Staircase layout: items-end so they rise left to right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-center gap-4 sm:gap-5 md:gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                boxShadow: `0 24px 60px ${tier.glowColor}`,
                borderColor: tier.accent,
              }}
              className={`relative glass-card rounded-2xl p-6 sm:p-8 w-full sm:w-[220px] md:w-[260px] ${tier.heightClass} ${tier.border} flex flex-col justify-end transition-all duration-300 cursor-default`}
              style={{ willChange: 'transform' }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${tier.gradient} -z-10`} />

              {/* Crown for Sovereign */}
              {tier.crown && (
                <div className="absolute top-5 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `rgba(${tier.accentRgb},0.15)`, border: `1px solid rgba(${tier.accentRgb},0.4)` }}>
                    <Crown size={20} style={{ color: tier.accent }} />
                  </div>
                </div>
              )}

              {/* Tier badge */}
              <div className="mb-3">
                <span
                  className="text-[10px] font-mono-data uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ color: tier.accent, background: `rgba(${tier.accentRgb},0.12)`, border: `1px solid rgba(${tier.accentRgb},0.25)` }}
                >
                  {tier.badge}
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Ascending connecting line */}
        <div className="mt-8 mx-auto max-w-[700px] h-px bg-gradient-to-r from-amber-700/40 via-slate-400/40 to-primary/60" />
        <p className="text-center text-xs text-text-tertiary mt-3 font-mono-data">Progression: Associate → Director → Sovereign</p>

        {/* Governance Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 overflow-x-auto"
        >
          <div className="glass-card rounded-2xl border border-primary/15 overflow-hidden min-w-[600px]">
            <div className="px-6 py-4 border-b border-primary/10">
              <h3 className="font-display text-base font-semibold text-foreground">Tiered Membership & Voting Power</h3>
              <p className="text-xs text-text-secondary mt-1">Governance power is earned through commitment. Voting rights activate only after a loyalty delay.</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/10">
                  {["Tier", "Level", "Lock Req.", "Vote Weight", "Activation", "Exclusive Benefit"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-mono-data text-primary/70 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "Associate", level: "L1", lock: "10,000 dB7", weight: "1.0×", activation: "90 Days", benefit: "Official Governance Member", accent: "#CD7F32" },
                  { tier: "Director", level: "L2", lock: "100,000 dB7", weight: "1.5×", activation: "180 Days", benefit: "Monthly Virtual Boardroom", accent: "#C0C0C0" },
                  { tier: "Sovereign", level: "L3", lock: "1,000,000 dB7", weight: "2.0×", activation: "365 Days", benefit: "Sponsored Annual Global Meet", accent: "#C9A227" },
                ].map((row, i) => (
                  <tr key={row.tier} className={`border-b border-primary/5 hover:bg-primary/3 transition-colors ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                    <td className="px-4 py-3 font-display font-semibold" style={{ color: row.accent }}>{row.tier}</td>
                    <td className="px-4 py-3 font-mono-data text-xs text-text-secondary">{row.level}</td>
                    <td className="px-4 py-3 font-mono-data text-xs text-foreground">{row.lock}</td>
                    <td className="px-4 py-3 font-mono-data text-xs text-primary">{row.weight}</td>
                    <td className="px-4 py-3 text-xs text-text-secondary">{row.activation}</td>
                    <td className="px-4 py-3 text-xs text-text-secondary">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DAOTiersSection;
