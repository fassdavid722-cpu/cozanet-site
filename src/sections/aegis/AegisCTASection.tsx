import ScrollReveal from '../../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function AegisCTASection() {
  return (
    <section className="py-section-lg" style={{ background: 'linear-gradient(135deg, #6C2BD9, #9B6EF3)' }}>
      <div className="max-w-content mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-h1 text-white">AEGIS by Cozanet.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-body-lg text-white/80 mt-4 max-w-[600px] mx-auto">
            AEGIS is a financial operating system moving money across Africa’s crypto, bank, and mobile
            money rails — programmable financial infrastructure and smart-routing layer for digital-asset transfers
            and settlement. Built by Cozanet.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="https://aegis.cozanet.net"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-button gradient-gold text-coz-black font-medium text-[1rem] hover:shadow-gold-glow hover:-translate-y-0.5 transition-all"
          >
            Open AEGIS
            <ArrowRight size={18} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
