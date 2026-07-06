import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  label: string;
  headline: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
  maxWidth?: string;
}

export default function SectionHeader({
  label,
  headline,
  description,
  dark = false,
  centered = false,
  maxWidth = '640px',
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <ScrollReveal>
        <span
          className={`text-label uppercase ${
            dark ? 'text-coz-gold' : 'text-coz-slate'
          }`}
        >
          {label}
        </span>
        <div
          className={`w-10 h-0.5 mt-4 mb-6 ${
            dark ? 'bg-coz-gold' : 'bg-coz-gold'
          } ${centered ? 'mx-auto' : ''}`}
        />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2
          className={`text-h2 ${dark ? 'text-white' : 'text-coz-black'}`}
          style={centered ? { maxWidth, margin: '0 auto' } : { maxWidth }}
        >
          {headline}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-body-lg mt-4 ${
              dark ? 'text-coz-slate-light' : 'text-coz-slate'
            }`}
            style={centered ? { maxWidth, margin: '16px auto 0' } : { maxWidth, marginTop: '16px' }}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
