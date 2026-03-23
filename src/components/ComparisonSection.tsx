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
    <section className="relative py-14 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">— Comparison</span>
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
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-display font-semibold text-text-secondary w-[28%]">
                    Feature
                  </th>
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-display font-semibold w-[36%]"
                    style={{ color: '#6b7280', background: 'rgba(30,32,40,0.6)' }}>
                    Traditional Banking
                  </th>
                  <th className="text-left p-3 sm:p-5 text-xs sm:text-sm font-display font-bold w-[36%]"
                    style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.18), rgba(245,215,105,0.08))', color: 'hsl(45 75% 47%)', borderLeft: '1px solid rgba(201,162,39,0.2)', borderRight: '1px solid rgba(201,162,39,0.2)' }}>
                    ✦ dB7
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                    className={`group transition-colors duration-200 hover:bg-primary/[0.03] ${i < rows.length - 1 ? "border-b border-primary/5" : ""} ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <td className="p-3 sm:p-5 text-xs sm:text-sm font-semibold text-foreground">{row.feature}</td>
                    <td className="p-3 sm:p-5 text-xs sm:text-sm" style={{ background: 'rgba(20,22,30,0.3)' }}>
                      <span className="flex items-start gap-1.5 sm:gap-2 text-gray-500">
                        <XCircle size={14} className="text-red-500/70 shrink-0 mt-0.5" />
                        {row.trad}
                      </span>
                    </td>
                    <td className="p-3 sm:p-5 text-xs sm:text-sm"
                      style={{ background: 'rgba(201,162,39,0.04)', borderLeft: '1px solid rgba(201,162,39,0.12)', borderRight: '1px solid rgba(201,162,39,0.12)' }}>
                      <span className="flex items-start gap-1.5 sm:gap-2 text-white font-medium">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {row.db7}
                      </span>
                    </td>
                  </motion.tr>
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
