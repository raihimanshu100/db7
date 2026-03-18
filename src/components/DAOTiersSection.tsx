import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Associate",
    desc: "Entry-level governance eligibility",
    accent: "from-amber-700/40 to-amber-900/20",
    border: "border-amber-700/30",
    height: "h-40",
  },
  {
    name: "Director",
    desc: "Proposal rights + higher voting influence",
    accent: "from-slate-400/30 to-slate-600/10",
    border: "border-slate-400/30",
    height: "h-52",
  },
  {
    name: "Sovereign",
    desc: "Strategic ecosystem governance authority",
    accent: "from-primary/30 to-primary/5",
    border: "border-primary/40",
    height: "h-64",
  },
];

const DAOTiersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dao" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Governance</span>
          <h2 className="section-heading mt-4">Earn Your Governance Power</h2>
        </motion.div>

        <div className="flex items-end justify-center gap-6 md:gap-10">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`glass-card rounded-2xl p-6 md:p-8 w-full max-w-[260px] ${tier.height} ${tier.border} flex flex-col justify-end text-center transition-all duration-300 glass-card-hover`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${tier.accent} -z-10`} />
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-sm text-text-secondary">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connection line */}
        <div className="mt-8 mx-auto max-w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </section>
  );
};

export default DAOTiersSection;
