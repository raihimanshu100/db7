import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Landmark, ShoppingBag, Vote } from "lucide-react";

const apps = [
  {
    icon: Landmark,
    title: "Banking App",
    subtitle: "Your gateway to Decentralised Banking 24×7",
    features: ["Claim Airdrops", "Stake dB7", "Earn Monthly Rewards", "DAO Tier Progression"],
    note: "Staked coins unlock only upon maturity. No early unstaking.",
    color: "from-amber-500/10 to-transparent",
    borderColor: "border-amber-500/20",
    activeBorder: "border-amber-500/50",
    appUrl: "https://banking.db7coin.com",
  },
  {
    icon: ShoppingBag,
    title: "Utility App",
    subtitle: "Real-world usage. Non-speculative.",
    features: ["Merchant Interactions", "Reward Credit Usage", "Ecosystem Participation"],
    note: "Blockchain complexity abstracted via Reward Credits.",
    color: "from-primary/10 to-transparent",
    borderColor: "border-primary/20",
    activeBorder: "border-primary/50",
    appUrl: null,
  },
  {
    icon: Vote,
    title: "DAO Governance App",
    subtitle: "Governance earned, not bought.",
    features: ["Proposal Submission", "Voting", "Board Meetings", "Monthly Events"],
    note: "Accessible only to eligible DAO members.",
    color: "from-yellow-400/10 to-transparent",
    borderColor: "border-yellow-400/20",
    activeBorder: "border-yellow-400/50",
    appUrl: null,
  },
];

const EcosystemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="ecosystem" className="relative py-14 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">— Ecosystem</span>
          <h2 className="section-heading mt-4">The dB7 Ecosystem</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-[1.7]">Three apps, one ecosystem. Designed for banking, utility, and governance.</p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {apps.map((app, i) => (
            <button
              key={app.title}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-display text-sm font-semibold transition-all duration-300 border ${
                activeTab === i
                  ? `bg-primary/15 text-primary ${app.activeBorder}`
                  : 'text-text-secondary border-primary/10 hover:border-primary/25 hover:text-foreground'
              }`}
            >
              <app.icon size={15} />
              {app.title}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`animated-border-card glass-card rounded-2xl p-8 sm:p-10 bg-gradient-to-br ${apps[activeTab].color} border ${apps[activeTab].borderColor}`}
        >
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              {(() => { const Icon = apps[activeTab].icon; return <Icon size={30} className="text-primary" />; })()}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">{apps[activeTab].title}</h3>
              <p className="text-text-secondary mb-6 leading-[1.7]">{apps[activeTab].subtitle}</p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {apps[activeTab].features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-tertiary italic border-t border-primary/10 pt-4">{apps[activeTab].note}</p>
              {apps[activeTab].appUrl && (
                <div className="mt-5">
                  <a
                    href={apps[activeTab].appUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded-lg font-display font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Login / Sign Up →
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* All 3 cards on desktop as mini previews */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mt-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              onClick={() => setActiveTab(i)}
              whileHover={{ y: -4 }}
              className={`animated-border-card glass-card rounded-xl p-5 cursor-pointer transition-all duration-300 border ${
                activeTab === i ? `${app.activeBorder} bg-primary/5` : 'border-primary/8 hover:border-primary/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <app.icon size={18} className="text-primary" />
                <h4 className="font-display text-sm font-semibold text-foreground">{app.title}</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{app.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
