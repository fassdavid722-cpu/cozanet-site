import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { Tag, Gift, Layers, Gavel, Scale, FileCheck, Eye, ShieldCheck, Download, FileText } from 'lucide-react';

const utilities = [
  { icon: <Tag size={22} />, title: 'AEGIS Fee Discounts', desc: 'AEGIS routes every transaction to the best path automatically. Pay the resulting network and platform fees in CZN and receive automatic discounts — the more you use, the more you save.' },
  { icon: <Gift size={22} />, title: 'Platform Rewards', desc: 'Earn CZN rewards for active platform usage, referrals, and contributing to the ecosystem.' },
  { icon: <Layers size={22} />, title: 'Ecosystem Access', desc: 'Unlock premium features, priority processing, and exclusive tools across all Cozanet products.' },
  { icon: <Gavel size={22} />, title: 'Future Governance', desc: 'CZN will enable participation in ecosystem governance decisions as the platform matures.' },
];

const tokenSpecs = [
  { label: 'Token Name', value: 'Cozanet' },
  { label: 'Token Symbol', value: 'CZN' },
  { label: 'Token Standard', value: 'BEP-20 (BSC)' },
  { label: 'Total Supply', value: '1,000,000,000 CZN' },
  { label: 'Decimals', value: '9' },
  { label: 'Blockchain', value: 'BNB Smart Chain (BSC)' },
  { label: 'Contract Address', value: '0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA' },
];

const distribution = [
  { label: 'Ecosystem Growth', percent: 35, color: '#FFB800' },
  { label: 'Team & Advisors', percent: 20, color: '#6B7280' },
  { label: 'Community Rewards', percent: 20, color: '#9B6EF3' },
  { label: 'Treasury', percent: 15, color: '#1A73E8' },
  { label: 'Early Backers', percent: 10, color: '#10B981' },
];

const complianceItems = [
  { icon: <Scale size={20} />, title: 'No Investment Advice', desc: 'Cozanet does not provide investment, financial, or legal advice. CZN is a utility token, not a security.', bg: 'bg-green-50' },
  { icon: <FileCheck size={20} />, title: 'Regulatory Compliance', desc: 'We actively monitor and adapt to regulatory developments in all jurisdictions where we operate.', bg: 'bg-blue-50' },
  { icon: <Eye size={20} />, title: 'Transparency Reports', desc: 'We publish regular transparency reports detailing token movements, treasury status, and ecosystem metrics.', bg: 'bg-coz-gold-light' },
  { icon: <ShieldCheck size={20} />, title: 'Anti-Manipulation', desc: 'We do not engage in price manipulation, artificial volume creation, or misleading marketing practices.', bg: 'bg-purple-50' },
];

