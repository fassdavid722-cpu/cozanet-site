import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const tiers = [
  {
    label: 'Live today',
    color: 'bg-emerald-100 text-emerald-800',
    items: [
      { title: 'AEGIS Phase One', desc: 'Custodial wallets, token swaps, and the treasury fee ledger on BNB Smart Chain — deployed and usable at aegis.cozanet.net.' },
      { title: 'Cozanet AI assistant', desc: 'In-app assistant with persistent conversation memory and extracted user facts, live in production.' },
      { title: 'Notifications', desc: 'In-app notifications and transactional email via the notification engine.' },
      { title: 'Website & documentation', desc: 'This site, the security page, and the public GitHub organization.' },
    ],
  },
  {
    label: 'In development',
    color: 'bg-amber-100 text-amber-800',
    items: [
      { title: 'Multi-rail Smart Router', desc: 'Banking rails, mobile money, Stellar, and Circle Arc/USDC settlement — routing transfers through the cheapest or fastest rail.' },
      { title: 'AEGIS Android app', desc: 'Built (debug APK and release AAB); in on-device testing. Play Store release pending.' },
      { title: 'Developer SDK & public API docs', desc: 'Gateway-routed APIs documented for third-party integration.' },
    ],
  },
  {
    label: 'Planned',
    color: 'bg-blue-100 text-blue-800',
    items: [
      { title: 'CZN token mechanics', desc: 'Fee discounts paid in CZN, platform rewards, and governance participation. Design goals — not current functionality.' },
      { title: 'Non-custodial wallet option', desc: 'Alongside the custodial default. Requires a published migration plan first; existing wallets will never be orphaned.' },
      { title: 'Additional rails & coverage', desc: 'More settlement rails and broader regional coverage as the Smart Router matures.' },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <section className="bg-white pt-[clamp(80px,10vh,140px)] pb-section">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-gold-light text-coz-gold-dark mb-6">
            Roadmap
          </span>
          <h1 className="text-h1 text-coz-black">What's live, in development, and planned</h1>
          <p className="text-body-lg text-coz-slate max-w-[680px] mt-4">
            Cozanet separates what exists from what is being built. Dates are not published
            until features ship — progress is recorded in the{' '}
            <Link to="/changelog" className="text-coz-gold-dark hover:underline underline-offset-4">changelog</Link>.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-10">
          {tiers.map((tier, ti) => (
            <ScrollReveal key={tier.label} delay={ti * 0.1}>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`inline-block text-[0.75rem] font-medium px-3 py-1 rounded-full ${tier.color}`}>{tier.label}</span>
                  <div className="h-px flex-1 bg-coz-surface" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {tier.items.map((item) => (
                    <div key={item.title} className="p-6 rounded-xl bg-coz-surface">
                      <h3 className="text-[1.0625rem] font-medium text-coz-black mb-2">{item.title}</h3>
                      <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-6 rounded-xl bg-coz-surface max-w-[680px]">
            <p className="text-[0.875rem] text-coz-slate">
              Nothing on this page is a promise of future availability or performance. It
              describes intent and current work only. Explore{' '}
              <Link to="/aegis" className="text-coz-gold-dark hover:underline underline-offset-4">AEGIS</Link>, read the{' '}
              <Link to="/czn" className="text-coz-gold-dark hover:underline underline-offset-4">CZN token page</Link>, or review{' '}
              <Link to="/security" className="text-coz-gold-dark hover:underline underline-offset-4">the security model</Link>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
