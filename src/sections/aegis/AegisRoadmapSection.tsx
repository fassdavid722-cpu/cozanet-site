import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';
import { settlementRails } from '../../data/settlementRails';

export default function AegisRoadmapSection() {
  return (
    <section className="bg-coz-black py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Development Roadmap"
          headline="Multi-rail financial infrastructure."
          description="AEGIS is being developed as a multi-rail financial infrastructure layer. BNB Smart Chain represents the current production environment. Stellar integration is part of the next stage of development, focused initially on stablecoin and payment settlement."
          dark
        />

        {/* Settlement rails status table */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card-lg overflow-hidden">
              {settlementRails.map((rail, i) => (
                <div
                  key={rail.name}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 ${
                    i < settlementRails.length - 1 ? 'border-b border-coz-charcoal-light' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[1rem] font-medium text-white">{rail.name}</span>
                      <span className="text-[0.8125rem] text-coz-slate mt-0.5">{rail.description}</span>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-[0.75rem] font-medium shrink-0 ${
                      rail.status === 'live'
                        ? 'bg-green-50 text-green-700'
                        : rail.status === 'integration_in_progress'
                        ? 'bg-coz-gold-light text-coz-gold-dark'
                        : 'bg-coz-charcoal-light text-coz-slate-light'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        rail.status === 'live'
                          ? 'bg-green-400'
                          : rail.status === 'integration_in_progress'
                          ? 'bg-coz-gold animate-pulse-dot'
                          : 'bg-coz-slate'
                      }`}
                    />
                    {rail.statusLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Hierarchy reminder */}
        <ScrollReveal delay={0.3} className="mt-12">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="flex flex-col items-center gap-2 text-coz-slate">
              <span className="text-[0.9375rem] font-medium text-white">Cozanet</span>
              <span className="text-coz-slate-light text-[0.75rem]">↓</span>
              <span className="text-[0.875rem] text-coz-slate-light">AEGIS — Programmable Financial Infrastructure</span>
              <span className="text-coz-slate-light text-[0.75rem]">↓</span>
              <span className="text-[0.8125rem] text-coz-slate">Multi-rail settlement layer</span>
              <span className="text-coz-slate-light text-[0.75rem]">↓</span>
              <span className="text-[0.75rem] text-coz-slate-light">BNB Smart Chain (current) · Stellar (next) · Additional rails (future)</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
