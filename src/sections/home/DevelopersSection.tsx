import { Terminal, Package, BookOpen, Rocket } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const resources = [
  {
    icon: <Terminal size={24} className="text-coz-gold" />,
    title: 'REST APIs',
    description: 'Clean, consistent, well-documented REST APIs with OpenAPI specifications. Rate limiting, webhooks, and sandbox environments included.',
    link: 'API Reference',
    bg: 'bg-coz-gold-light',
  },
  {
    icon: <Package size={24} className="text-coz-link" />,
    title: 'SDKs',
    description: 'Official SDKs for JavaScript, Python, Go, and Java. Type-safe, well-tested, and designed to get you running in minutes.',
    link: 'View SDKs',
    bg: 'bg-blue-50',
  },
  {
    icon: <BookOpen size={24} className="text-green-600" />,
    title: 'Documentation',
    description: 'Comprehensive guides, tutorials, and reference materials. Searchable, versioned, and kept ruthlessly up to date.',
    link: 'Read Docs',
    bg: 'bg-green-50',
  },
  {
    icon: <Rocket size={24} className="text-purple-600" />,
    title: 'Quick Start',
    description: 'Get your first API call working in under 5 minutes. Step-by-step guides, copy-paste code samples, and live testing.',
    link: 'Get Started',
    bg: 'bg-purple-50',
  },
];

export default function DevelopersSection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Developers"
          headline="Built by engineers, for engineers."
          description="Premium APIs, comprehensive SDKs, and documentation that respects your time."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {resources.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <div className="group bg-white border border-coz-border rounded-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-[#D1D1D1] h-full">
                <div className={`w-12 h-12 rounded-xl ${r.bg} flex items-center justify-center mb-5`}>
                  {r.icon}
                </div>
                <h4 className="text-h4 text-coz-black mb-2">{r.title}</h4>
                <p className="text-[1rem] text-coz-slate leading-relaxed mb-4">{r.description}</p>
                <span className="inline-flex items-center gap-1 text-[0.875rem] font-medium text-coz-black group-hover:text-coz-gold transition-colors">
                  {r.link} <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Terminal Preview */}
        <ScrollReveal delay={0.3} className="mt-16 max-w-[720px] mx-auto">
          <div className="bg-coz-black rounded-card-lg border border-coz-charcoal-light overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-coz-charcoal-light">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-[0.75rem] text-coz-slate font-mono">bash</span>
            </div>
            <div className="p-6 font-mono text-[0.875rem] leading-[1.8]">
              <p className="text-coz-slate-light">
                <span className="text-coz-gold">$</span> npm install @cozanet/sdk
              </p>
              <p className="text-coz-slate-light mt-1">
                <span className="text-coz-gold">$</span> cozanet init my-project
              </p>
              <p className="text-green-400 mt-1">{'\u2713'} Project initialized</p>
              <p className="text-green-400">{'\u2713'} API keys configured</p>
              <p className="text-green-400">{'\u2713'} Connected to Cozanet Gateway</p>
              <p className="text-coz-slate-light mt-1">
                <span className="text-coz-gold">$</span> cozanet deploy
              </p>
              <p className="text-green-400 mt-1">{'\u2713'} Deployed to production in 2.3s</p>
              <p className="text-green-400">{'\u2713'} Health checks passing</p>
              <p className="text-green-400">{'\u2713'} Monitoring active</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
