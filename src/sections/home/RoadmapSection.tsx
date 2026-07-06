import { useRef, useEffect } from 'react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const milestones = [
  {
    quarter: 'Q1 2025',
    title: 'AEGIS Core Launch',
    description: 'Financial Operating System with wallet infrastructure, payment processing, and business finance tools.',
    status: 'Completed',
    statusColor: 'bg-green-50 text-green-700',
  },
  {
    quarter: 'Q2 2025',
    title: 'AI Financial Assistant',
    description: 'Intelligent assistant for financial analysis, portfolio insights, and automated recommendations within AEGIS.',
    status: 'In Progress',
    statusColor: 'bg-coz-gold-light text-coz-gold-dark',
  },
  {
    quarter: 'Q3 2025',
    title: 'Cross-Chain Bridge',
    description: 'Seamless asset transfers across multiple blockchain networks with unified liquidity.',
    status: 'Planned',
    statusColor: 'bg-coz-surface text-coz-slate',
  },
  {
    quarter: 'Q4 2025',
    title: 'Developer Platform v2',
    description: 'Enhanced APIs, new SDKs, webhook system, and comprehensive developer dashboard.',
    status: 'Planned',
    statusColor: 'bg-coz-surface text-coz-slate',
  },
  {
    quarter: 'Q1 2026',
    title: 'Enterprise Suite',
    description: 'Compliance tools, advanced reporting, multi-entity management, and white-label solutions.',
    status: 'Planned',
    statusColor: 'bg-coz-surface text-coz-slate',
  },
  {
    quarter: 'Q2 2026',
    title: 'CZN Ecosystem',
    description: 'Full token utility integration across all products, governance framework, and ecosystem rewards.',
    status: 'Planned',
    statusColor: 'bg-coz-surface text-coz-slate',
  },
];

export default function RoadmapSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = 'scaleY(1)';
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Roadmap"
          headline="Building for the long term."
          description="Our roadmap reflects our commitment to continuous innovation and delivering value at every stage."
        />

        <div className="relative mt-16 max-w-[900px] mx-auto">
          {/* Central line */}
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-coz-gold origin-top transition-transform duration-[1.5s] ease-out"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal
                  key={m.quarter}
                  delay={i * 0.15}
                  direction={isLeft ? 'left' : 'right'}
                  className="relative"
                >
                  <div className={`md:flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Card */}
                    <div className={`md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white border border-coz-border rounded-card p-6 hover:shadow-card transition-shadow">
                        <span className="text-label text-coz-gold">{m.quarter}</span>
                        <h4 className="text-h4 text-coz-black mt-2 mb-2">{m.title}</h4>
                        <p className="text-[1rem] text-coz-slate leading-relaxed mb-3">{m.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-pill text-[0.75rem] font-medium ${m.statusColor}`}>
                          {m.status}
                        </span>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-coz-gold border-2 border-white shadow-sm z-10" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
