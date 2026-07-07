import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Fingerprint, KeyRound, FileSearch, Server, HeartHandshake, Copy, Check } from 'lucide-react';

const complianceBadges = ['Engine Isolation', 'TLS 1.3', 'Row-Level Security', 'HD Key Derivation'];

const pillars = [
  {
    icon: <Lock size={24} className="text-coz-gold" />,
    title: 'Encryption',
    body: 'Data is encrypted using industry-standard protocols, both in transit and at rest.',
    items: ['TLS 1.3 for all data in transit', 'Encryption at rest provided by our managed database and hosting providers', 'Secrets and API keys stored in encrypted platform secret stores, never in source control or the frontend bundle'],
  },
  {
    icon: <Fingerprint size={24} className="text-coz-gold" />,
    title: 'Identity & Access',
    body: 'Every request is authenticated independently at more than one layer.',
    items: ['Supabase Auth-issued session tokens (JWT), verified by both the Gateway and the destination engine', 'Email verification via one-time codes before an account can be onboarded', 'Row-Level Security on the database so records are only visible to the account that owns them'],
  },
  {
    icon: <KeyRound size={24} className="text-coz-gold" />,
    title: 'Key Management',
    body: 'Wallet key material is isolated in a single, purpose-built service.',
    items: ['Wallet private keys are generated and held only inside the Wallet Vault engine via hierarchical-deterministic (HD) derivation', 'The Wallet Vault engine has no public-facing API — reachable only via internal, API-key-authenticated calls from other engines', 'Multi-signature wallet support is on our roadmap, not yet implemented'],
  },
  {
    icon: <FileSearch size={24} className="text-coz-gold" />,
    title: 'Audit & Data Integrity',
    body: 'State changes are tracked, not silently overwritten.',
    items: ['Every table supports optimistic locking (a version check on every write) and soft deletes, so records are archived rather than destroyed', 'Every request carries a correlation ID that traces it end-to-end through the Gateway and into the engine that handled it', 'A dedicated Audit Engine for immutable, cross-engine event logging is in development — see our Documentation page for current status'],
  },
  {
    icon: <Server size={24} className="text-coz-gold" />,
    title: 'Infrastructure',
    body: 'Every engine is deployed, scaled, and isolated independently.',
    items: ['Each engine owns its own database tables and its own deployment — no engine can reach into another engine\u2019s data directly', 'Engine-to-engine calls are authenticated with a dedicated credential per engine, not a shared secret', 'Hosted on infrastructure with built-in network-level protections (TLS termination, standard DDoS mitigation) at the platform layer'],
  },
  {
    icon: <HeartHandshake size={24} className="text-coz-gold" />,
    title: 'Responsible Disclosure',
    body: 'We want to hear about vulnerabilities before anyone else does.',
    items: ['Coordinated vulnerability disclosure — report privately, give us a chance to fix it before public disclosure', 'A formal bug bounty program is planned but not live yet', 'We aim to acknowledge reports within 48 hours'],
  },
];

const certifications = [
  { name: 'SOC 2 Type II', status: 'Planned', statusColor: 'text-coz-gold', desc: 'Independent audit of security, availability, and confidentiality controls. Not yet started — targeted once AEGIS reaches general availability.' },
  { name: 'ISO 27001', status: 'Planned', statusColor: 'text-coz-gold', desc: 'Information Security Management System certification. Not yet started.' },
  { name: 'GDPR', status: 'In Progress', statusColor: 'text-coz-gold', desc: 'We follow core GDPR principles today (data minimization, right to deletion on request) but have not completed a formal compliance review or published a Data Processing Agreement yet.' },
  { name: 'Third-Party Penetration Testing', status: 'Planned', statusColor: 'text-coz-gold', desc: 'No third-party penetration test has been performed yet. Internal security review is ongoing as each engine ships.' },
];

export default function SecurityPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('security@cozanet.net');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">Trust & Security</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white max-w-[800px]">Security is not a feature. It's the foundation.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[640px] mt-4">
              Every architectural decision is made with security first — mainly through isolating every sensitive capability behind its own boundary. Below is what's actually implemented today, and what's still on our roadmap.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="mt-10">
            <div className="flex flex-wrap gap-3">
              {complianceBadges.map((badge) => (
                <span key={badge} className="px-5 py-2.5 rounded-xl bg-coz-charcoal border border-coz-charcoal-light text-[0.875rem] text-[#E5E5E5]">{badge}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Security Pillars */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Security Program" headline="Defense in depth." description="Every mechanism below is live in the running system today — described plainly, without inflating what's still on the roadmap." />
          <div className="mt-16 space-y-4">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <details className="group bg-white border border-coz-border rounded-card overflow-hidden open:shadow-card-hover transition-shadow">
                  <summary className="flex items-center gap-4 p-6 md:p-8 cursor-pointer list-none hover:bg-coz-surface/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-coz-gold-light flex items-center justify-center shrink-0">
                      {pillar.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h4 text-coz-black">{pillar.title}</h3>
                      <p className="text-[0.9375rem] text-coz-slate mt-1">{pillar.body}</p>
                    </div>
                    <span className="text-coz-slate group-open:rotate-180 transition-transform shrink-0 text-xl">▼</span>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="grid sm:grid-cols-2 gap-3 ml-16">
                      {pillar.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-coz-gold mt-2 shrink-0" />
                          <span className="text-[0.9375rem] text-coz-slate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.15}>
            <p className="text-[0.8125rem] text-coz-slate mt-8 max-w-[720px]">
              For the full technical breakdown — engine architecture, API conventions, and where each engine stands — see our <Link to="/documentation" className="text-coz-gold hover:text-coz-gold-muted transition-colors">Documentation</Link> page.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Certifications */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Certifications & Audits" headline="Honest about where we are." dark description="We'd rather show you an accurate roadmap than an inflated badge wall. Nothing below is claimed as complete until it actually is." />
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.12}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-h4 text-white">{cert.name}</h4>
                    <span className={`text-[0.75rem] font-medium uppercase tracking-[0.04em] px-2.5 py-1 rounded-pill bg-coz-charcoal-light ${cert.statusColor}`}>{cert.status}</span>
                  </div>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed">{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-surface" />

      {/* Contact Security */}
      <section className="bg-coz-surface-dark py-section">
        <div className="max-w-content-narrow mx-auto px-6 text-center">
          <ScrollReveal>
            <h3 className="text-h3 text-white">Report a security issue</h3>
            <p className="text-[1rem] text-coz-slate-light mt-4 max-w-[500px] mx-auto">
              We take all security reports seriously. If you've discovered a vulnerability, please contact us directly. We follow coordinated disclosure practices and aim to acknowledge reports within 48 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="mailto:security@cozanet.net" className="text-[1.25rem] font-mono text-coz-gold hover:text-coz-gold-muted transition-colors">security@cozanet.net</a>
              <button
                onClick={handleCopy}
                className="p-2 text-coz-slate hover:text-white transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
