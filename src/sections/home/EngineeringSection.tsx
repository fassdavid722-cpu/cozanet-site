import { Lock, Fingerprint, KeyRound, ClipboardCheck } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const values = [
  {
    icon: <Lock size={24} className="text-coz-gold" />,
    title: 'Encryption',
    body: 'End-to-end encryption for all data in transit and at rest. AES-256-GCM with hardware security module integration.',
  },
  {
    icon: <Fingerprint size={24} className="text-coz-gold" />,
    title: 'Identity',
    body: 'Multi-factor authentication, biometric verification, and zero-trust identity verification for every access request.',
  },
  {
    icon: <KeyRound size={24} className="text-coz-gold" />,
    title: 'Key Management',
    body: 'HSM-backed key management with automatic rotation, secure key derivation, and threshold signature schemes.',
  },
  {
    icon: <ClipboardCheck size={24} className="text-coz-gold" />,
    title: 'Audit Trails',
    body: 'Immutable, cryptographically verifiable audit logs for every transaction, access, and system change.',
  },
];

const badges = ['SOC 2', 'ISO 27001', 'GDPR Compliant', 'Penetration Tested'];

export default function EngineeringSection() {
  return (
    <section className="bg-coz-surface-dark py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Engineering"
          headline="Security-first. Always."
          description="We don't treat security as a feature. We treat it as the foundation of everything we build."
          dark
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.12}>
              <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h4 className="text-h4 text-white mb-3">{v.title}</h4>
                <p className="text-[1rem] text-coz-slate-light leading-relaxed">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Bar */}
        <ScrollReveal delay={0.5} className="mt-20 text-center">
          <h3 className="text-h3 text-white mb-8">Enterprise-grade security standards</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-5 py-2.5 rounded-pill bg-coz-charcoal border border-coz-border-dark text-[0.875rem] text-coz-gold"
              >
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
