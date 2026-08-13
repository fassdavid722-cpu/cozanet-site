import { Fingerprint, Wallet, Route, Send, Percent, Landmark, CreditCard, Brain } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const capabilities = [
  { icon: <Fingerprint size={22} />, title: 'Identity', desc: 'Secure identity and account abstraction.' },
  { icon: <Wallet size={22} />, title: 'Wallet Infrastructure', desc: 'Managed wallet and authorization infrastructure.' },
  { icon: <Route size={22} />, title: 'Smart Routing', desc: 'Routes supported transactions through appropriate settlement rails.' },
  { icon: <Send size={22} />, title: 'Transaction Execution', desc: 'Handles transaction construction, authorization and execution.' },
  { icon: <Percent size={22} />, title: 'Fee Infrastructure', desc: 'Calculates and manages applicable transaction fees.' },
  { icon: <Landmark size={22} />, title: 'Settlement', desc: 'Coordinates digital-asset settlement across supported rails.' },
  { icon: <CreditCard size={22} />, title: 'Payment Infrastructure', desc: 'Provides primitives for future payment and merchant settlement integrations.' },
  { icon: <Brain size={22} />, title: 'AI Automation', desc: 'Allows Cozanet OS/AI to interact with authorized financial operations.' },
];

export default function AegisFeaturesSection() {
  return (
    <section id="capabilities" className="bg-white py-section scroll-mt-[72px]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Core Capabilities"
          headline="A unified financial operating layer."
          description="AEGIS combines identity, wallet infrastructure, transaction authorization, smart routing, settlement orchestration and payment infrastructure into a single layer."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {capabilities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.06}>
              <div className="group bg-white border border-coz-border rounded-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-coz-purple-surface flex items-center justify-center mb-5 text-coz-purple">
                  {c.icon}
                </div>
                <h4 className="text-h4 text-coz-black mb-2">{c.title}</h4>
                <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
