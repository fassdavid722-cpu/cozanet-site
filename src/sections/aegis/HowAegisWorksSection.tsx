import { MousePointerClick, Receipt, Route, ShieldCheck } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const steps = [
  {
    icon: <MousePointerClick size={22} />,
    num: '01',
    title: 'Request',
    desc: 'A user states what to send, how much, and where it must arrive. No rail selection and no chain knowledge required.',
  },
  {
    icon: <Receipt size={22} />,
    num: '02',
    title: 'Quote',
    desc: 'The Payment Engine prices the transfer up front: one firm fee with a minimum floor, quoted before the user commits. Nothing is added mid-route.',
  },
  {
    icon: <Route size={22} />,
    num: '03',
    title: 'Route',
    desc: 'The Smart Router computes the cheapest reliable route across supported rails, and falls back to another provider when one degrades.',
  },
  {
    icon: <ShieldCheck size={22} />,
    num: '04',
    title: 'Settle & Confirm',
    desc: 'The transfer executes and settles on-chain, and the ledger records a truthful delivery state the user can verify. No silent "pending" outcomes.',
  },
];

export default function HowAegisWorksSection() {
  return (
    <section id="how-it-works" className="bg-coz-surface py-section scroll-mt-[72px]">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="How AEGIS Works"
          headline="One request in. One settled outcome out."
          description="From a single user request to a verified settlement, every transfer follows the same four-step path through the AEGIS engines."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="group bg-white border border-coz-border rounded-card p-6 h-full transition-all hover:shadow-card-hover hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-coz-purple-surface flex items-center justify-center text-coz-purple">
                    {s.icon}
                  </div>
                  <span className="text-[2rem] font-semibold leading-none text-coz-border-dark select-none">
                    {s.num}
                  </span>
                </div>
                <h4 className="text-h4 text-coz-black mb-2">{s.title}</h4>
                <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <p className="text-[0.875rem] text-coz-slate mt-8 max-w-[680px]">
            BNB Smart Chain is the live production rail today; Stellar is in integration and
            Circle Arc / USDC is architecture-planned. Fee and routing behavior applies to
            supported rails as each becomes live.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
