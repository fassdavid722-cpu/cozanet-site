import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: { label: string; href: string };
  dark?: boolean;
  topBorder?: string;
  tags?: string[];
}

export default function FeatureCard({
  icon,
  title,
  description,
  link,
  dark = false,
  topBorder,
  tags,
}: FeatureCardProps) {
  return (
    <div
      className={`group rounded-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-coz-charcoal border border-coz-charcoal-light hover:shadow-card-dark'
          : 'bg-white border border-coz-border hover:shadow-card-hover hover:border-[#D1D1D1]'
      } ${topBorder ? `border-t-[3px] border-t-[${topBorder}]` : ''}`}
      style={topBorder ? { borderTopColor: topBorder } : {}}
    >
      <div className="mb-5">{icon}</div>
      <h3
        className={`text-h4 mb-2 ${dark ? 'text-white' : 'text-coz-black'}`}
      >
        {title}
      </h3>
      <p
        className={`text-[1rem] leading-relaxed ${
          dark ? 'text-coz-slate-light' : 'text-coz-slate'
        }`}
      >
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-[0.75rem] px-3 py-1 rounded-pill ${
                dark
                  ? 'bg-coz-charcoal-light border border-coz-border-dark text-[#E5E5E5]'
                  : 'bg-coz-surface text-coz-slate'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <Link
          to={link.href}
          className={`inline-flex items-center gap-1 mt-4 text-[0.875rem] font-medium transition-colors ${
            dark
              ? 'text-coz-gold hover:text-coz-gold-muted'
              : 'text-coz-black hover:text-coz-gold'
          }`}
        >
          {link.label}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      )}
    </div>
  );
}
