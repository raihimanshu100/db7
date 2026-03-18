import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "dB7 is not just a token — it's a financial movement. The fixed supply and DAO governance make it truly different.", author: "@CryptoVault_X" },
  { text: "Finally, a project that focuses on real utility over speculation. The reward credit system is genius.", author: "@DeFiMaven" },
  { text: "The transparency is refreshing. Ownership renounced, fixed supply, smart contract enforced. This is how crypto should be.", author: "@BlockchainBelief" },
  { text: "Staking rewards + DAO governance + merchant utility = the complete package. Bullish on dB7.", author: "@Web3Pioneer" },
  { text: "Borderless banking isn't just a tagline here — it's the actual architecture.", author: "@DecentralizeAll" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Community</span>
          <h2 className="section-heading mt-4">What The Community Says</h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex overflow-x-auto gap-6 px-6 pb-4 snap-x scrollbar-hide"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-8 min-w-[320px] max-w-[380px] snap-start shrink-0"
          >
            <Quote size={24} className="text-primary/40 mb-4" />
            <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/10" />
              <span className="font-mono-data text-xs text-primary">{t.author}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
