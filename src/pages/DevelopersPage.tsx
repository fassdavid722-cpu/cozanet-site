import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { FileText, Webhook, Shield, Clock, Activity, AlertCircle, BookOpen, Code, Github, Globe } from 'lucide-react';

const sdks = [
  { logo: 'TS', logoColor: '#3178C6', name: 'TypeScript SDK', desc: 'Full type safety, async/await, and comprehensive error handling.', install: 'npm install @cozanet/sdk' },
  { logo: 'Py', logoColor: '#3776AB', name: 'Python SDK', desc: 'Clean, pythonic API with dataclasses and type hints throughout.', install: 'pip install cozanet' },
  { logo: 'Go', logoColor: '#00ADD8', name: 'Go SDK', desc: 'High-performance, context-aware, with native struct mapping.', install: 'go get github.com/cozanet/go-sdk' },
  { logo: 'Jv', logoColor: '#E76F00', name: 'Java SDK', desc: 'Builder patterns, CompletableFuture async support, and Maven/Gradle.', install: "implementation 'com.cozanet:sdk:1.0.0'" },
];

const apiFeatures = [
  { icon: <FileText size={24} className="text-coz-gold" />, title: 'OpenAPI Spec', desc: 'Every endpoint is documented with a complete OpenAPI 3.0 specification. Import into Postman, Swagger, or your favorite API client.' },
  { icon: <Webhook size={24} className="text-coz-gold" />, title: 'Webhooks', desc: 'Real-time event delivery via webhooks. Signed payloads for security, retry logic for reliability, and idempotency guarantees.' },
  { icon: <Shield size={24} className="text-coz-gold" />, title: 'Sandbox Environment', desc: 'Fully-featured sandbox with test data, simulated transactions, and no rate limits. Build and test without touching production.' },
  { icon: <Clock size={24} className="text-coz-gold" />, title: 'Idempotency', desc: 'Every mutating request supports idempotency keys. Retry safely without worrying about duplicate operations.' },
  { icon: <Activity size={24} className="text-coz-gold" />, title: 'Pagination', desc: 'Cursor-based pagination for all list endpoints. Consistent, performant, and impossible to miss records during iteration.' },
  { icon: <AlertCircle size={24} className="text-coz-gold" />, title: 'Error Handling', desc: 'Structured error responses with machine-readable codes, human-readable messages, and detailed context for debugging.' },
];

const steps = [
  { num: '01', title: 'Install the SDK', desc: 'Install our official SDK with your preferred package manager.', code: 'npm install @cozanet/sdk' },
  { num: '02', title: 'Configure your API key', desc: "Grab your API key from the developer dashboard and configure the client.", code: "import { Cozanet } from '@cozanet/sdk';\n\nconst client = new Cozanet({\n  apiKey: 'your_api_key_here'\n});" },
  { num: '03', title: 'Make your first request', desc: "That's it. You're ready to build.", code: "const balance = await client.wallets.getBalance({\n  walletId: 'your_wallet_id'\n});\n\nconsole.log(balance);\n// { total: '12500.00', currency: 'USDC', ... }" },
];

const resources = [
  { icon: <BookOpen size={24} className="text-coz-gold" />, title: 'Documentation', link: 'docs.cozanet.io' },
  { icon: <Code size={24} className="text-coz-gold" />, title: 'API Reference', link: 'api.cozanet.io' },
  { icon: <Github size={24} className="text-coz-gold" />, title: 'GitHub', link: 'github.com/cozanet' },
  { icon: <Globe size={24} className="text-coz-gold" />, title: 'Status Page', link: 'status.cozanet.io' },
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
                <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">Developer Portal</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-h1 text-white">Build on Cozanet.</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-body-lg text-coz-slate-light max-w-[480px] mt-4">
                  Premium APIs, comprehensive SDKs, and documentation that respects your time. Get from idea to production in minutes, not days.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="#" className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium hover:shadow-gold-glow transition-all">Get Started</a>
                  <a href="#" className="inline-flex items-center gap-1 text-white font-medium hover:text-coz-gold transition-colors">API Reference →</a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-[#111111] border border-coz-charcoal-light rounded-card-lg overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-coz-charcoal-light">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-[0.75rem] text-coz-slate font-mono">node</span>
                </div>
                <div className="p-6 font-mono text-[0.875rem] leading-[1.8] overflow-x-auto">
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
          <SectionHeader label="SDKs" headline="Pick your language. Start building." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {sdks.map((sdk, i) => (
              <ScrollReveal key={sdk.name} delay={i * 0.1}>
                <div className="bg-white border border-coz-border rounded-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-1 h-full">
                  <span className="text-[2rem] font-mono font-semibold" style={{ color: sdk.logoColor }}>{sdk.logo}</span>
                  <h4 className="text-h4 text-coz-black mt-4 mb-1">{sdk.name}</h4>
                  <p className="text-[0.875rem] text-coz-slate mb-4">{sdk.desc}</p>
                  <code className="block bg-coz-surface px-3 py-2 rounded-md text-[0.75rem] font-mono text-coz-black">{sdk.install}</code>
                  <span className="inline-flex items-center gap-1 mt-4 text-[0.875rem] font-medium text-coz-black hover:text-coz-gold transition-colors cursor-pointer">
                    Documentation →
                  </span>
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
          <SectionHeader label="API Design" headline="Designed for developers who care." dark />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {apiFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h4 className="text-h4 text-white mb-2">{f.title}</h4>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Quick Start */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-coz-black">5 minutes to your first API call.</h2>
            <p className="text-body-lg text-coz-slate mt-4">No complex setup. No hidden steps. Just copy, paste, and run.</p>
          </ScrollReveal>
          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-coz-border" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.15} className="relative flex gap-6 md:gap-8 text-left">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-coz-gold text-coz-black flex items-center justify-center text-[1.25rem] md:text-[1.5rem] font-semibold shrink-0 relative z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-h4 text-coz-black mb-1">{step.title}</h4>
                    <p className="text-[1rem] text-coz-slate mb-4">{step.desc}</p>
                    <div className="bg-coz-surface rounded-lg p-4 font-mono text-[0.8125rem] text-coz-black whitespace-pre-wrap">{step.code}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal delay={0.5} className="mt-12">
            <a href="#" className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium hover:shadow-gold-glow transition-all">
              View Full Documentation
            </a>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Resources */}
      <section className="bg-coz-black py-section-sm">
        <div className="max-w-content mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.08}>
                <a href="#" className="block bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 transition-all hover:border-coz-slate group">
                  <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-4">
                    {r.icon}
                  </div>
                  <h4 className="text-h4 text-white mb-1">{r.title}</h4>
                  <span className="text-[0.875rem] text-coz-gold group-hover:text-coz-gold-muted transition-colors">{r.link} →</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
