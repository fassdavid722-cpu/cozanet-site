import { Network, Puzzle, Layers, Server, Brain, Link2 } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const pillars = [
  {
    icon: <Network size={22} className="text-coz-gold" />,
    bg: 'bg-coz-gold-light',
    title: 'Gateway-First Architecture',
    description: 'All requests flow through a unified gateway that handles authentication, rate limiting, and routing to independent service engines.',
  },
  {
    icon: <Puzzle size={22} className="text-coz-link" />,
    bg: 'bg-blue-50',
    title: 'Independent Engines',
    description: 'Each functional domain runs as an isolated engine with its own data, logic, and scaling policies. No monolithic bottlenecks.',
  },
  {
    icon: <Layers size={22} className="text-green-600" />,
    bg: 'bg-green-50',
    title: 'Clean Architecture',
    description: 'Domain-driven design with clear boundaries. Business logic is independent of frameworks, UI, and infrastructure.',
  },
  {
    icon: <Server size={22} className="text-purple-600" />,
    bg: 'bg-purple-50',
    title: 'Microservices',
    description: 'Distributed services that scale independently. Fault-tolerant by design with automated recovery and health monitoring.',
  },
  {
    icon: <Brain size={22} className="text-coz-gold" />,
    bg: 'bg-coz-gold-light',
    title: 'AI-Ready Infrastructure',
    description: 'Every service is designed to integrate with AI capabilities. From data pipelines to inference endpoints, the platform is AI-native.',
  },
  {
    icon: <Link2 size={22} className="text-coz-link" />,
    bg: 'bg-blue-50',
    title: 'Blockchain Interoperability',
    description: 'Cross-chain infrastructure that connects multiple blockchain networks through a unified abstraction layer.',
  },
];

export default function TechnologySection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Technology"
          headline="Built for scale. Designed for trust."
          description="Every architectural decision prioritizes security, reliability, and the ability to evolve."
        />

        {/* Architecture Diagram */}
        <ScrollReveal className="mt-16">
          <div className="bg-coz-surface rounded-card-lg p-6 md:p-10 max-w-[900px] mx-auto">
            {/* Gateway Layer */}
            <div className="flex justify-center mb-4">
              <div className="px-8 py-3 rounded-xl bg-white border-2 border-coz-gold shadow-sm text-center">
                <span className="text-[0.9375rem] font-semibold text-coz-black">Cozanet Gateway</span>
              </div>
            </div>

            {/* Connecting lines */}
            <div className="hidden md:flex justify-center gap-[120px] mb-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-0 border-l border-dashed border-coz-border h-6" />
              ))}
            </div>

            {/* Engine Layer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { name: 'AEGIS Engine', color: 'border-l-[3px] border-l-[#6C2BD9]' },
                { name: 'AI Engine', color: 'border-l-[3px] border-l-[#3B82F6]' },
                { name: 'Automation Engine', color: 'border-l-[3px] border-l-[#10B981]' },
                { name: 'Blockchain Engine', color: 'border-l-[3px] border-l-[#FFB800]' },
              ].map((engine) => (
                <div
                  key={engine.name}
                  className={`bg-white border border-coz-border rounded-lg px-4 py-3 text-center ${engine.color}`}
                >
                  <span className="text-[0.8125rem] font-medium text-coz-black">{engine.name}</span>
                </div>
              ))}
            </div>

            {/* Connecting lines down */}
            <div className="hidden md:flex justify-center mb-2">
              <div className="w-0 border-l border-dashed border-coz-border h-6" />
            </div>

            {/* Infrastructure Layer */}
            <div className="bg-white border border-coz-border rounded-xl px-6 py-4">
              <div className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-coz-slate text-center mb-3">
                Infrastructure Layer
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {['Microservices', 'APIs', 'SDKs', 'Blockchain Infrastructure'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-pill bg-coz-surface text-[0.8125rem] text-coz-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tech Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl ${pillar.bg} flex items-center justify-center shrink-0`}>
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-h4 text-coz-black mb-1">{pillar.title}</h4>
                  <p className="text-[1rem] text-coz-slate leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
