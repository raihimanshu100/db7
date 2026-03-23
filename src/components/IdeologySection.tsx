import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, Vote } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Global",
    desc: "One currency. No borders. Accessible to anyone, anywhere, 24×7.",
    gradient: "from-primary/8 to-primary/3",
    iconBg: "bg-primary/10",
  },
  {
    icon: Search,
    title: "Transparent",
    desc: "Fixed supply. On-chain rules. Smart contract enforcement. No hidden agendas.",
    gradient: "from-primary/12 to-primary/5",
    iconBg: "bg-primary/15",
  },
  {
    icon: Vote,
    title: "User-Governed",
    desc: "Governance power earned through commitment. DAO tiers. Community decisions.",
    gradient: "from-primary/18 to-primary/8",
    iconBg: "bg-primary/20",
  },
];

const IdeologySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">— Our Ideology</span>
          <h2 className="section-heading mt-4">Money Should Follow Rules, Not Rulers</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(201,162,39,0.15)' }}
              className={`group glass-card rounded-2xl p-8 transition-all duration-300 text-center flex flex-col items-center bg-gradient-to-b ${p.gradient}`}
              style={{ willChange: 'transform' }}
            >
              <div className={`w-20 h-20 mx-auto rounded-3xl ${p.iconBg} flex items-center justify-center mb-6 border border-primary/15 group-hover:border-primary/35 transition-colors`}>
                <p.icon size={36} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-text-secondary leading-[1.7] text-sm sm:text-base">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorated blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 relative mx-auto max-w-3xl"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-10" />
          <div className="text-center px-4 sm:px-8 relative">
            <span className="absolute -top-4 left-4 sm:left-8 font-display text-6xl sm:text-8xl text-primary/15 leading-none select-none">«</span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl italic text-primary leading-relaxed font-display font-medium">
              "Decentralised Banking 24×7 is not about replacing banks. It is about replacing who controls banking."
            </blockquote>
            <span className="absolute -bottom-6 right-4 sm:right-8 font-display text-6xl sm:text-8xl text-primary/15 leading-none select-none">»</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default IdeologySection;
