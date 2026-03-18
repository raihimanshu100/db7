import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Lock, EyeOff } from "lucide-react";

const problems = [
  {
    icon: Landmark,
    title: "Unlimited Printing",
    desc: "Governments print money at will, devaluing your savings through inflation.",
  },
  {
    icon: Lock,
    title: "Access Restrictions",
    desc: "Your money is controlled by institutions. Freezes, limits, and geo-restrictions are the norm.",
  },
  {
    icon: EyeOff,
    title: "Zero Transparency",
    desc: "You have no say in how the system works. No governance. No accountability.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">The Problem</span>
          <h2 className="section-heading mt-4">Traditional Banking is Broken</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 border-t-2 border-t-primary/30 transition-all duration-300 glass-card-hover gold-glow-hover"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p.icon size={32} className="text-primary mb-5" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-text-secondary leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
