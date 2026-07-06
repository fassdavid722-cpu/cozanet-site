import ScrollReveal from '../../components/ScrollReveal';

export default function AegisCTASection() {
  return (
    <section className="py-section-lg" style={{ background: 'linear-gradient(135deg, #6C2BD9, #9B6EF3)' }}>
      <div className="max-w-content mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-h1 text-white">Experience the future of finance.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-body-lg text-white/80 mt-4">Join the waitlist for early access to AEGIS.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <button className="mt-8 inline-flex items-center px-10 py-4 rounded-button gradient-gold text-coz-black font-medium text-[1rem] hover:shadow-gold-glow hover:-translate-y-0.5 transition-all">
            Join Waitlist
          </button>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <p className="text-[0.875rem] text-white/50 mt-4">No spam. Unsubscribe anytime.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
