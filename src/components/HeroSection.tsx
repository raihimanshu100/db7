import { motion } from "framer-motion";
import { Shield, Globe, Zap, Users } from "lucide-react";

const stats = [
  { icon: Zap, label: "Fixed Supply", value: "1B" },
  { icon: Globe, label: "BNB Smart Chain", value: "BSC" },
  { icon: Shield, label: "Ownership", value: "Renounced" },
  { icon: Users, label: "Governance", value: "DAO" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 sm:pt-32 pb-10 sm:pb-20 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center"
      >
        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono-data text-primary tracking-wider uppercase">BNB Smart Chain · Fixed Supply</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-[-0.02em] leading-[1.05]">
            <span className="text-text-secondary">The Future of</span>
            <br />
            <span className="text-gold-gradient">Borderless Banking</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
            A global, decentralised banking ecosystem with fixed supply, transparent rules, and user governance. No inflation. No restrictions. No middlemen.
          </motion.p>

          <motion.div variants={item} className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <motion.a
              href="#community"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold-gradient text-primary-foreground px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-display font-semibold text-sm whitespace-nowrap"
            >
              Join Community
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-primary/30 text-primary px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-display font-semibold text-sm hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              Whitepaper
            </motion.a>
          </motion.div>
        </div>

        {/* Visual — Golden Rings */}
        <motion.div variants={item} className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[400px] h-[400px]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/20 animate-ring-pulse"
                style={{
                  inset: `${i * 40}px`,
                  animationDelay: `${i * 0.4}s`,
                  background: i === 0 ? 'conic-gradient(from 0deg, transparent, hsl(45 75% 47% / 0.1), transparent, hsl(48 88% 68% / 0.05), transparent)' : 'none',
                }}
              />
            ))}
            <div className="absolute inset-[80px] rounded-full bg-primary/5 blur-xl" />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative mx-auto max-w-[1200px] px-4 sm:px-6 w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 glass-card rounded-2xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center lg:justify-start gap-3 p-4 sm:p-5 md:p-6 ${
                i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-primary/10" : ""
              } ${i % 2 === 0 && i < 2 ? "border-r md:border-r border-primary/10" : ""}`}
            >
              <stat.icon size={20} className="text-primary shrink-0" />
              <div>
                <div className="font-mono-data text-sm font-semibold text-foreground">{stat.value}</div>
                <div className="text-xs text-text-secondary">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
