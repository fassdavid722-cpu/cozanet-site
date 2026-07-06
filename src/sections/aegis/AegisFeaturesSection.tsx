import { Wallet, CreditCard, Building2, Brain, PieChart, Zap, Link2, Lock, Globe } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const features = [
  { icon: <Wallet size={22} />, title: 'Smart Wallets', desc: 'Multi-signature wallets with social recovery, hardware key support, and cross-chain asset management.' },
  { icon: <CreditCard size={22} />, title: 'Payments', desc: 'Send and receive payments globally. Instant settlement, low fees, and business invoicing built in.' },
  { icon: <Building2 size={22} />, title: 'Business Finance', desc: 'Expense tracking, multi-entity accounting, automated reconciliation, and financial reporting.' },
  { icon: <Brain size={22} />, title: 'AI Financial Assistant', desc: 'Get intelligent insights on spending, investments, and financial health. Natural language queries.' },
  { icon: <PieChart size={22} />, title: 'Portfolio', desc: 'Track all your assets across chains and traditional finance in one unified dashboard.' },
  { icon: <Zap size={22} />, title: 'Automation', desc: 'Set up recurring payments, automated savings, tax-efficient strategies, and smart triggers.' },
  { icon: <Link2 size={22} />, title: 'Cross-Chain', desc: 'Move assets seamlessly between blockchain networks. Unified liquidity, minimal slippage.' },
  { icon: <Lock size={22} />, title: 'Security', desc: 'Bank-grade security with biometric authentication, hardware security modules, and insurance coverage.' },
  { icon: <Globe size={22} />, title: 'Global Access', desc: 'Available worldwide. Multi-currency support, local payment methods, and regulatory compliance.' },
];

export default function AegisFeaturesSection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Capabilities"
          headline="Everything you need to manage finance."
          description="AEGIS combines essential financial tools with intelligent automation."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.06}>
              <div className="group bg-white border border-coz-border rounded-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-coz-purple-surface flex items-center justify-center mb-5 text-coz-purple">
                  {f.icon}
                </div>
                <h4 className="text-h4 text-coz-black mb-2">{f.title}</h4>
                <p className="text-[1rem] text-coz-slate leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
