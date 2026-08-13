import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';
import { settlementRails } from '../../data/settlementRails';

const statusStyles: Record<string, { dot: string; badge: string; border: string }> = {
  live: {
    dot: 'bg-green-400',
    badge: 'bg-green-50 text-green-700 border-green-200',
    border: 'border-green-300',
  },
  integration_in_progress: {
    dot: 'bg-coz-gold animate-pulse-dot',
    badge: 'bg-coz-gold-light text-coz-gold-dark border-coz-gold/30',
    border: 'border-coz-gold/40',
  },
  planned: {
    dot: 'bg-coz-slate',
    badge: 'bg-coz-charcoal text-coz-slate-light border-coz-charcoal-light',
    border: 'border-coz-border-dark',
  },
};

export default function MultiRailSection() {
  return (
    <section className="bg-coz-black py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Multi-Rail Architecture"
          headline="One layer. Multiple settlement rails."
          description="AEGIS is designed to support multiple settlement networks and payment rails through a unified smart-routing layer."
          dark
        />

        {/* Architecture Diagram */}
        <ScrollReveal delay={0.2} className="mt-20">
          <div className="max-w-[680px] mx-auto">
            {/* AEGIS node */}
            <div className="flex flex-col items-center">
              <div className="px-8 py-4 rounded-card bg-white/10 border border-white/20 text-center backdrop-blur-sm">
                <img src="/brand-assets/aegis-mark-sm.png" alt="AEGIS" className="h-8 w-auto mx-auto mb-2 object-contain" />
                <p className="text-h4 text-white">AEGIS</p>
                <p className="text-[0.8125rem] text-coz-slate-light mt-1">Financial Infrastructure</p>
              </div>

              {/* Connector line */}
              <div className="w-px h-12 bg-coz-gold/40" />

              {/* Smart Routing node */}
              <div className="px-6 py-3 rounded-card bg-coz-gold/10 border border-coz-gold/30 text-center">
                <p className="text-[0.9375rem] font-medium text-coz-gold">Smart Routing</p>
              </div>

              {/* Branching lines */}
              <div className="relative w-full max-w-[560px] mt-0">
                {/* Vertical line down from routing */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-8 bg-coz-gold/40" />
                {/* Horizontal line */}
                <div className="absolute top-8 left-[16.67%] right-[16.67%] h-px bg-coz-gold/40" />
                {/* Three vertical lines down to cards */}
                <div className="absolute top-8 left-[16.67%] w-px h-8 bg-coz-gold/40" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-coz-gold/40" />
                <div className="absolute top-8 right-[16.67%] w-px h-8 bg-coz-gold/40" />
              </div>

              {/* Three rail cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[560px] mt-16">
                {settlementRails.map((rail) => {
                  const styles = statusStyles[rail.status];
                  return (
                    <ScrollReveal key={rail.name} delay={0.1}>
                      <div className={`rounded-card p-5 border ${styles.border} bg-coz-charcoal text-center h-full flex flex-col justify-between`}>
                        <div>
                          <p className="text-[0.9375rem] font-medium text-white mb-1">{rail.name}</p>
                          <p className="text-[0.75rem] text-coz-slate-light leading-relaxed mb-4">{rail.description}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-[0.75rem] font-medium border ${styles.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                          {rail.statusLabel}
                        </span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
