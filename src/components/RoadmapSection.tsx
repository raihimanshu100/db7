import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "Phase 1",
    year: "2026",
    title: "Foundation",
    items: ["Staking", "Liquidity", "DAO Eligibility", "Governance Readiness"],
    current: true,
  },
  {
    phase: "Phase 2",
    year: "2026",
    title: "Utility",
    items: ["Merchant Infrastructure", "Reward Credits", "Utility App"],
    current: false,
  },
  {
    phase: "Phase 3",
    year: "Late 2026–Early 2027",
    title: "Sovereignty",
    items: ["Ownership Renouncement Finality", "DAO Power Shift"],
    current: false,
  },
  {
    phase: "Phase 4",
    year: "2027",
    title: "Scale",
    items: ["Utility Integrations", "Global Expansion"],
    current: false,
  },
  {
    phase: "Phase 5",
    year: "2028+",
    title: "Maturity",
    items: ["DAO-Led Ecosystem Growth", "Sustainability"],
    current: false,
  },
];

const RoadmapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Roadmap</span>
          <h2 className="section-heading mt-4">Building the Future</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />

          <div className="flex overflow-x-auto pb-8 gap-6 snap-x scrollbar-hide md:grid md:grid-cols-5">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`min-w-[220px] snap-start glass-card rounded-2xl p-6 transition-all duration-300 relative ${
                  p.current ? "ring-2 ring-primary ring-offset-4 ring-offset-background" : ""
                }`}
              >
                {/* Dot */}
                <div className="hidden md:block absolute -top-[5px] left-1/2 -translate-x-1/2 -translate-y-full mb-4">
                  <div className={`w-3 h-3 rounded-full ${p.current ? "bg-primary animate-pulse-gold" : "bg-text-tertiary"}`} />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono-data text-xs text-primary">{p.phase}</span>
                  {p.current && (
                    <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono-data">CURRENT</span>
                  )}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-text-tertiary mb-3">{p.year}</p>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
