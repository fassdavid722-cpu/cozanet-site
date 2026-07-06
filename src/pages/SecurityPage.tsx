import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { useState } from 'react';
import { Lock, Fingerprint, KeyRound, FileSearch, Server, HeartHandshake, Copy, Check } from 'lucide-react';

const complianceBadges = ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'Penetration Tested'];

const pillars = [
  {
    icon: <Lock size={24} className="text-coz-gold" />,
    title: 'Encryption',
    body: 'All data is encrypted using industry-standard algorithms and protocols.',
    items: ['AES-256-GCM for data at rest', 'TLS 1.3 for data in transit', 'Hardware Security Module integration', 'Automatic key rotation every 90 days'],
  },
  {
    icon: <Fingerprint size={24} className="text-coz-gold" />,
    title: 'Identity & Access Management',
    body: 'Comprehensive identity verification and access control at every layer.',
    items: ['Multi-factor authentication (TOTP, WebAuthn, SMS)', 'Biometric verification support', 'Role-based access control (RBAC)', 'Continuous identity verification', 'Session management with automatic timeout'],
  },
  {
    icon: <KeyRound size={24} className="text-coz-gold" />,
    title: 'Key Management',
    body: 'Enterprise-grade key lifecycle management with hardware-backed security.',
    items: ['HSM-backed key storage (FIPS 140-2 Level 3)', 'Threshold signature schemes', 'Secure key derivation (PBKDF2, Argon2)', 'Automated key rotation and revocation', 'Multi-signature wallet support'],
  },
  {
    icon: <FileSearch size={24} className="text-coz-gold" />,
    title: 'Audit & Compliance',
    body: 'Complete visibility and accountability for all operations.',
    items: ['Immutable, cryptographically signed audit logs', 'Automated compliance monitoring', 'Quarterly third-party security assessments', 'Annual penetration testing by top firms', 'Real-time anomaly detection'],
  },
  {
    icon: <Server size={24} className="text-coz-gold" />,
    title: 'Infrastructure Security',
    body: 'Defense-in-depth network and infrastructure protection.',
    items: ['Network segmentation and micro-segmentation', 'DDoS protection with global scrubbing', 'Intrusion detection and prevention systems', 'Automated vulnerability scanning', '24/7 Security Operations Center'],
  },
  {
    icon: <HeartHandshake size={24} className="text-coz-gold" />,
    title: 'Responsible Disclosure',
    body: 'We believe in transparency and collaboration with the security community.',
    items: ['Active bug bounty program', 'Coordinated vulnerability disclosure policy', 'Security advisory publication', 'Rapid patch deployment (mean time: 24 hours)', 'Security@cozanet.io contact'],
  },
];

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified', statusColor: 'text-green-400', desc: 'Independent audit of our security, availability, and confidentiality controls. Audited annually by a Big Four firm.', date: 'Last audited: March 2025' },
  { name: 'ISO 27001', status: 'Certified', statusColor: 'text-green-400', desc: 'Information Security Management System certification covering all aspects of our security program.', date: 'Certified since: January 2025' },
  { name: 'GDPR', status: 'Compliant', statusColor: 'text-green-400', desc: 'Full compliance with EU General Data Protection Regulation. Data Processing Agreements available for enterprise customers.', date: 'Continuous compliance' },
  { name: 'Penetration Testing', status: 'Tested', statusColor: 'text-green-400', desc: 'Annual network and application penetration testing by certified security firms. Quarterly automated security scanning.', date: 'Last tested: February 2025' },
];

export default function SecurityPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('security@cozanet.io');
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
              We approach security with the same rigor as the world's most trusted technology companies. Every architectural decision, every line of code, and every operational process is designed to protect what matters most.
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
          <SectionHeader label="Security Program" headline="Defense in depth." />
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
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Certifications */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Certifications" headline="Independently verified." dark />
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 0.12}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-h4 text-white">{cert.name}</h4>
                    <span className={`text-[0.75rem] font-medium ${cert.statusColor}`}>{cert.status}</span>
                  </div>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed">{cert.desc}</p>
                  <p className="text-[0.8125rem] text-coz-slate mt-4">{cert.date}</p>
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
              We take all security reports seriously. If you've discovered a vulnerability, please contact our security team. We follow coordinated disclosure practices.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <code className="text-[1.25rem] font-mono text-coz-gold">security@cozanet.io</code>
              <button
                onClick={handleCopy}
                className="p-2 text-coz-slate hover:text-white transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
              </button>
            </div>
            <p className="text-[0.8125rem] text-coz-slate mt-3">We aim to respond within 24 hours.</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
