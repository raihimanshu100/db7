import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Users, Zap } from "lucide-react";

const AirdropSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="airdrop" className="relative py-14 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">— Airdrop</span>
          <h2 className="section-heading mt-4">Free dB7. No Purchase Required.</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-[1.7]">
            5% of the total supply reserved for community distribution. One-time. Instant. No strings attached.
          </p>
        </motion.div>

        {/* Top stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { label: "Total Airdrop", value: "5% Supply", icon: Gift },
            { label: "No Purchase", value: "Required", icon: Zap },
            { label: "Distribution", value: "Instant", icon: Users },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl px-6 py-4 flex items-center gap-4 border border-primary/15"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <stat.icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-mono-data text-sm font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-text-secondary">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Base Airdrop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(201,162,39,0.12)" }}
            className="glass-card rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center border border-primary/25">
                <Gift size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Base Airdrop</h3>
                <span className="text-xs font-mono-data text-primary bg-primary/10 px-2 py-0.5 rounded-full">4% of Supply</span>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "50 dB7 claim on wallet connect",
                "Onboarding + 5 dB7 per social task (FB, Insta, etc.)",
                "Instant distribution",
                "No vesting period",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary leading-[1.6]">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Referral Airdrop */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(201,162,39,0.12)" }}
            className="glass-card rounded-2xl p-8 border border-primary/20 bg-gradient-to-br from-primary/8 to-transparent"
            style={{ willChange: "transform" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center border border-primary/25">
                <Users size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Referral Airdrop</h3>
                <span className="text-xs font-mono-data text-primary bg-primary/10 px-2 py-0.5 rounded-full">1% of Supply</span>
              </div>
            </div>

            {/* Referral levels */}
            <div className="space-y-3 mb-4">
              {[
                { level: "L1", reward: "15 dB7 per referral" },
                { level: "L2", reward: "10 dB7 per referral" },
                { level: "L3", reward: "7 dB7 per referral" },
              ].map((lvl) => (
                <div key={lvl.level} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="font-mono-data text-xs text-primary font-semibold">{lvl.level}</span>
                  <span className="text-sm text-foreground">{lvl.reward}</span>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {["Max 3 referral levels", "Max 20 L1 referrals per user"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AirdropSection;
