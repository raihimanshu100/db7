import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const navLinks = ["Home", "About", "Ecosystem", "Tokenomics", "Roadmap", "DAO", "FAQ"];

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Block */}
      <section id="community" className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        </div>
        <div ref={ref} className="relative mx-auto max-w-[800px] px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Join the Decentralised<br />Banking Revolution
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Borderless Banking. Global Rules. User Governance.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gold-gradient text-primary-foreground px-10 py-4 rounded-xl font-display font-semibold text-base"
            >
              Join Our Community
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-center md:text-left">
            {/* Logo */}
            <div>
              <span className="font-display text-xl font-bold text-gold-gradient">dB7</span>
              <p className="text-xs text-text-secondary mt-1">Decentralised Banking 24×7</p>
              <p className="text-xs text-text-tertiary mt-2">© 2026 dB7. All rights reserved.</p>
            </div>

            {/* Nav */}
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs text-text-secondary hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex justify-center md:justify-end gap-4">
              {["X", "TG", "IG", "DC"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-xs font-mono-data text-text-secondary hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-[11px] text-text-tertiary leading-relaxed text-center max-w-4xl mx-auto">
            dB7 is a utility token designed for participation in a decentralised digital banking ecosystem. It is not legal tender, equity, a security, or a promise of returns. Usage may vary by jurisdiction and users are responsible for regulatory compliance.
          </p>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
