import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Coins, Store, RefreshCw, ArrowRight } from "lucide-react";

const features = [
  { icon: Gift, title: "Gift Card Redemptions", desc: "Amazon, Uber, and more — redeem rewards at top brands worldwide." },
  { icon: Coins, title: "Digital Gold Access", desc: "Gold-backed digital assets available directly through the ecosystem." },
  { icon: Store, title: "Local Merchant Discovery", desc: "Find participating merchants near you. Spend your rewards locally." },
  { icon: RefreshCw, title: "Merchant-Funded Rewards", desc: "Earn as you spend. Merchants fund the rewards loop, not the protocol." },
];

const flowSteps = [
  { label: "Stake dB7", step: "01" },
  { label: "Earn Rewards", step: "02" },
  { label: "Convert to Credits", step: "03" },
  { label: "Redeem at Merchants", step: "04" },
];

const MerchantSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-8 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">— Real-World Utility</span>
          <h2 className="section-heading mt-4">Where Crypto Meets Commerce</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-[1.7]">
            Merchants act as real-world utility endpoints. Users earn and redeem Reward Credits — a compliance-safe abstraction layer between blockchain and everyday spending.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(201,162,39,0.12)' }}
              className="animated-border-card glass-card rounded-2xl p-7 transition-all duration-300 flex items-start gap-5"
              style={{ willChange: 'transform' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/15">
                <f.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-[1.7]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 glass-card rounded-2xl p-6 md:p-10"
        >
          <p className="text-center text-xs font-mono-data text-primary uppercase tracking-widest mb-8">How It Works</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col sm:flex-row items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-2">
                    <span className="font-mono-data text-xs text-primary font-bold">{step.step}</span>
                  </div>
                  <span className="font-display text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap px-3 py-1.5 rounded-lg bg-primary/8 border border-primary/15">
                    {step.label}
                  </span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex items-center justify-center sm:mx-3 my-3 sm:my-0">
                    <div className="sm:hidden h-6 w-px bg-gradient-to-b from-primary/50 to-primary/20" />
                    <ArrowRight size={18} className="hidden sm:block text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantSection;
