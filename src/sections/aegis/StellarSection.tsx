import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';
import { Zap, Coins } from 'lucide-react';

export default function StellarSection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Expanding AEGIS to Stellar */}
        <SectionHeader
          label="Expansion"
          headline="Expanding AEGIS to Stellar."
          description="AEGIS is being expanded to support Stellar as an additional settlement and payment rail, with an initial focus on stablecoin and payment infrastructure."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-[800px]">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-coz-border rounded-card p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-coz-purple-surface flex items-center justify-center mb-5 text-coz-purple">
                <Zap size={22} />
              </div>
              <h4 className="text-h4 text-coz-black mb-2">Preserving existing architecture</h4>
              <p className="text-[1rem] text-coz-slate leading-relaxed">
                With Stellar integration, AEGIS will be able to route supported settlement flows through
                Stellar while preserving its existing identity, wallet, authorization, transaction
                and smart-routing architecture.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-white border border-coz-border rounded-card p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-coz-purple-surface flex items-center justify-center mb-5 text-coz-purple">
                <Coins size={22} />
              </div>
              <h4 className="text-h4 text-coz-black mb-2">Stablecoin and payment focus</h4>
              <p className="text-[1rem] text-coz-slate leading-relaxed">
                The initial integration focuses on stablecoin and payment settlement use cases,
                enabling AEGIS to expand its multi-rail capabilities for digital-asset transfers
                and payment infrastructure.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Integration in progress notice */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 max-w-[800px]">
            <div className="flex items-center gap-3 px-5 py-4 rounded-card bg-coz-gold-light border border-coz-gold/30">
              <span className="w-2 h-2 rounded-full bg-coz-gold animate-pulse-dot shrink-0" />
              <p className="text-[0.9375rem] text-coz-black leading-relaxed">
                <span className="font-medium">Integration in progress.</span>{' '}
                Stellar is not yet live on AEGIS. This is a planned and in-development integration.
                No Stellar transactions are currently available through AEGIS.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Why Stellar? */}
        <div className="mt-20">
          <SectionHeader
            label="Why Stellar?"
            headline="An additional settlement rail."
            description="Stellar provides infrastructure designed for fast, low-cost digital-asset and payment settlement. AEGIS is evaluating and integrating Stellar as an additional settlement rail for stablecoin and payment use cases."
          />
        </div>

        {/* Roadmap status summary */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="max-w-[800px] mx-auto">
            <div className="space-y-4">
              {/* Current */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 rounded-card bg-white border border-coz-border">
                <span className="text-label text-coz-slate uppercase shrink-0 sm:w-28">Current</span>
                <p className="text-[1rem] text-coz-black">
                  <span className="font-medium">BNB Smart Chain</span> — Live production settlement environment.
                </p>
              </div>
              {/* Building */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 rounded-card bg-coz-gold-light/50 border border-coz-gold/30">
                <span className="text-label text-coz-gold-dark uppercase shrink-0 sm:w-28">Building</span>
                <p className="text-[1rem] text-coz-black">
                  <span className="font-medium">Stellar</span> — Integration in progress, focused on stablecoin and payment settlement.
                </p>
              </div>
              {/* Future */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 rounded-card bg-coz-surface border border-coz-border">
                <span className="text-label text-coz-slate uppercase shrink-0 sm:w-28">Future</span>
                <p className="text-[1rem] text-coz-slate">
                  <span className="font-medium text-coz-black">Additional payment and settlement rails</span> — Planned.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
