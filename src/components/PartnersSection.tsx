import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = ["BNB Chain", "PancakeSwap", "CoinGecko", "CoinMarketCap", "DexTools", "DexScreener"];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">— Partners & Listings</span>
          <h2 className="section-heading mt-4">Trusted Ecosystem</h2>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="overflow-hidden"
      >
        <div className="animate-marquee-infinite gap-6 px-4">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="glass-card rounded-xl px-8 py-4 flex items-center justify-center min-w-[160px] shrink-0 cursor-default group transition-all duration-300 hover:border-primary/30"
            >
              <span className="font-mono-data text-sm text-text-secondary group-hover:text-primary transition-colors duration-300">
                {p}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="text-center text-sm text-text-tertiary mt-8 italic">More partnerships coming soon</p>
    </section>
  );
};

export default PartnersSection;
