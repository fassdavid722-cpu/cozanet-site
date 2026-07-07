import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const toc = [
  '1. Abstract',
  '2. The Problem',
  '3. The Cozanet Ecosystem',
  '4. AEGIS: The Financial Operating System',
  '5. CZN: The Ecosystem Token',
  '6. Technology & Architecture',
  '7. Security & Compliance',
  '8. Roadmap',
  '9. Team & Governance',
  '10. Risk Factors & Disclaimer',
];

const tokenSpecs = [
  { label: 'Token Name', value: 'Cozanet' },
  { label: 'Token Symbol', value: 'CZN' },
  { label: 'Token Standard', value: 'BEP-20 (BSC)' },
  { label: 'Total Supply', value: '1,000,000,000 CZN (fixed, non-inflationary)' },
  { label: 'Decimals', value: '9' },
  { label: 'Blockchain', value: 'BNB Smart Chain (BSC)' },
  { label: 'Contract Address', value: '0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA' },
];

const distribution = [
  { label: 'Ecosystem Growth', percent: 35 },
  { label: 'Team & Advisors', percent: 20 },
  { label: 'Community Rewards', percent: 20 },
  { label: 'Treasury', percent: 15 },
  { label: 'Early Backers', percent: 10 },
];

const roadmap = [
  { q: 'Q1 2025', title: 'AEGIS Core Launch', desc: 'Wallet infrastructure, payment processing, and business finance tools.' },
  { q: 'Q2 2025', title: 'AI Financial Assistant', desc: 'Intelligent assistant for financial analysis and automated recommendations within AEGIS.' },
  { q: 'Q3 2025', title: 'Cross-Chain Bridge', desc: 'Seamless asset transfers across multiple blockchain networks with unified liquidity.' },
  { q: 'Q4 2025', title: 'Developer Platform v2', desc: 'Enhanced APIs, new SDKs, webhook system, and developer dashboard.' },
  { q: 'Q1 2026', title: 'Enterprise Suite', desc: 'Compliance tools, advanced reporting, multi-entity management, white-label solutions.' },
  { q: 'Q2 2026', title: 'CZN Ecosystem', desc: 'Full token utility integration across all products, governance framework, ecosystem rewards.' },
];

