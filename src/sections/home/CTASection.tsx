import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

export default function CTASection() {
  return (
    <section className="bg-coz-black py-section-lg">
      <div className="max-w-content mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-h1 text-white">Ready to build the future?</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-body-lg text-coz-slate-light max-w-[560px] mx-auto mt-6">
            Join the companies and developers building on Cozanet's intelligent infrastructure.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/developers"
              className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/company"
              className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium text-[0.9375rem] hover:border-coz-slate-light transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="text-[0.875rem] text-coz-slate mt-6">
            Free to get started. Scale when you're ready.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
