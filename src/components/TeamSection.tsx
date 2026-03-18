import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", initials: "AM" },
  { name: "Sarah Chen", role: "CTO", initials: "SC" },
  { name: "James Wilson", role: "Head of Product", initials: "JW" },
  { name: "Priya Sharma", role: "Lead Blockchain Developer", initials: "PS" },
  { name: "Michael Torres", role: "Head of Compliance", initials: "MT" },
  { name: "Aisha Khan", role: "Community Lead", initials: "AK" },
];

const TeamSection = () => {
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
          <span className="section-label">Our Team</span>
          <h2 className="section-heading mt-4">The People Behind dB7</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 glass-card-hover gold-glow-hover"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
                <span className="font-display text-lg font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground">{member.name}</h3>
              <p className="text-xs text-text-secondary mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-text-tertiary mt-8 italic">Full team reveal coming soon</p>
      </div>
    </section>
  );
};

export default TeamSection;
