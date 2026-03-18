import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gift, Coins, Store, RefreshCw, ArrowRight } from "lucide-react";

const features = [
  { icon: Gift, title: "Gift Card Redemptions", desc: "Amazon, Uber, and more" },
  { icon: Coins, title: "Digital Gold Access", desc: "Gold-backed digital assets" },
  { icon: Store, title: "Local Merchant Discovery", desc: "Find participating merchants" },
  { icon: RefreshCw, title: "Merchant-Funded Rewards", desc: "Earn as you spend" },
];

const flowSteps = ["Stake dB7", "Earn Rewards", "Convert to Reward Credits", "Redeem at Merchants"];

const MerchantSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="section-label">Real-World Utility</span>
          <h2 className="section-heading mt-4">Where Crypto Meets Commerce</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Merchants act as real-world utility endpoints. Users earn and redeem Reward Credits — a compliance-safe abstraction layer between blockchain and everyday spending.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 glass-card-hover"
            >
              <f.icon size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-text-secondary">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="font-mono-data text-sm text-foreground bg-primary/10 px-4 py-2 rounded-lg">{step}</span>
                {i < flowSteps.length - 1 && <ArrowRight size={16} className="text-primary hidden sm:block" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantSection;
