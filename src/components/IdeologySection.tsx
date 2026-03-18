import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, Vote } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Global",
    desc: "One currency. No borders. Accessible to anyone, anywhere, 24×7.",
  },
  {
    icon: Search,
    title: "Transparent",
    desc: "Fixed supply. On-chain rules. Smart contract enforcement. No hidden agendas.",
  },
  {
    icon: Vote,
    title: "User-Governed",
    desc: "Governance power earned through commitment. DAO tiers. Community decisions.",
  },
];

const IdeologySection = () => {
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
          <span className="section-label">Our Ideology</span>
          <h2 className="section-heading mt-4">Money Should Follow Rules, Not Rulers</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 glass-card-hover gold-glow-hover text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <p.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-text-secondary leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 py-12 text-center text-2xl md:text-3xl italic text-primary leading-relaxed max-w-4xl mx-auto font-display font-medium"
        >
          "Decentralised Banking 24×7 is not about replacing banks. It is about replacing who controls banking."
        </motion.blockquote>
      </div>
    </section>
  );
};

export default IdeologySection;
