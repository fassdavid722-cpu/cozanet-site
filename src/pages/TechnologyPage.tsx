import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { Globe, Cpu, Layers, Database, HardDrive } from 'lucide-react';

const miniLayers = [
  { icon: <Globe size={16} />, label: 'Gateway' },
  { icon: <Cpu size={16} />, label: 'Engines' },
  { icon: <Layers size={16} />, label: 'Services' },
  { icon: <Database size={16} />, label: 'Data' },
  { icon: <HardDrive size={16} />, label: 'Infrastructure' },
];

const engines = [
  { title: 'AEGIS Engine', desc: 'Financial operations engine handling wallets, payments, portfolio management, and business finance. Processes transactions with sub-second latency.', tags: ['Node.js', 'PostgreSQL', 'Redis', 'Solana'], color: '#6C2BD9' },
  { title: 'AI Engine', desc: 'Machine learning inference and training pipeline. Powers the financial assistant, recommendation systems, and intelligent automation.', tags: ['Python', 'PyTorch', 'Vector DB', 'GPU'], color: '#3B82F6' },
  { title: 'Automation Engine', desc: 'Workflow orchestration, event processing, and trigger-based automation. Handles millions of events per day with guaranteed delivery.', tags: ['Go', 'Kafka', 'Temporal', 'Elasticsearch'], color: '#10B981' },
  { title: 'Blockchain Engine', desc: 'Multi-chain indexing, transaction relaying, and smart contract interaction. Supports Solana, Ethereum, and major L2 networks.', tags: ['Rust', 'gRPC', 'Web3', 'Custom Indexer'], color: '#FFB800' },
];

const infrastructure = [
  { icon: <HardDrive size={22} className="text-coz-gold" />, bg: 'bg-coz-gold-light', title: 'Microservices', desc: 'Distributed services deployed as independent containers. Each service scales horizontally based on demand. Auto-healing and rolling deployments ensure zero-downtime updates.' },
  { icon: <Database size={22} className="text-coz-link" />, bg: 'bg-blue-50', title: 'Data Layer', desc: 'Multi-database strategy: PostgreSQL for transactional data, Redis for caching and sessions, ClickHouse for analytics, and vector databases for AI workloads.' },
  { icon: <Globe size={22} className="text-green-600" />, bg: 'bg-green-50', title: 'Cloud Native', desc: 'Deployed on multi-cloud infrastructure with Kubernetes orchestration. Geographic distribution across regions for low latency and disaster recovery.' },
  { icon: <Cpu size={22} className="text-purple-600" />, bg: 'bg-purple-50', title: 'Observability', desc: 'Full-stack monitoring with distributed tracing, metrics collection, and centralized logging. Real-time alerting and automated incident response.' },
  { icon: <LockIcon />, bg: 'bg-coz-gold-light', title: 'Security Layer', desc: 'Defense in depth: WAF, DDoS protection, network segmentation, vulnerability scanning, and automated security testing in CI/CD pipelines.' },
  { icon: <ZapIcon />, bg: 'bg-blue-50', title: 'Performance', desc: 'Sub-100ms API response times at p99. Global CDN for static assets. Connection pooling, query optimization, and aggressive caching strategies.' },
];

