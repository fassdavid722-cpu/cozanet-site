import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';
import { DollarSign, ShieldCheck, Scale, ArrowLeftRight, BookOpenCheck } from 'lucide-react';

const scaffoldPoints = [
  {
    icon: <Scale size={20} />,
    title: 'Mandatory cost-comparison',
    desc: 'Before selecting Circle Arc / USDC for a transaction, the Smart Router runs a cost-comparison between the pure fiat route and the blockchain route (on-ramp + network + off-ramp), and picks whichever is cheapest or fastest for that corridor.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Automatic failover',
    desc: 'If a bank or mobile money rail is down, locked, or experiencing a network issue, the Smart Router can re-attempt the same transaction through Circle Arc / USDC instead — invisible to the end user, within the same transaction lifecycle.',
  },
  {
    icon: <ArrowLeftRight size={20} />,
    title: 'Licensed off-ramp handoff',
    desc: 'Once USDC settlement completes on Arc, AEGIS hands off to a licensed off-ramp partner to deliver local fiat to the receiver. AEGIS never appears as the legal originator of the final fiat transfer — the licensed partner always is.',
  },
  {
    icon: <BookOpenCheck size={20} />,
    title: 'Ledger & reconciliation',
    desc: 'Every Circle Arc / USDC leg produces a double-entry record in the Internal Ledger, exactly like BNB Smart Chain and Stellar legs, reconciled against Circle\u2019s on-chain USDC events and API transaction receipts.',
  },
];

export default function CircleArcSection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Intro */}
        <SectionHeader
          label="Settlement Rail"
          headline="Circle Arc & USDC: a regulated digital-dollar rail."
          description="Circle Arc and USDC are one of three settlement and liquidity rails available to the AEGIS Smart Router — alongside BNB Smart Chain and Stellar — used as a regulated digital-dollar path and as an automatic failover when other rails are unavailable."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-[800px]">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-coz-border rounded-card p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-coz-link">
                <DollarSign size={22} />
              </div>
              <h4 className="text-h4 text-coz-black mb-2">A regulated digital-dollar liquidity rail</h4>
              <p className="text-[1rem] text-coz-slate leading-relaxed">
                Used in hybrid settlement paths — for example: local currency balance in the AEGIS Ledger
                → USDC on Arc (liquidity adapter) → licensed off-ramp partner → receiver's local bank
                account. Selected only when it's the cheapest or fastest legitimate path for the corridor.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-white border border-coz-border rounded-card p-6 md:p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 text-coz-link">
                <ShieldCheck size={22} />
              </div>
              <h4 className="text-h4 text-coz-black mb-2">A failover rail, not just an alternative</h4>
              <p className="text-[1rem] text-coz-slate leading-relaxed">
                If a bank or mobile money rail is down or locked, the Smart Router can route through
                Circle Arc / USDC instead, so the transfer still completes. This routing decision is
                automatic and invisible to the end user.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Phase One / honesty notice */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 max-w-[800px]">
            <div className="flex items-center gap-3 px-5 py-4 rounded-card bg-coz-gold-light border border-coz-gold/30">
              <span className="w-2 h-2 rounded-full bg-coz-gold animate-pulse-dot shrink-0" />
              <p className="text-[0.9375rem] text-coz-black leading-relaxed">
                <span className="font-medium">Architecture-defined, not yet live.</span>{' '}
                AEGIS is currently in Phase One, a wallet-focused stage. The full multi-rail Smart Router —
                including a live Circle Arc / USDC settlement path — is the architecture AEGIS is built
                toward, not yet a fully live production flow.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Why Circle Arc — scaffolding points */}
        <div className="mt-20">
          <SectionHeader
            label="Why Circle Arc?"
            headline="Real-world settlement that expands USDC utility."
            description="AEGIS's architecture already specifies Circle Arc / USDC as aligned with Circle's developer-grant priorities: real-world payment and settlement flows, not a bolt-on for a grant application."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-[800px]">
          {scaffoldPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="group bg-white border border-coz-border rounded-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-1 h-full">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-coz-link">
                  {point.icon}
                </div>
                <h4 className="text-[1.0625rem] font-medium text-coz-black mb-2">{point.title}</h4>
                <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{point.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pull quote — website / grant one-liner */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="max-w-[760px] mx-auto border-l-2 border-coz-link pl-6">
            <p className="text-[1.1875rem] text-coz-black leading-relaxed italic">
              "AEGIS, Cozanet's smart-router financial infrastructure, uses Circle Arc and USDC as one of
              its core settlement rails, enabling reliable cross-border value transfer that automatically
              fails over across banking, mobile money, and blockchain rails — so a transaction can still
              complete even when a single rail is unavailable."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