export default function CznPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-gold-light text-coz-gold-dark mb-6">
              Ecosystem Utility
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4">
              <img src="/images/brand/czn-logo.png" alt="CZN" className="w-24 h-24 object-contain shrink-0" />
              <div>
                <h1 className="text-h1 text-coz-black">CZN</h1>
                <p className="text-h3 text-coz-slate mt-2">Native Utility Token</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate max-w-[640px] mt-6">
              CZN is the native utility token of the Cozanet ecosystem. AEGIS is the smart router that finds and executes the best path for every transaction — CZN is the token used to pay and discount the fees AEGIS generates along the way, plus unlock platform access and ecosystem rewards. CZN does not route funds and derives its value from utility, not speculation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-6 p-5 rounded-xl bg-coz-surface border-l-[3px] border-coz-gold max-w-[600px]">
              <p className="text-[0.875rem] text-coz-slate">
                CZN is a utility token. It is not an investment, security, or financial instrument. Token value may fluctuate. Never invest more than you can afford to lose.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Utility */}
      <section className="bg-coz-surface py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Utility" headline="Purpose-built for the ecosystem." description="CZN provides real utility across all Cozanet products and services." />
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {utilities.map((u, i) => (
              <ScrollReveal key={u.title} delay={i * 0.1}>
                <div className="bg-white border border-coz-border rounded-card p-6 md:p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-coz-gold-light flex items-center justify-center text-coz-gold mb-5">
                    {u.icon}
                  </div>
                  <h4 className="text-h4 text-coz-black mb-2">{u.title}</h4>
                  <p className="text-[1rem] text-coz-slate leading-relaxed">{u.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Token Details */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Token Details" headline="Transparent by design." dark />
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {/* Specs */}
            <div>
              {tokenSpecs.map((spec, i) => (
                <ScrollReveal key={spec.label} delay={i * 0.06}>
                  <div className="flex justify-between items-center py-5 border-b border-coz-charcoal-light">
                    <span className="text-[0.875rem] text-coz-slate uppercase tracking-[0.04em]">{spec.label}</span>
                    <span className="text-[1rem] text-white font-medium">{spec.value}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {/* Distribution */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-8">
                <h4 className="text-h4 text-white mb-6">Token Distribution</h4>
                <div className="w-full h-8 bg-coz-black rounded-lg overflow-hidden flex">
                  {distribution.map((d) => (
                    <div key={d.label} style={{ width: `${d.percent}%`, backgroundColor: d.color }} className="h-full" />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {distribution.map((d) => (
                    <div key={d.label} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                      <span className="text-[0.8125rem] text-coz-slate-light">{d.label}</span>
                      <span className="text-[0.8125rem] text-white ml-auto">{d.percent}%</span>
                    </div>
                  ))}
                </div>
                <p className="text-[0.8125rem] text-coz-slate mt-5">
                  Vesting schedules apply to all non-ecosystem allocations. Full details in the transparency report.
                </p>
                <a href="#" className="inline-flex items-center gap-1 mt-3 text-[0.875rem] font-medium text-coz-gold hover:text-coz-gold-muted transition-colors">
                  View Transparency Report <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Brand Assets */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Brand Assets" headline="Logo &amp; media kit." description="Official CZN logo files for exchanges, listing platforms, and press. Free to use for accurate representation of CZN." />
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-coz-surface border border-coz-border rounded-card p-6 flex flex-col items-center text-center">
              <img src="/brand-assets/czn-icon-32.svg" alt="CZN icon SVG" className="w-16 h-16 object-contain mb-4" />
              <h4 className="text-h4 text-coz-black mb-1">SVG (Vector)</h4>
              <p className="text-[0.8125rem] text-coz-slate mb-4">Scalable icon, 32×32 default — ideal for listings and app integrations.</p>
              <a href="/brand-assets/czn-icon-32.svg" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-coz-black text-white text-[0.875rem] font-medium hover:bg-coz-charcoal transition-colors">
                <Download size={16} /> Download SVG
              </a>
            </div>
            <div className="bg-coz-surface border border-coz-border rounded-card p-6 flex flex-col items-center text-center">
              <img src="/brand-assets/czn-icon-256.png" alt="CZN icon 256px PNG" className="w-16 h-16 object-contain mb-4" />
              <h4 className="text-h4 text-coz-black mb-1">PNG · 256×256</h4>
              <p className="text-[0.8125rem] text-coz-slate mb-4">Transparent background, standard resolution for most token lists.</p>
              <a href="/brand-assets/czn-icon-256.png" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-coz-black text-white text-[0.875rem] font-medium hover:bg-coz-charcoal transition-colors">
                <Download size={16} /> Download PNG
              </a>
            </div>
            <div className="bg-coz-surface border border-coz-border rounded-card p-6 flex flex-col items-center text-center">
              <img src="/brand-assets/czn-icon-512.png" alt="CZN icon 512px PNG" className="w-16 h-16 object-contain mb-4" />
              <h4 className="text-h4 text-coz-black mb-1">PNG · 512×512</h4>
              <p className="text-[0.8125rem] text-coz-slate mb-4">High resolution, for press kits and large-format use.</p>
              <a href="/brand-assets/czn-icon-512.png" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button bg-coz-black text-white text-[0.875rem] font-medium hover:bg-coz-charcoal transition-colors">
                <Download size={16} /> Download PNG
              </a>
            </div>
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-coz-black rounded-card p-6">
              <div className="flex items-center gap-3">
                <FileText size={22} className="text-coz-gold shrink-0" />
                <p className="text-[0.9375rem] text-white">Looking for the full Cozanet whitepaper?</p>
              </div>
              <a href="/whitepaper" className="inline-flex items-center px-6 py-3 rounded-button gradient-gold text-coz-black font-medium text-[0.875rem] hover:shadow-gold-glow transition-all shrink-0">
                Read the Whitepaper
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Compliance */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6 text-center">
          <SectionHeader label="Compliance" headline="Committed to responsible token economics." centered />
          <div className="mt-12 space-y-4">
            {complianceItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-white border border-coz-border rounded-card p-6 text-left">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center text-coz-black shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-h4 text-coz-black mb-1">{item.title}</h4>
                    <p className="text-[1rem] text-coz-slate leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* CTA */}
      <section className="bg-coz-surface py-[clamp(80px,10vw,120px)]">
        <div className="max-w-content mx-auto px-6 text-center">
          <ScrollReveal>
            <h3 className="text-h3 text-coz-black">Want to understand CZN better?</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="/developers" className="inline-flex items-center px-7 py-3.5 rounded-button bg-coz-black text-white font-medium text-[0.9375rem] hover:bg-coz-charcoal transition-colors">
                Read Documentation
              </a>
              <a href="#" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border text-coz-black font-medium text-[0.9375rem] hover:border-coz-black transition-colors">
                View Transparency Report
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
