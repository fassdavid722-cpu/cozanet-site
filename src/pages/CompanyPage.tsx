import ScrollReveal from '../components/ScrollReveal';
import { useState } from 'react';
import { Globe, Cpu, TrendingUp, Heart, BookOpen, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const values = [
  { num: '01', title: 'Engineering Excellence', desc: 'We believe the best products come from the best engineering. We invest in clean architecture, thorough testing, and continuous refactoring. Technical debt is paid early. Quality is non-negotiable.' },
  { num: '02', title: 'Security First', desc: "Security isn't a feature we add later. It's the foundation we build on. Every decision starts with 'is this secure?' We protect our users' data and assets as if they were our own — because they are." },
  { num: '03', title: 'Long-Term Thinking', desc: 'We make decisions on a decade horizon, not a quarterly cycle. We prioritize sustainable growth over short-term metrics. We build for the future, even when it means moving slower today.' },
  { num: '04', title: 'User Obsession', desc: 'We start with the user and work backwards. Every feature, every interface, every API endpoint is designed with the person using it in mind. We listen more than we talk.' },
  { num: '05', title: 'Radical Transparency', desc: "We share what we know, admit what we don't, and communicate openly — even when it's uncomfortable. Transparency builds trust, and trust is our most valuable asset." },
  { num: '06', title: 'Continuous Learning', desc: 'Technology changes fast. We change faster. Every team member is expected to learn, teach, and push the boundaries of what\'s possible. Curiosity is our competitive advantage.' },
];

const jobs = [
  { title: 'Senior Backend Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Frontend Engineer (Design Systems)', location: 'Remote', type: 'Full-time' },
  { title: 'Blockchain Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
  { title: 'DevOps Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Security Engineer', location: 'Remote', type: 'Full-time' },
];

const benefits = [
  { icon: <Globe size={22} className="text-coz-gold" />, title: 'Remote First', desc: 'Work from anywhere. Async-friendly culture. Results over hours.' },
  { icon: <Cpu size={22} className="text-coz-gold" />, title: 'Cutting-Edge Tech', desc: 'Work with modern tools and challenging technical problems.' },
  { icon: <TrendingUp size={22} className="text-coz-gold" />, title: 'Equity', desc: "Meaningful ownership in what we're building together." },
  { icon: <Heart size={22} className="text-coz-gold" />, title: 'Health & Wellness', desc: 'Comprehensive health coverage and wellness stipend.' },
  { icon: <BookOpen size={22} className="text-coz-gold" />, title: 'Learning Budget', desc: 'Annual budget for courses, conferences, and books.' },
  { icon: <Calendar size={22} className="text-coz-gold" />, title: 'Flexible Time Off', desc: 'Unlimited PTO with a minimum days-off policy.' },
];

const services = [
  { name: 'AEGIS Platform', status: 'Operational' },
  { name: 'API Gateway', status: 'Operational' },
  { name: 'Blockchain Infrastructure', status: 'Operational' },
  { name: 'AI Services', status: 'Operational' },
  { name: 'Automation Engine', status: 'Operational' },
  { name: 'Developer Portal', status: 'Operational' },
  { name: 'Documentation', status: 'Operational' },
];

export default function CompanyPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: 'General', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">Company</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white max-w-[800px]">We build technology that matters.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[640px] mt-4">
              Cozanet was founded on a simple belief: the future belongs to companies that can connect intelligence, finance, and automation into seamless experiences. We're building that future — one product, one protocol, one line of code at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Mission & Vision */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <ScrollReveal>
            <span className="text-label text-coz-slate uppercase">Mission</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h2 text-coz-black">
              To build intelligent digital infrastructure that connects AI, finance, and automation into a single, seamless ecosystem.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[1rem] text-coz-slate leading-relaxed mt-6">
              We believe the next generation of technology won't come from siloed applications. It will come from ecosystems where intelligent software, financial infrastructure, and automation work together to solve real problems for real people.
            </p>
          </ScrollReveal>

          <div className="my-16 border-t border-coz-border" />

          <ScrollReveal>
            <span className="text-label text-coz-slate uppercase">Vision</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h2 text-coz-black">
              A world where intelligent infrastructure is as accessible as electricity.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[1rem] text-coz-slate leading-relaxed mt-6">
              We envision a future where any developer, business, or individual can tap into world-class AI, financial tools, and automation without needing to build them from scratch. Where technology adapts to people, not the other way around. Where the digital economy works seamlessly across borders, blockchains, and boundaries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Values */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="Values" headline="How we work." dark />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {values.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 0.1}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 h-full border-t-[2px] border-t-coz-gold">
                  <span className="text-[0.75rem] text-coz-slate">{v.num}</span>
                  <h4 className="text-h4 text-white mt-3 mb-3">{v.title}</h4>
                  <p className="text-[1rem] text-coz-slate-light leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Careers */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="text-label text-coz-slate uppercase">Careers</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h2 text-coz-black">Build with us.</h2>
            <p className="text-body-lg text-coz-slate max-w-[640px] mt-4">
              We're looking for people who want to build technology that matters. Engineers, designers, product thinkers, and operators who care about craft, quality, and impact.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-3">
            {jobs.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.06}>
                <div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-coz-surface border border-coz-border rounded-xl px-6 py-5 transition-all hover:bg-white hover:shadow-card cursor-pointer">
                  <h4 className="text-h4 text-coz-black flex-1">{job.title}</h4>
                  <span className="text-[0.875rem] text-coz-slate">{job.location}</span>
                  <span className="text-[0.875rem] text-coz-slate">{job.type}</span>
                  <span className="text-[0.875rem] font-medium text-coz-black group-hover:text-coz-gold transition-colors">
                    Apply →
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16">
            <ScrollReveal>
              <h3 className="text-h3 text-coz-black mb-8">Why Cozanet?</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-coz-gold-light flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-h4 text-coz-black mb-1">{b.title}</h4>
                      <p className="text-[0.875rem] text-coz-slate">{b.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* Contact */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-[40%_60%] gap-12">
            <div>
              <ScrollReveal>
                <span className="text-label text-coz-gold uppercase">Contact</span>
                <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-h2 text-white">Let's talk.</h2>
                <p className="text-body-lg text-coz-slate-light mt-4">
                  Whether you're a developer, enterprise customer, investor, or potential partner — we'd love to hear from you.
                </p>
              </ScrollReveal>
              <div className="mt-8 space-y-3">
                {[
                  { label: 'hello@cozanet.io', gold: true },
                  { label: 'support@cozanet.io', gold: false },
                  { label: 'security@cozanet.io', gold: false },
                  { label: 'press@cozanet.io', gold: false },
                ].map((email) => (
                  <ScrollReveal key={email.label} delay={0.2}>
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[0.9375rem] ${email.gold ? 'text-coz-gold' : 'text-coz-slate-light'}`}>{email.label}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={0.2} direction="right">
              <form onSubmit={handleSubmit} className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-8 md:p-10">
                <div className="space-y-5">
                  <div>
                    <label className="block text-[0.8125rem] text-coz-slate-light mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111111] border border-coz-charcoal-light rounded-lg px-4 py-3 text-white text-[0.9375rem] placeholder:text-coz-slate focus:border-coz-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] text-coz-slate-light mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#111111] border border-coz-charcoal-light rounded-lg px-4 py-3 text-white text-[0.9375rem] placeholder:text-coz-slate focus:border-coz-gold focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] text-coz-slate-light mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#111111] border border-coz-charcoal-light rounded-lg px-4 py-3 text-white text-[0.9375rem] focus:border-coz-gold focus:outline-none transition-colors"
                    >
                      <option>General</option>
                      <option>Partnership</option>
                      <option>Enterprise</option>
                      <option>Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.8125rem] text-coz-slate-light mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#111111] border border-coz-charcoal-light rounded-lg px-4 py-3 text-white text-[0.9375rem] placeholder:text-coz-slate focus:border-coz-gold focus:outline-none transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-surface" />

      {/* Status */}
      <section className="bg-coz-surface-dark py-section-sm">
        <div className="max-w-content-narrow mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-pill bg-coz-charcoal border border-coz-charcoal-light">
              <span className="relative flex h-3 w-3">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-h4 text-white">All Systems Operational</span>
            </div>
            <p className="text-[0.8125rem] text-coz-slate mt-3">Last updated: just now</p>
          </ScrollReveal>

          <div className="mt-8 max-w-[400px] mx-auto space-y-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.05}>
                <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-coz-charcoal/50">
                  <span className="text-[0.9375rem] text-white">{s.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[0.8125rem] text-green-400">{s.status}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5} className="mt-6">
            <a href="#" className="text-[0.875rem] font-medium text-coz-gold hover:text-coz-gold-muted transition-colors">
              View detailed status →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
