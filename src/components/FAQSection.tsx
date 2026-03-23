import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is dB7?", a: "dB7 (Decentralised Banking 24×7) is a fixed-supply utility token on the BNB Smart Chain designed to power a global, decentralised banking ecosystem with user governance, real-world utility, and transparent rules." },
  { q: "Is dB7 an investment product?", a: "No. dB7 is a utility token designed for ecosystem participation. It does not promise returns, profits, or financial gains. It is not equity, a security, or legal tender." },
  { q: "What is the total supply?", a: "1,000,000,000 coins — fixed forever. The supply cannot be printed, altered, or manipulated. Ownership is permanently renounced." },
  { q: "How do I earn rewards?", a: "Stake dB7 through the Banking App. Rewards are credited monthly. Staked coins unlock only upon maturity — no early unstaking." },
  { q: "What are Reward Credits?", a: "Reward Credits are internal, non-cash units that abstract blockchain complexity. They enable real-world utility like gift card redemptions and merchant rewards without requiring users to handle crypto directly." },
  { q: "What is the DAO?", a: "The DAO (Decentralised Autonomous Organisation) gives eligible members governance power — including proposal submission, voting, and strategic decision-making. Governance tiers: Associate, Director, Sovereign." },
  { q: "Which blockchain is dB7 on?", a: "BNB Smart Chain (BSC). The smart contract is non-upgradeable and ownership is renounced." },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-primary/10 transition-all duration-300 ${open ? "border-l-2 border-l-primary pl-4" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-display text-sm sm:text-base font-medium text-foreground leading-relaxed">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full border border-primary/25 flex items-center justify-center"
        >
          <Plus size={14} className="text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-text-secondary leading-[1.7]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-14 md:py-20">
      <div className="section-divider" />
      <div ref={ref} className="mx-auto max-w-[800px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">— FAQ</span>
          <h2 className="section-heading mt-4">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-2xl px-6 sm:px-8 py-2"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} {...faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
