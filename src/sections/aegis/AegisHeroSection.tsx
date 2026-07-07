import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Sparkles } from 'lucide-react';

export default function AegisHeroSection() {
  const letters = 'AEGIS'.split('');

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-[72px]" style={{ background: 'linear-gradient(135deg, #6C2BD9 0%, #4C1F9E 100%)' }}>
      <div className="max-w-content-wide mx-auto px-6 pt-[clamp(80px,12vh,160px)] pb-[clamp(64px,8vh,120px)] min-h-[100dvh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-white/15 text-white backdrop-blur-sm">
                Cozanet Product
              </span>
            </motion.div>

            <motion.img
              src="/images/brand/aegis-logo.png"
              alt="AEGIS"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="w-16 h-16 object-contain mb-4"
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
              Financial Operating System
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-body-lg text-white/80 max-w-[520px] mt-6"
            >
              The complete financial infrastructure for individuals, businesses, and enterprises. Wallets, payments, AI-powered insights, portfolio management, and cross-chain operations — unified in one elegant system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow hover:-translate-y-0.5 transition-all">
                Get Early Access
              </button>
              <button className="inline-flex items-center px-7 py-3.5 rounded-button border border-white/30 text-white font-medium text-[0.9375rem] hover:border-white transition-all">
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right: Floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative h-[500px]"
          >
            <div className="relative w-[380px] h-[400px]">
              {/* Card 1 - Wallet */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-[200px] bg-white/90 backdrop-blur rounded-card-lg p-5 shadow-xl"
                style={{ transform: 'rotate(-5deg)' }}
              >
                <Wallet size={24} className="text-coz-purple mb-3" />
                <p className="text-[0.875rem] font-medium text-coz-black">Wallet</p>
                <p className="text-[1.25rem] font-semibold text-coz-black mt-1">$24,850.00</p>
                <p className="text-[0.75rem] text-coz-slate">USDC Balance</p>
              </motion.div>

              {/* Card 2 - Portfolio */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-[100px] right-0 w-[190px] bg-white/90 backdrop-blur rounded-card-lg p-5 shadow-xl"
                style={{ transform: 'rotate(3deg)' }}
              >
                <TrendingUp size={24} className="text-green-600 mb-3" />
                <p className="text-[0.875rem] font-medium text-coz-black">Portfolio</p>
                <p className="text-[1.125rem] font-semibold text-green-600 mt-1">+12.3%</p>
                <div className="flex gap-0.5 mt-2">
                  {[40, 55, 45, 70, 60, 80, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-coz-purple/20 rounded-sm" style={{ height: `${h * 0.3}px` }} />
                  ))}
                </div>
              </motion.div>

              {/* Card 3 - AI Assistant */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-[40px] left-[60px] w-[220px] bg-white/90 backdrop-blur rounded-card-lg p-5 shadow-xl"
                style={{ transform: 'rotate(2deg)' }}
              >
                <Sparkles size={24} className="text-coz-gold mb-3" />
                <p className="text-[0.875rem] font-medium text-coz-black">AI Assistant</p>
                <p className="text-[0.8125rem] text-coz-slate mt-2">Analyzing your portfolio...</p>
                <div className="flex gap-1 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-coz-gold animate-typing" />
                  <span className="w-1.5 h-1.5 rounded-full bg-coz-gold animate-typing" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-coz-gold animate-typing" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
