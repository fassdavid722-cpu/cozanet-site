import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { FileText, Webhook, Shield, Clock, Activity, AlertCircle, Code, Github, Globe } from 'lucide-react';

const sdks = [
  { logo: 'TS', logoColor: '#3178C6', name: 'TypeScript SDK', desc: 'Full type safety, async/await, and comprehensive error handling.', install: 'npm install @cozanet/sdk' },
  { logo: 'Py', logoColor: '#3776AB', name: 'Python SDK', desc: 'Clean, pythonic API with dataclasses and type hints throughout.', install: 'pip install cozanet' },
  { logo: 'Go', logoColor: '#00ADD8', name: 'Go SDK', desc: 'High-performance, context-aware, with native struct mapping.', install: 'go get github.com/cozanet/go-sdk' },
  { logo: 'Jv', logoColor: '#E76F00', name: 'Java SDK', desc: 'Builder patterns, CompletableFuture async support, and Maven/Gradle.', install: "implementation 'com.cozanet:sdk:1.0.0'" },
];

const apiFeatures = [
  { icon: <FileText size={24} className="text-coz-gold" />, title: 'OpenAPI Spec', desc: 'Every Gateway endpoint is documented with a machine-readable OpenAPI 3.0 contract — live today at /api/v1/openapi.json.', live: true },
  { icon: <Webhook size={24} className="text-coz-gold" />, title: 'Webhooks', desc: 'Real-time event delivery for account and transaction events. Planned for the public API release.', live: false },
  { icon: <Shield size={24} className="text-coz-gold" />, title: 'Sandbox Environment', desc: 'A dedicated test environment with simulated transactions and no rate limits. Planned for the public API release.', live: false },
  { icon: <Clock size={24} className="text-coz-gold" />, title: 'Idempotency', desc: 'Idempotency keys on mutating requests so retries never double-execute. Planned for the public API release.', live: false },
  { icon: <Activity size={24} className="text-coz-gold" />, title: 'Correlation IDs', desc: 'Every request today is tagged with an X-Correlation-Id that traces it end-to-end through the Gateway and into the engine.', live: true },
  { icon: <AlertCircle size={24} className="text-coz-gold" />, title: 'Structured Errors', desc: 'Every failure returns a consistent shape — machine-readable code, human-readable message, matching HTTP status. Live today.', live: true },
];

const resources = [
  { icon: <FileText size={24} className="text-coz-gold" />, title: 'Documentation', link: '/documentation', desc: 'Architecture, API conventions, security model.' },
  { icon: <Code size={24} className="text-coz-gold" />, title: 'Whitepaper', link: '/whitepaper', desc: 'The full Cozanet & CZN whitepaper.' },
  { icon: <Github size={24} className="text-coz-gold" />, title: 'GitHub', link: 'https://github.com/fassdavid722-cpu', external: true, desc: 'Public repositories and code.' },
  { icon: <Globe size={24} className="text-coz-gold" />, title: 'Engine Status', link: '/documentation', desc: 'Live vs. in-development status for every engine.' },
];

