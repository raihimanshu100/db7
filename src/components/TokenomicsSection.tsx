import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Copy, Check } from "lucide-react";

const CONTRACT_ADDRESS = "0x39112379f7ee09999f9df0cdcedd51ebc1642b8c";

const allocations = [
  { label: "Ecosystem & Utilities", pct: 25, color: "#C9A227" },
  { label: "Liquidity Pool", pct: 20, color: "#D4A72C" },
  { label: "Team (Cliff + Vesting)", pct: 20, color: "#A07D1E" },
  { label: "DAO Treasury", pct: 10, color: "#8B6914" },
  { label: "Rewards Pool", pct: 10, color: "#F5D769" },
  { label: "Marketing", pct: 10, color: "#E8C84A" },
  { label: "Airdrop", pct: 5, color: "#FFE082" },
];

const DonutChart = ({ inView }: { inView: boolean }) => {
  const size = 280;
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulative = 0;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {allocations.map((alloc, i) => {
          const segLen = (alloc.pct / 100) * circumference;
          const offset = cumulative;
          cumulative += segLen;

          return (
            <motion.circle
              key={alloc.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={alloc.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segLen} ${circumference - segLen}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          );
        })}
      </svg>
      {/* Coin logo centered inside donut */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/Coin_Logo.png"
          alt="dB7 Coin"
          className="w-36 h-36 object-contain drop-shadow-[0_0_20px_rgba(201,162,39,0.3)]"
        />
      </div>
    </div>
  );
};

const Counter = ({ inView }: { inView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, 1_000_000_000, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [inView]);

  return (
    <span className="font-mono-data text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-gradient break-all">
      {display}
    </span>
  );
};

const TokenomicsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="relative py-14 md:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] rounded-full bg-primary/3 blur-[120px]" />
      <div ref={ref} className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Tokenomics</span>
          <h2 className="section-heading mt-4">Fixed Supply. Forever.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <Counter inView={inView} />
          <p className="mt-4 text-text-secondary">Total Supply — Fixed. Immutable. No minting. No burning.</p>

          {/* Contract Address */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-xs text-text-secondary font-mono-data uppercase tracking-wider">Contract:</span>
            <span className="font-mono-data text-sm text-foreground truncate max-w-[160px] sm:max-w-xs">{CONTRACT_ADDRESS}</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors shrink-0"
              title="Copy contract address"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              <span className="text-xs font-mono-data">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <DonutChart inView={inView} />

          <div className="space-y-3">
            {allocations.map((alloc, i) => (
              <motion.div
                key={alloc.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-4 h-4 rounded-sm shrink-0" style={{ backgroundColor: alloc.color }} />
                <span className="text-foreground text-sm flex-1">{alloc.label}</span>
                <span className="font-mono-data text-sm text-primary">{alloc.pct}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
