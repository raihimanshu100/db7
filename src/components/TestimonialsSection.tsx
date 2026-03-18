import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { text: "dB7 is not just a token — it's a financial movement. The fixed supply and DAO governance make it truly different.", author: "@CryptoVault_X" },
  { text: "Finally, a project that focuses on real utility over speculation. The reward credit system is genius.", author: "@DeFiMaven" },
  { text: "The transparency is refreshing. Ownership renounced, fixed supply, smart contract enforced. This is how crypto should be.", author: "@BlockchainBelief" },
  { text: "Staking rewards + DAO governance + merchant utility = the complete package. Bullish on dB7.", author: "@Web3Pioneer" },
  { text: "Borderless banking isn't just a tagline here — it's the actual architecture.", author: "@DecentralizeAll" },
];

const allTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">— Community</span>
          <h2 className="section-heading mt-4">What The Community Says</h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="overflow-hidden"
      >
        <div className="animate-testimonial-scroll gap-6 px-4" style={{ display: 'flex', flexWrap: 'nowrap' }}>
          {allTestimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 sm:p-8 shrink-0 relative"
              style={{ width: '340px', minWidth: '340px' }}
            >
              <span className="absolute top-3 left-5 font-display text-7xl leading-none text-primary/10 select-none pointer-events-none">"</span>
              <div className="relative z-10 pt-4">
                <p className="text-foreground text-sm leading-[1.7] mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-primary/10 pt-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 shrink-0" />
                  <span className="font-mono-data text-xs text-primary">{t.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
