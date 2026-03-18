import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = ["BNB Chain", "PancakeSwap", "CoinGecko", "CoinMarketCap", "DexTools", "DexScreener"];

const PartnersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Partners & Listings</span>
          <h2 className="section-heading mt-4">Trusted Ecosystem</h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-8 w-max">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="glass-card rounded-xl px-8 py-4 flex items-center justify-center min-w-[160px]"
            >
              <span className="font-mono-data text-sm text-text-secondary">{p}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-text-tertiary mt-8 italic">More partnerships coming soon</p>
    </section>
  );
};

export default PartnersSection;
