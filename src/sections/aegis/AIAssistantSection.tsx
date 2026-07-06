import { motion } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import { Check } from 'lucide-react';

const features = [
  "What's my best performing asset this month?",
  "How can I optimize my tax liability?",
  "Show me spending patterns across categories",
  "Alert me when ETH drops below $2,000",
];

export default function AIAssistantSection() {
  return (
    <section className="py-section" style={{ background: '#1A0A2E' }}>
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <span className="text-label text-coz-purple-light uppercase">AI-Powered</span>
              <div className="w-10 h-0.5 bg-coz-purple-light mt-4 mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-h2 text-white">Your personal financial analyst.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-white/70 mt-4">
                Ask questions in natural language. Get insights on your portfolio, spending patterns, and market trends. The AI assistant learns your preferences and delivers increasingly relevant recommendations over time.
              </p>
            </ScrollReveal>
            <div className="mt-8 space-y-4">
              {features.map((f, i) => (
                <ScrollReveal key={f} delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-coz-purple-light shrink-0 mt-0.5" />
                    <span className="text-[1rem] text-white/90">{f}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Chat Mockup */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="bg-[#0A0A0E] border border-white/[0.08] rounded-card-lg overflow-hidden max-w-[400px] mx-auto">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-coz-purple" />
                <span className="text-[0.875rem] font-medium text-white">AEGIS Assistant</span>
              </div>
              <div className="p-5 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="bg-coz-purple text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] text-[0.875rem]">
                    How's my portfolio doing?
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/[0.08] text-white rounded-2xl rounded-bl-sm px-4 py-3 max-w-[90%] text-[0.875rem] leading-relaxed">
                    Your portfolio is up 12.3% this month. Your strongest performer is SOL (+18.2%). I've noticed you're overweight in tech tokens — would you like me to suggest a rebalancing strategy?
                  </div>
                </motion.div>
                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-1.5 px-4 py-3"
                >
                  <span className="w-2 h-2 rounded-full bg-coz-slate animate-typing" />
                  <span className="w-2 h-2 rounded-full bg-coz-slate animate-typing" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 rounded-full bg-coz-slate animate-typing" style={{ animationDelay: '0.4s' }} />
                </motion.div>
              </div>
              <div className="px-5 py-3 border-t border-white/[0.08]">
                <div className="bg-white/[0.05] rounded-lg px-4 py-2.5 text-[0.8125rem] text-coz-slate">
                  Ask anything about your finances...
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
