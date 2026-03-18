import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, ShoppingBag, Vote } from "lucide-react";

const apps = [
  {
    icon: Landmark,
    title: "Banking App",
    subtitle: "Your gateway to Decentralised Banking 24×7",
    features: ["Claim Airdrops", "Stake dB7", "Earn Monthly Rewards", "DAO Tier Progression"],
    note: "Staked coins unlock only upon maturity. No early unstaking.",
  },
  {
    icon: ShoppingBag,
    title: "Utility App",
    subtitle: "Real-world usage. Non-speculative.",
    features: ["Merchant Interactions", "Reward Credit Usage", "Ecosystem Participation"],
    note: "Blockchain complexity abstracted via Reward Credits.",
  },
  {
    icon: Vote,
    title: "DAO Governance App",
    subtitle: "Governance earned, not bought.",
    features: ["Proposal Submission", "Voting", "Board Meetings", "Monthly Events"],
    note: "Accessible only to eligible DAO members.",
  },
];

const EcosystemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Ecosystem</span>
          <h2 className="section-heading mt-4">The dB7 Ecosystem</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">Three apps, one ecosystem. Designed for banking, utility, and governance.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 glass-card-hover gold-glow-hover flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <app.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{app.title}</h3>
              <p className="text-text-secondary text-sm mb-5">{app.subtitle}</p>
              <ul className="space-y-2 mb-5 flex-1">
                {app.features.map((f) => (
                  <li key={f} className="text-sm text-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-tertiary italic border-t border-primary/10 pt-4">{app.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
