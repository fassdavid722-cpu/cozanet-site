import { Network, Link2, Landmark, Code2 } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const integrations = [
  { icon: <Network size={22} />, title: 'Cozanet Ecosystem', desc: 'Native integration with all Cozanet products. Share data, automate workflows, and leverage AI across the entire platform.' },
  { icon: <Link2 size={22} />, title: 'Multi-Chain Support', desc: 'Connect to Ethereum, Solana, Bitcoin, and major L2 networks. Cross-chain bridges with unified asset representation.' },
  { icon: <Landmark size={22} />, title: 'TradFi Connectivity', desc: 'Bank account linking, wire transfers, card payments, and compliance reporting for seamless crypto-traditional finance bridging.' },
  { icon: <Code2 size={22} />, title: 'Developer APIs', desc: 'Build on AEGIS with our comprehensive APIs. White-label solutions, embedded finance, and custom integrations.' },
];

export default function AegisIntegrationSection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Integration"
          headline="Connected to everything."
          description="AEGIS integrates seamlessly with the Cozanet ecosystem and connects to the broader financial and blockchain world."
        />
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {integrations.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group bg-white border border-coz-border rounded-card p-6 md:p-8 transition-all hover:shadow-card-hover hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-coz-purple-surface flex items-center justify-center mb-5 text-coz-purple">
                  {item.icon}
                </div>
                <h4 className="text-h4 text-coz-black mb-2">{item.title}</h4>
                <p className="text-[1rem] text-coz-slate leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
