import { motion } from "framer-motion";
import { Shield, Globe, Zap, Users, ChevronDown } from "lucide-react";

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
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        style={{ opacity: 0.5 }}
      >
        <source src="/hero_bg-compressed.mp4" type="video/mp4" />
      </video>

      {/* Fallback animated gradient (shows when video not loaded) */}
      <div className="absolute inset-0 z-0 hero-gradient-fallback" />

      {/* Dark overlay — sits on top of video */}
      <div className="absolute inset-0 bg-black/50 z-[2]" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern z-[2]" />

      {/* Radial gold glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[min(600px,80vw)] rounded-full z-[2]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(201,162,39,0.07) 0%, transparent 70%)' }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[3] mx-auto max-w-[1200px] px-4 sm:px-6 pt-20 sm:pt-32 pb-10 sm:pb-20 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center"
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

          <motion.p variants={item} className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary leading-[1.7] max-w-lg mx-auto lg:mx-0">
            A global, decentralised banking ecosystem with fixed supply, transparent rules, and user governance. No inflation. No restrictions. No middlemen.
          </motion.p>

          <motion.div variants={item} className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {/* Primary CTA with pulsing glow */}
            <motion.a
              href="#community"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gold-gradient text-primary-foreground px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-display font-semibold text-sm whitespace-nowrap hero-cta-glow"
            >
              Join Community
            </motion.a>
            {/* Secondary CTA with shimmer border */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative border border-primary/30 text-primary px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-display font-semibold text-sm hover:bg-primary/5 transition-colors whitespace-nowrap overflow-hidden shimmer-border"
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
            {/* Coin Logo centered in rings */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img
                src="/Coin_Logo.png"
                alt="dB7 Coin"
                className="w-24 h-24 object-contain drop-shadow-[0_0_30px_rgba(201,162,39,0.4)]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-[3] mx-auto max-w-[1200px] px-4 sm:px-6 w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-primary/20 bg-black/40 backdrop-blur-xl"
          style={{ boxShadow: '0 0 40px rgba(201,162,39,0.06), inset 0 1px 0 rgba(201,162,39,0.1)' }}>
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-[3] flex justify-center mt-8 mb-4 sm:mb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-primary/50 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-mono-data tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
