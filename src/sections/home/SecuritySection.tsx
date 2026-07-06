import { Lock, ShieldCheck, KeyRound, FileSearch, Server, HeartHandshake } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const pillars = [
  {
    icon: <Lock size={24} className="text-coz-gold" />,
    title: 'Encryption at Rest & Transit',
    desc: 'AES-256-GCM encryption for all data. TLS 1.3 for all network communications. Hardware security modules for key protection.',
  },
  {
    icon: <ShieldCheck size={24} className="text-coz-gold" />,
    title: 'Identity & Access',
    desc: 'Multi-factor authentication, biometric support, role-based access control, and continuous identity verification.',
  },
  {
    icon: <KeyRound size={24} className="text-coz-gold" />,
    title: 'Key Management',
    desc: 'HSM-backed key storage with automatic rotation, secure derivation, and threshold multi-signature schemes.',
  },
  {
    icon: <FileSearch size={24} className="text-coz-gold" />,
    title: 'Audit & Compliance',
    desc: 'Immutable audit trails, automated compliance monitoring, and regular third-party security assessments.',
  },
  {
    icon: <Server size={24} className="text-coz-gold" />,
    title: 'Infrastructure',
    desc: 'Defense in depth with network segmentation, DDoS protection, intrusion detection, and automated incident response.',
  },
  {
    icon: <HeartHandshake size={24} className="text-coz-gold" />,
    title: 'Responsible Disclosure',
    desc: 'We actively participate in responsible vulnerability disclosure and maintain a bug bounty program.',
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-coz-black py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Security"
          headline="Your trust is our most valuable asset."
          description="We approach security with the same rigor as the world's most trusted technology companies. Every line of code, every architectural decision, every operational process is designed to protect what matters most."
          dark
          maxWidth="680px"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h4 className="text-h4 text-white mb-3">{p.title}</h4>
                <p className="text-[1rem] text-coz-slate-light leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-body-lg text-coz-slate-light mb-6">
            View our security practices and compliance certifications.
          </p>
          <a
            href="/security"
            className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium text-[0.9375rem] hover:border-coz-slate-light transition-all"
          >
            Security Overview
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
