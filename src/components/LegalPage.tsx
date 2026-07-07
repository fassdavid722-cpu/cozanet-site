import ScrollReveal from '../components/ScrollReveal';

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  label: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({ label, title, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <ScrollReveal>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">
              {label} · Last updated {updated}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white">{title}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[680px] mt-4">{intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6 space-y-12">
          {sections.map((s) => (
            <ScrollReveal key={s.heading}>
              <h3 className="text-h4 text-coz-black mb-3">{s.heading}</h3>
              <p className="text-[1rem] text-coz-slate leading-relaxed whitespace-pre-line">{s.body}</p>
            </ScrollReveal>
          ))}
          <ScrollReveal>
            <div className="border-t border-coz-border pt-8">
              <p className="text-[0.9375rem] text-coz-slate">
                Questions about this policy? Contact us at{' '}
                <a href="mailto:info@cozanet.net" className="text-coz-gold hover:text-coz-gold-muted transition-colors">info@cozanet.net</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