export default function DevelopersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">Developer Portal · Public API Coming Soon</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-h1 text-white">Build on Cozanet.</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-body-lg text-coz-slate-light max-w-[480px] mt-4">
                  A public API and SDKs for third-party developers are on our roadmap. The Gateway API that powers our own apps is already live — see how it works today in our documentation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/documentation" className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium hover:shadow-gold-glow transition-all">View Documentation</Link>
                  <Link to="/documentation" className="inline-flex items-center gap-1 text-white font-medium hover:text-coz-gold transition-colors">API Reference →</Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-[#111111] border border-coz-charcoal-light rounded-card-lg overflow-hidden">
                <div className="flex items-center justify-between gap-2 px-5 py-3 border-b border-coz-charcoal-light">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-[0.75rem] text-coz-slate font-mono">node</span>
                  </div>
                  <span className="text-[0.6875rem] font-medium uppercase tracking-[0.04em] text-coz-slate">Preview — not yet live</span>
                </div>
                <div className="p-6 font-mono text-[0.875rem] leading-[1.8] overflow-x-auto opacity-70">
                  <p><span className="text-purple-400">import</span> <span className="text-white">{'{'} Cozanet {'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@cozanet/sdk'</span>;</p>
                  <p className="mt-1"><span className="text-purple-400">const</span> <span className="text-white">client</span> <span className="text-coz-slate">=</span> <span className="text-purple-400">new</span> <span className="text-blue-400">Cozanet</span><span className="text-white">({'{'}\n  apiKey: <span className="text-green-400">process.env.COZANET_API_KEY</span>,\n  environment: <span className="text-green-400">'production'</span>\n{'}'})</span>;</p>
                  <p className="mt-4"><span className="text-coz-slate">{'//'}</span> <span className="text-coz-slate">Get wallet balance</span></p>
                  <p><span className="text-purple-400">const</span> <span className="text-white">balance</span> <span className="text-coz-slate">=</span> <span className="text-purple-400">await</span> <span className="text-white">client</span>.<span className="text-blue-400">wallets</span>.<span className="text-blue-400">getBalance</span><span className="text-white">({'{'}\n  walletId: <span className="text-green-400">'wal_123456'</span>\n{'}'})</span>;</p>
                  <p className="mt-4"><span className="text-blue-400">console</span>.<span className="text-blue-400">log</span><span className="text-white">(</span><span className="text-green-400">`Balance: ${'${balance.total}'} USDC`</span><span className="text-white">)</span>;</p>
                  <p className="mt-1 text-coz-slate">{'//'} Balance: 12500.00 USDC</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* SDKs */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="SDKs" headline="Planned for launch — pick your language." description="These SDKs are designed and named, but not yet published. The install commands below show the shape of what's coming, not something you can run today." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {sdks.map((sdk, i) => (
              <ScrollReveal key={sdk.name} delay={i * 0.1}>
                <div className="bg-white border border-coz-border rounded-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[2rem] font-mono font-semibold" style={{ color: sdk.logoColor }}>{sdk.logo}</span>
                    <span className="text-[0.6875rem] font-medium uppercase tracking-[0.04em] px-2.5 py-1 rounded-pill bg-coz-surface text-coz-slate">Coming Soon</span>
                  </div>
                  <h4 className="text-h4 text-coz-black mt-4 mb-1">{sdk.name}</h4>
                  <p className="text-[0.875rem] text-coz-slate mb-4">{sdk.desc}</p>
                  <code className="block bg-coz-surface px-3 py-2 rounded-md text-[0.75rem] font-mono text-coz-slate">{sdk.install}</code>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* API Features */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="API Design" headline="What's live today, and what's next." dark description="Our internal Gateway API already powers our own apps in production. Some conventions below are live now; others are planned for when we open the API to third-party developers." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {apiFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <span className={`text-[0.6875rem] font-medium uppercase tracking-[0.04em] px-2.5 py-1 rounded-pill ${f.live ? 'bg-green-950 text-green-400' : 'bg-coz-charcoal-light text-coz-slate-light'}`}>
                      {f.live ? 'Live' : 'Planned'}
                    </span>
                  </div>
                  <h4 className="text-h4 text-white mb-2">{f.title}</h4>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <Link to="/documentation" className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium hover:shadow-gold-glow transition-all">
                Read the Full API Reference
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Resources */}
      <section className="bg-coz-black py-section-sm">
        <div className="max-w-content mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.08}>
                {r.external ? (
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 transition-all hover:border-coz-slate group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-4">
                      {r.icon}
                    </div>
                    <h4 className="text-h4 text-white mb-1">{r.title}</h4>
                    <span className="text-[0.875rem] text-coz-slate-light">{r.desc}</span>
                  </a>
                ) : (
                  <Link
                    to={r.link}
                    className="block bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 transition-all hover:border-coz-slate group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-4">
                      {r.icon}
                    </div>
                    <h4 className="text-h4 text-white mb-1">{r.title}</h4>
                    <span className="text-[0.875rem] text-coz-slate-light">{r.desc}</span>
                  </Link>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
