import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "Phase 1",
    year: "Q1 2026",
    title: "Foundation",
    demandDriver: "Locking · Liquidity · Governance",
    demandType: "Structural",
    expectedPrice: "$0.01 – $0.05",
    items: ["dB7 required for locking rewards", "LP participation on DEX", "Minimum holdings for DAO eligibility"],
    current: true,
  },
  {
    phase: "Phase 2",
    year: "Q2 2026",
    title: "Utility",
    demandDriver: "Payments · Merchants",
    demandType: "Organic",
    expectedPrice: "$0.05 – $0.10",
    items: ["QR-based merchant payments", "Cashback & reward recycling", "Transaction-led usage"],
    current: false,
  },
  {
    phase: "Phase 3",
    year: "Q4 2026 – Q1 2027",
    title: "Sovereignty",
    demandDriver: "Compliance · DAO Power",
    demandType: "Strategic",
    expectedPrice: "$0.10 – $0.25",
    items: ["Post-license confidence", "Ownership renounce event", "Governance influence accumulation"],
    current: false,
  },
  {
    phase: "Phase 4",
    year: "2027",
    title: "Scale",
    demandDriver: "Utilities · Cards · Access",
    demandType: "Recurring",
    expectedPrice: "$0.25 – $0.50",
    items: ["Bills & utility payments", "Tier-2 exchange access", "Card-linked wallet balances"],
    current: false,
  },
  {
    phase: "Phase 5",
    year: "2028+",
    title: "Maturity",
    demandDriver: "Commerce · Ecosystem",
    demandType: "Economic",
    expectedPrice: "$0.50 – $1.00",
    items: ["Native e-commerce usage", "DAO grants & partnerships", "Reduced circulating supply"],
    current: false,
  },
];

const RoadmapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roadmap" className="relative py-24 md:py-32">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">— Roadmap</span>
          <h2 className="section-heading mt-4">Building the Future</h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-[28px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 z-0" />
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.13, duration: 0.6 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(201,162,39,0.12)' }}
                className={`glass-card rounded-2xl p-5 transition-all duration-300 ${
                  p.current ? "ring-1 ring-primary ring-offset-2 ring-offset-background" : ""
                }`}
                style={{ willChange: 'transform' }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    p.current ? "bg-primary border-primary animate-pulse" : "bg-background border-text-tertiary"
                  }`} />
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono-data text-xs text-primary">{p.phase}</span>
                  {p.current && (
                    <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-mono-data">CURRENT</span>
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-text-tertiary mb-3">{p.year}</p>
                <ul className="space-y-1.5 mb-3">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-primary/10 pt-3 space-y-1.5">
                  <p className="text-[10px] text-text-tertiary"><span className="text-primary/70">Driver:</span> {p.demandDriver}</p>
                  <p className="text-[10px] text-text-tertiary"><span className="text-primary/70">Type:</span> {p.demandType}</p>
                  <p className="text-[10px] font-mono-data text-primary/80">{p.expectedPrice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-primary/10" />
          <div className="flex flex-col gap-6">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`relative glass-card rounded-2xl p-5 ${
                  p.current ? "ring-1 ring-primary ring-offset-2 ring-offset-background" : ""
                }`}
              >
                <div className={`absolute -left-[22px] top-5 w-3.5 h-3.5 rounded-full border-2 ${
                  p.current ? "bg-primary border-primary animate-pulse" : "bg-background border-text-tertiary"
                }`} />
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono-data text-xs text-primary">{p.phase}</span>
                  {p.current && (
                    <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-mono-data">CURRENT</span>
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-text-tertiary mb-3">{p.year}</p>
                <ul className="space-y-1.5 mb-3">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-text-secondary flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-primary/10 pt-3 space-y-1.5">
                  <p className="text-[10px] text-text-tertiary"><span className="text-primary/70">Driver:</span> {p.demandDriver}</p>
                  <p className="text-[10px] text-text-tertiary"><span className="text-primary/70">Type:</span> {p.demandType}</p>
                  <p className="text-[10px] font-mono-data text-primary/80">{p.expectedPrice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
