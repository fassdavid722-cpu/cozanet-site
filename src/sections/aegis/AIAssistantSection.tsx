import ScrollReveal from '../../components/ScrollReveal';
import { Check } from 'lucide-react';

const capabilities = [
  'Interact with authorized financial operations through Cozanet OS/AI',
  'Natural language queries for transaction status and settlement data',
  'Automated workflows for payment and settlement orchestration',
  'AI-assisted monitoring of authorized financial activity',
];

export default function AIAssistantSection() {
  return (
    <section className="py-section" style={{ background: '#1A0A2E' }}>
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <span className="text-label text-coz-purple-light uppercase">AI Automation</span>
              <div className="w-10 h-0.5 bg-coz-purple-light mt-4 mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-h2 text-white">Financial operations, automated.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-body-lg text-white/70 mt-4">
                AEGIS allows Cozanet OS and AI systems to interact with authorized financial
                operations — from transaction status queries to settlement orchestration. This
                is part of the AEGIS core capabilities layer, not a separate product.
              </p>
            </ScrollReveal>
            <div className="mt-8 space-y-4">
              {capabilities.map((c, i) => (
                <ScrollReveal key={c} delay={0.3 + i * 0.1}>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-coz-purple-light shrink-0 mt-0.5" />
                    <span className="text-[1rem] text-white/90">{c}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Interface mockup */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="bg-[#0A0A0E] border border-white/[0.08] rounded-card-lg overflow-hidden max-w-[400px] mx-auto">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-coz-purple" />
                <span className="text-[0.875rem] font-medium text-white">AEGIS — AI Interface</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-coz-purple text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] text-[0.875rem]">
                    What's the settlement status of the latest batch?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/[0.08] text-white rounded-2xl rounded-bl-sm px-4 py-3 max-w-[90%] text-[0.875rem] leading-relaxed">
                    The latest settlement batch on BNB Smart Chain completed successfully. 3 transactions settled, 0 pending. Total value: $12,450 USDC.
                  </div>
                </div>
                <div className="flex gap-1.5 px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-coz-slate animate-typing" />
                  <span className="w-2 h-2 rounded-full bg-coz-slate animate-typing" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 rounded-full bg-coz-slate animate-typing" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
              <div className="px-5 py-3 border-t border-white/[0.08]">
                <div className="bg-white/[0.05] rounded-lg px-4 py-2.5 text-[0.8125rem] text-coz-slate">
                  Query authorized financial operations...
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
