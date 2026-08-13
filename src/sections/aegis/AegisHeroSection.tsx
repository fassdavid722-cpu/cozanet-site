import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function AegisHeroSection() {
  const letters = 'AEGIS'.split('');

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-[72px]" style={{ background: 'linear-gradient(135deg, #6C2BD9 0%, #4C1F9E 100%)' }}>
      <div className="max-w-content-wide mx-auto px-6 pt-[clamp(80px,12vh,160px)] pb-[clamp(64px,8vh,120px)] min-h-[100dvh] flex items-center">
        <div className="w-full max-w-[760px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-white/15 text-white backdrop-blur-sm">
              AEGIS by Cozanet
            </span>
          </motion.div>

          <motion.img
            src="/brand-assets/aegis-shield.svg"
            alt="AEGIS"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="w-28 h-28 object-contain mb-4"
          />

          <h1 className="text-display text-white mb-2">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-h3 text-white/70 mt-2"
          >
            Programmable Financial Infrastructure
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body-lg text-white/80 max-w-[560px] mt-6"
          >
            Cozanet's smart-routing and settlement layer for digital assets, payments and financial applications.
            AEGIS combines identity, wallet infrastructure, transaction authorization, smart routing, settlement
            orchestration and payment infrastructure into a unified financial operating layer.
          </motion.p>

          {/* Status badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-white/10 text-white text-[0.8125rem] backdrop-blur-sm border border-white/15">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              BNB Smart Chain — Live
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-white/10 text-white text-[0.8125rem] backdrop-blur-sm border border-white/15">
              <span className="w-2 h-2 rounded-full bg-coz-gold animate-pulse-dot" />
              Stellar — Integration in progress
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-white/10 text-white/70 text-[0.8125rem] backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              Additional Rails — Planned
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="https://aegis.cozanet.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow hover:-translate-y-0.5 transition-all"
            >
              Open AEGIS
              <ArrowRight size={18} />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button border border-white/30 text-white font-medium text-[0.9375rem] hover:border-white transition-all"
            >
              <BookOpen size={18} />
              Explore Architecture
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