export default function WhitepaperPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">
              Whitepaper · v1.0 · July 2026
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white max-w-[800px]">
              Cozanet: Intelligent Financial Infrastructure for the Digital Economy.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[680px] mt-4">
              This document describes the Cozanet ecosystem, the AEGIS Financial Operating System, and the CZN utility token — their purpose, architecture, tokenomics, and roadmap.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/whitepaper/cozanet-whitepaper.pdf" download className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow transition-all">
                <Download size={18} /> Download PDF
              </a>
              <Link to="/czn" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium text-[0.9375rem] hover:border-coz-gold transition-colors">
                View CZN Token Page
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Table of Contents */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="Contents" headline="What's inside." />
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {toc.map((item) => (
              <div key={item} className="text-[0.9375rem] text-coz-slate border-b border-coz-border py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* 1. Abstract & 2. Problem */}
      <section className="bg-coz-surface py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <ScrollReveal>
            <span className="text-label text-coz-slate uppercase">1. Abstract</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[1rem] text-coz-slate leading-relaxed">
              Cozanet is building intelligent digital infrastructure that connects artificial intelligence, financial technology, and automation into a single, seamless ecosystem. Its flagship product, AEGIS, is a Financial Operating System that acts as a smart router — automatically finding and executing the best path for every financial transaction across wallets, payments, and cross-chain rails. CZN is the ecosystem's native utility token: it is used to pay and discount the fees generated by AEGIS's routing activity, and to unlock access, rewards, and — over time — governance across the Cozanet ecosystem. CZN does not route transactions and is not required for AEGIS to function; it is a utility and incentive layer on top of it.
            </p>
          </ScrollReveal>

          <div className="my-16 border-t border-coz-border" />

          <ScrollReveal>
            <span className="text-label text-coz-slate uppercase">2. The Problem</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[1rem] text-coz-slate leading-relaxed">
              Modern financial infrastructure is fragmented. Individuals and businesses juggle separate tools for payments, wallets, portfolio tracking, and cross-chain transfers — each with its own fee structure, security model, and interface. Meanwhile, blockchain-based finance remains difficult to access safely: routing a transaction efficiently across chains and liquidity sources requires expertise most users don't have. Cozanet's thesis is that these problems are solved not by another single app, but by unified infrastructure: one gateway, intelligent routing, and one incentive layer that rewards usage instead of speculation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 3. Ecosystem */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="3. The Cozanet Ecosystem" headline="One ecosystem, five products." dark description="Cozanet is not one application — it is infrastructure that multiple products are built on top of." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              { title: 'AEGIS', desc: 'Financial Operating System — wallets, payments, portfolio, and smart routing. The flagship product.' },
              { title: 'AI Platform', desc: 'Intelligent products that augment financial analysis, automation, and decision-making.' },
              { title: 'Automation', desc: 'Workflow engine for building and deploying automated financial and business logic.' },
              { title: 'Developer Platform', desc: 'APIs, SDKs, and documentation for building on Cozanet infrastructure.' },
              { title: 'Enterprise', desc: 'Compliance-ready, white-label infrastructure for organizations at global scale.' },
              { title: 'CZN', desc: 'The native utility token that ties fees, rewards, and (future) governance together across all products.' },
            ].map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full border-t-[2px] border-t-coz-gold">
                  <h4 className="text-h4 text-white mb-2">{p.title}</h4>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 4. AEGIS */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="4. AEGIS: The Financial Operating System" headline="The smart router at the center of Cozanet." />
          <ScrollReveal delay={0.1}>
            <p className="text-[1rem] text-coz-slate leading-relaxed mt-8">
              AEGIS combines wallets, payments, AI-powered insights, portfolio management, and cross-chain operations into one system. Its core function is intelligent routing: every transaction is analyzed and directed along the most efficient available path — the best combination of cost, speed, and liquidity — instead of requiring the user to make that decision manually.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-[1rem] text-coz-slate leading-relaxed mt-4">
              AEGIS is built on a microservices architecture: a single API gateway handles authentication, rate limiting, and routing to independent service engines (identity, wallet, transfer, ledger, payment, portfolio, rates, compliance, notification, and automation). Each engine is an isolated domain with its own data and scaling policy, so no single failure can bring down the platform.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-6 rounded-xl bg-coz-surface border-l-[3px] border-coz-gold">
              <p className="text-[0.9375rem] text-coz-slate">
                <strong className="text-coz-black">Important distinction:</strong> AEGIS is the layer that moves and routes money. CZN is not required for AEGIS to route a transaction — it is the token used to pay AEGIS's resulting network/platform fees at a discount, and to access ecosystem rewards. CZN does not control or perform routing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* 5. CZN Token */}
      <section className="bg-coz-surface py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="5. CZN: The Ecosystem Token" headline="Utility, not speculation." description="CZN derives its value from real usage across the Cozanet ecosystem." />

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <ScrollReveal delay={0.1}>
              <div>
                <h4 className="text-h4 text-coz-black mb-4">Utility</h4>
                <ul className="space-y-3">
                  <li className="text-[1rem] text-coz-slate"><strong className="text-coz-black">AEGIS fee discounts</strong> — pay AEGIS's network/platform fees in CZN for automatic discounts.</li>
                  <li className="text-[1rem] text-coz-slate"><strong className="text-coz-black">Platform rewards</strong> — earned for active usage, referrals, and ecosystem contribution.</li>
                  <li className="text-[1rem] text-coz-slate"><strong className="text-coz-black">Ecosystem access</strong> — premium features and priority processing across Cozanet products.</li>
                  <li className="text-[1rem] text-coz-slate"><strong className="text-coz-black">Future governance</strong> — participation in ecosystem decisions as the platform matures.</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-coz-black border border-coz-charcoal-light rounded-card p-8">
                <h4 className="text-h4 text-white mb-6">Token Specification</h4>
                {tokenSpecs.map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-3 border-b border-coz-charcoal-light">
                    <span className="text-[0.8125rem] text-coz-slate uppercase tracking-[0.04em]">{s.label}</span>
                    <span className="text-[0.9375rem] text-white font-medium">{s.value}</span>
                  </div>
                ))}
                <p className="text-[0.75rem] text-coz-slate mt-4">
                  Always verify the contract address on BscScan before interacting with CZN.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 bg-white border border-coz-border rounded-card p-8">
              <h4 className="text-h4 text-coz-black mb-6">Token Distribution</h4>
              <div className="w-full h-6 bg-coz-surface rounded-lg overflow-hidden flex">
                {distribution.map((d, i) => (
                  <div key={d.label} style={{ width: `${d.percent}%` }} className={i % 2 === 0 ? 'h-full bg-coz-gold' : 'h-full bg-coz-black'} />
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {distribution.map((d) => (
                  <div key={d.label} className="flex justify-between text-[0.9375rem] text-coz-slate border-b border-coz-border py-2">
                    <span>{d.label}</span>
                    <span className="text-coz-black font-medium">{d.percent}%</span>
                  </div>
                ))}
              </div>
              <p className="text-[0.8125rem] text-coz-slate mt-6">
                Vesting schedules apply to all non-ecosystem allocations (team, advisors, treasury, early backers). Full vesting terms and unlock schedules are published in the transparency report.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 6. Technology */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="6. Technology &amp; Architecture" headline="Architecture that scales with ambition." dark />
          <ScrollReveal delay={0.1}>
            <ul className="space-y-4 mt-8">
              <li className="text-[1rem] text-coz-slate-light"><strong className="text-white">API Gateway</strong> — unified entry point handling auth, rate limiting, and intelligent routing to backend engines.</li>
              <li className="text-[1rem] text-coz-slate-light"><strong className="text-white">Microservices</strong> — independent, horizontally-scaling containers per domain with auto-healing and zero-downtime deploys.</li>
              <li className="text-[1rem] text-coz-slate-light"><strong className="text-white">Multi-database strategy</strong> — PostgreSQL for transactional data, Redis for caching, ClickHouse for analytics, vector databases for AI workloads.</li>
              <li className="text-[1rem] text-coz-slate-light"><strong className="text-white">Cloud-native</strong> — Kubernetes orchestration across regions for low latency and disaster recovery.</li>
              <li className="text-[1rem] text-coz-slate-light"><strong className="text-white">Blockchain engine</strong> — multi-chain indexing, transaction relaying, and smart contract interaction.</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 7. Security */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="7. Security &amp; Compliance" headline="Security is the foundation, not a feature." />
          <ScrollReveal delay={0.1}>
            <p className="text-[1rem] text-coz-slate leading-relaxed mt-8">
              Cozanet applies defense-in-depth across encryption (AES-256-GCM at rest, TLS 1.3 in transit), identity and access management (MFA, RBAC), key management (HSM-backed storage, multi-signature support), and continuous audit logging. Security programs, certifications, and audit dates referenced elsewhere on this site are being actively pursued and should be verified against current status before being cited externally (e.g. in exchange or listing applications).
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-[1rem] text-coz-slate leading-relaxed mt-4">
              On the compliance side: CZN is designed and marketed strictly as a utility token, not an investment, security, or financial instrument. Cozanet does not provide investment, financial, or legal advice, and does not engage in price manipulation or artificial volume creation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* 8. Roadmap */}
      <section className="bg-coz-surface py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="8. Roadmap" headline="Building for the long term." />
          <div className="mt-12 space-y-3">
            {roadmap.map((r) => (
              <ScrollReveal key={r.q}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-white border border-coz-border rounded-xl px-6 py-5">
                  <span className="text-[0.8125rem] font-semibold text-coz-gold-dark w-24 shrink-0">{r.q}</span>
                  <h4 className="text-h4 text-coz-black sm:w-64 shrink-0">{r.title}</h4>
                  <p className="text-[0.9375rem] text-coz-slate">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 9. Team & Governance */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="9. Team &amp; Governance" headline="Built by engineers, for the long term." dark />
          <ScrollReveal delay={0.1}>
            <p className="text-[1rem] text-coz-slate-light leading-relaxed mt-8">
              Cozanet is built and operated by a distributed, remote-first team of engineers, designers, and operators. The company's stated values — engineering excellence, security first, long-term thinking, user obsession, radical transparency, and continuous learning — govern day-to-day decision-making. As the ecosystem matures, CZN is designed to progressively enable community participation in ecosystem governance decisions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 10. Disclaimer */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="10. Risk Factors &amp; Disclaimer" headline="Read before you rely on this document." />
          <ScrollReveal delay={0.1}>
            <div className="mt-8 p-6 md:p-8 rounded-xl bg-coz-surface border-l-[3px] border-coz-gold space-y-4">
              <p className="text-[0.9375rem] text-coz-slate leading-relaxed">
                This whitepaper is for informational purposes only and does not constitute investment, financial, legal, or tax advice, nor an offer or solicitation to buy or sell any security or financial instrument in any jurisdiction.
              </p>
              <p className="text-[0.9375rem] text-coz-slate leading-relaxed">
                CZN is a utility token. It is not a security, equity, or debt instrument, and holding CZN does not entitle the holder to profits, dividends, or ownership in Cozanet. The value of CZN may fluctuate significantly and holders may lose some or all of their value. Never acquire CZN with funds you cannot afford to lose.
              </p>
              <p className="text-[0.9375rem] text-coz-slate leading-relaxed">
                Roadmap items, timelines, and figures in this document are forward-looking statements and subject to change based on technical, regulatory, and market conditions. Token supply, distribution, and specification details are accurate as of the publish date above and are superseded by the live CZN token page and any official transparency report in case of conflict.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/czn" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button bg-coz-black text-white font-medium text-[0.9375rem] hover:bg-coz-charcoal transition-colors">
                CZN Token Page <ExternalLink size={16} />
              </Link>
              <Link to="/security" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border text-coz-black font-medium text-[0.9375rem] hover:border-coz-black transition-colors">
                Security &amp; Compliance
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
