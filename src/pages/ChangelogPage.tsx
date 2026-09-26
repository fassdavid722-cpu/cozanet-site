import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const entries = [
  {
    period: 'September 2026',
    items: [
      { title: 'Security audit pass', desc: 'Authentication guards and rate limiting added to AEGIS API routes; leaked deployment artifacts purged and verified across all deployment storage.' },
      { title: 'Google sign-in reliability fix', desc: 'Hybrid popup/redirect flow with native account picker on Android deployed to production.' },
      { title: 'Cozanet AI memory system live', desc: 'Conversation persistence and extracted user facts, deployed in production inside AEGIS.' },
      { title: 'AEGIS Android app built', desc: 'Debug APK and unsigned release AAB produced via CI; on-device verification underway.' },
      { title: 'Website discoverability overhaul', desc: 'Per-page metadata and pre-rendered content for all routes, sitemap, robots.txt, structured data, and an honest roadmap and changelog.' },
    ],
  },
  {
    period: 'July 2026',
    items: [
      { title: 'AEGIS Phase One live', desc: 'Custodial wallets, swaps, and treasury on BNB Smart Chain deployed to production.' },
      { title: 'Treasury fee ledger', desc: 'Fee calculation via the Treasury Engine, on-chain fee collection, ledger recording, and audit events.' },
      { title: 'Notification engine live', desc: 'In-app notifications persisted per channel and transactional email delivery.' },
      { title: 'Cozanet AI orchestrator', desc: 'Intent-routing architecture across specialized AI engines (wallet, payments, security, analytics, knowledge, automation) implemented.' },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <section className="bg-white pt-[clamp(80px,10vh,140px)] pb-section">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-gold-light text-coz-gold-dark mb-6">
            Changelog
          </span>
          <h1 className="text-h1 text-coz-black">Development milestones</h1>
          <p className="text-body-lg text-coz-slate max-w-[680px] mt-4">
            A timestamped record of genuine development milestones. Only real events are
            listed. See <Link to="/roadmap" className="text-coz-gold-dark hover:underline underline-offset-4">the roadmap</Link> for
            what is live, in development, and planned.
          </p>
        </ScrollReveal>

        <div className="mt-12 max-w-[760px]">
          {entries.map((entry, ei) => (
            <ScrollReveal key={entry.period} delay={ei * 0.08}>
              <div className="mb-12">
                <h2 className="text-h3 text-coz-black mb-6 pb-3 border-b border-coz-surface">{entry.period}</h2>
                <div className="space-y-5">
                  {entry.items.map((item) => (
                    <div key={item.title} className="p-5 rounded-xl bg-coz-surface">
                      <h3 className="text-[1.0625rem] font-medium text-coz-black mb-1.5">{item.title}</h3>
                      <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
