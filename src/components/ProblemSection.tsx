import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Lock, EyeOff, DollarSign, Clock, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Landmark,
    title: "Unlimited Printing",
    desc: "Governments print money at will, devaluing your savings through inflation.",
    accent: "border-t-red-500/60",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    glow: "rgba(239,68,68,0.12)",
  },
  {
    icon: Lock,
    title: "Access Restrictions",
    desc: "Your money is controlled by institutions. Freezes, limits, and geo-restrictions are the norm.",
    accent: "border-t-orange-500/60",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    glow: "rgba(249,115,22,0.12)",
  },
  {
    icon: EyeOff,
    title: "Zero Transparency",
    desc: "You have no say in how the system works. No governance. No accountability.",
    accent: "border-t-red-600/60",
    iconBg: "bg-red-600/10",
    iconColor: "text-red-400",
    glow: "rgba(220,38,38,0.12)",
  },
  {
    icon: DollarSign,
    title: "Hidden Fees",
    desc: "Banks charge maintenance fees, transfer fees, and penalties you never agreed to. Your money shrinks silently.",
    accent: "border-t-orange-400/60",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-300",
    glow: "rgba(251,146,60,0.12)",
  },
  {
    icon: Clock,
    title: "Slow Settlements",
    desc: "Cross-border transfers take days. Weekends and holidays freeze your funds. Time is money — banks waste both.",
    accent: "border-t-red-400/60",
    iconBg: "bg-red-400/10",
    iconColor: "text-red-300",
    glow: "rgba(248,113,113,0.12)",
  },
  {
    icon: TrendingDown,
    title: "Currency Manipulation",
    desc: "Central banks devalue currencies at will. Your purchasing power drops while the system protects itself.",
    accent: "border-t-red-500/60",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
    glow: "rgba(239,68,68,0.12)",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="section-divider mb-0" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">— The Problem</span>
          <h2 className="section-heading mt-4">Traditional Banking is Broken</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`problem-card group glass-card rounded-2xl p-8 border-t-2 ${p.accent} transition-all duration-300 cursor-default`}
              style={{ willChange: 'transform' }}
              whileHover={{ boxShadow: `0 20px 60px ${p.glow}` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mb-6`}>
                <p.icon size={28} className={p.iconColor} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-text-secondary leading-[1.7]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