const techStack = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Rust', 'Java'] },
  { category: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Fastify', 'gRPC', 'GraphQL'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis', 'ClickHouse', 'Kafka'] },
  { category: 'Infrastructure', items: ['Kubernetes', 'Docker', 'AWS', 'Terraform'] },
];

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coz-gold">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coz-link">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="text-label text-coz-gold uppercase">Engineering</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white max-w-[800px]">Architecture that scales with ambition.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[640px] mt-4">
              Every architectural decision at Cozanet is made with three principles in mind: security first, reliability always, and the freedom to evolve.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="mt-12">
            <div className="flex flex-wrap gap-3">
              {miniLayers.map((layer, i) => (
                <div key={layer.label} className="flex items-center gap-2">
                  <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-xl px-5 py-3 flex items-center gap-2 text-coz-slate-light">
                    {layer.icon}
                    <span className="text-[0.75rem] font-medium">{layer.label}</span>
                  </div>
                  {i < miniLayers.length - 1 && <span className="text-coz-charcoal-light hidden sm:block">→</span>}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Gateway */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-[55%_45%] gap-12">
            <div>
              <ScrollReveal>
                <span className="text-label text-coz-gold uppercase">Gateway Layer</span>
                <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-h2 text-coz-black">One gateway. Every service.</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[1rem] text-[#374151] leading-relaxed mt-5">
                  All requests to the Cozanet platform flow through a unified gateway. This isn't just a load balancer — it's an intelligent routing layer that handles authentication, rate limiting, request validation, and routes traffic to the appropriate service engines.
                </p>
              </ScrollReveal>
              <div className="mt-8 space-y-4">
                {[
                  { title: 'Authentication & Authorization', desc: 'JWT-based auth with refresh token rotation. OAuth 2.0 and API key support. Role-based access control at the gateway level.' },
                  { title: 'Rate Limiting & Throttling', desc: 'Tiered rate limits by plan and endpoint. Intelligent throttling that protects backend services without degrading user experience.' },
                  { title: 'Intelligent Routing', desc: 'Request routing based on path, headers, and payload analysis. Automatic failover and health-check-based traffic distribution.' },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={0.3 + i * 0.08}>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-coz-gold mt-2 shrink-0" />
                      <div>
                        <h4 className="text-h4 text-coz-black mb-1">{item.title}</h4>
                        <p className="text-[0.9375rem] text-coz-slate">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={0.3} direction="right">
              <div className="bg-coz-surface rounded-card-lg p-6 md:p-8">
                <div className="px-6 py-3 rounded-xl bg-white border-2 border-coz-gold text-center mb-4">
                  <span className="text-[0.9375rem] font-semibold text-coz-black">Cozanet Gateway</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'AEGIS Engine', color: '#6C2BD9' },
                    { name: 'AI Engine', color: '#3B82F6' },
                    { name: 'Automation Engine', color: '#10B981' },
                    { name: 'Blockchain Engine', color: '#FFB800' },
                  ].map((engine) => (
                    <div key={engine.name} className="bg-white border border-coz-border rounded-lg px-5 py-3" style={{ borderLeft: `3px solid ${engine.color}` }}>
                      <span className="text-[0.8125rem] font-medium text-coz-black">{engine.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Engines */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Service Engines" headline="Isolated domains. Unified platform." description="Each functional domain runs as an independent engine with its own data, logic, and scaling policies. No single bottleneck can bring down the platform." dark />
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {engines.map((eng, i) => (
              <ScrollReveal key={eng.title} delay={i * 0.12}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full" style={{ borderTop: `3px solid ${eng.color}` }}>
                  <h4 className="text-h4 text-white mb-3">{eng.title}</h4>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed mb-4">{eng.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {eng.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-pill bg-coz-charcoal-light border border-coz-border-dark text-[0.75rem] text-[#E5E5E5]">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Infrastructure */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Infrastructure" headline="Built for enterprise reliability." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {infrastructure.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
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

      {/* Tech Stack */}
      <section className="bg-coz-surface-dark py-section-sm">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <h3 className="text-h3 text-white mb-2">Our Stack</h3>
            <p className="text-[1rem] text-coz-slate-light mb-8">Technologies we use and love.</p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-8 md:gap-12">
            {techStack.map((cat, i) => (
              <ScrollReveal key={cat.category} delay={i * 0.1}>
                <div>
                  <span className="text-[0.75rem] font-medium text-coz-slate uppercase tracking-[0.08em] mb-3 block">{cat.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-3.5 py-1.5 rounded-pill bg-coz-charcoal border border-coz-border-dark text-[0.875rem] text-[#E5E5E5]">{item}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
