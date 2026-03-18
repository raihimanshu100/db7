import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const rows = [
  { feature: "Supply Control", trad: "Unlimited printing", db7: "Fixed 1B forever" },
  { feature: "Access", trad: "Geo-restricted, business hours", db7: "Global, 24×7" },
  { feature: "Transparency", trad: "Opaque policies", db7: "On-chain, verifiable" },
  { feature: "Governance", trad: "Zero user input", db7: "DAO-based, tiered" },
  { feature: "Inflation Risk", trad: "High", db7: "None (fixed supply)" },
  { feature: "Ownership", trad: "Institutional control", db7: "User ownership" },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Comparison</span>
          <h2 className="section-heading mt-4">A Better Financial System</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-primary/10">
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-display font-semibold text-text-secondary">Feature</th>
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-display font-semibold text-text-secondary">Traditional</th>
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-display font-semibold text-primary bg-primary/5 border-x border-primary/10">dB7</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={i < rows.length - 1 ? "border-b border-primary/5" : ""}>
                    <td className="p-3 sm:p-5 text-xs sm:text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="p-3 sm:p-5 text-xs sm:text-sm text-text-secondary">
                      <span className="flex items-start gap-1.5 sm:gap-2">
                        <XCircle size={14} className="text-text-tertiary shrink-0 mt-0.5" />
                        {row.trad}
                      </span>
                    </td>
                    <td className="p-3 sm:p-5 text-xs sm:text-sm text-foreground bg-primary/5 border-x border-primary/10">
                      <span className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {row.db7}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
