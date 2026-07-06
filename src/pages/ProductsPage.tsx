import ScrollReveal from '../components/ScrollReveal';
import { Shield, Brain, Workflow, Code2, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: <Shield size={28} className="text-coz-purple" />,
    title: 'AEGIS',
    subtitle: 'Financial Operating System',
    description: 'The flagship product. A complete financial infrastructure combining wallets, payments, AI-powered insights, portfolio management, and cross-chain operations — all unified in one elegant system.',
    features: ['Smart Wallets', 'Global Payments', 'AI Assistant', 'Portfolio Tracking', 'Cross-Chain Bridges'],
    href: '/aegis',
    accent: 'border-coz-purple',
  },
  {
    icon: <Brain size={28} className="text-coz-link" />,
    title: 'AI Platform',
    subtitle: 'Intelligent Products',
    description: 'Future intelligent products powered by artificial intelligence. Designed to augment human capability across financial analysis, automation, and decision-making.',
    features: ['Natural Language Queries', 'Predictive Analytics', 'Smart Recommendations', 'Pattern Recognition'],
    href: '/products',
    accent: 'border-coz-link',
  },
  {
    icon: <Workflow size={28} className="text-green-600" />,
    title: 'Automation',
    subtitle: 'Workflow Engine',
    description: 'Build, deploy, and manage automated workflows that connect your systems and eliminate repetitive tasks. From recurring payments to complex business logic.',
    features: ['Visual Workflow Builder', 'Event Triggers', 'Conditional Logic', 'Third-Party Integrations'],
    href: '/products',
    accent: 'border-green-500',
  },
  {
    icon: <Code2 size={28} className="text-purple-600" />,
    title: 'Developer Platform',
    subtitle: 'APIs, SDKs, Tools',
    description: 'Premium APIs, comprehensive SDKs, and world-class documentation. Built by engineers who understand what developers need.',
    features: ['REST APIs', 'WebSockets', 'SDKs (JS, Python, Go)', 'Sandbox Environment', 'Webhook Support'],
    href: '/developers',
    accent: 'border-purple-500',
  },
  {
    icon: <Building2 size={28} className="text-coz-gold" />,
    title: 'Enterprise',
    subtitle: 'Business Solutions',
    description: 'Scalable infrastructure and compliance-ready solutions for organizations operating at global scale. White-label options available.',
    features: ['Multi-Entity Management', 'Advanced Reporting', 'Compliance Tools', 'SLA Guarantees', 'Dedicated Support'],
    href: '/products',
    accent: 'border-coz-gold',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="text-label text-coz-gold uppercase">Products</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4 mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white max-w-[700px]">The Cozanet ecosystem.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[600px] mt-4">
              Products and platforms that work together to power the digital economy. Each product is powerful alone. Together, they're transformative.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* Product List */}
      <section className="bg-white py-section">
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.title} delay={i * 0.1}>
                <div className={`group bg-white border border-coz-border rounded-card-lg p-8 md:p-10 transition-all hover:shadow-card-hover hover:-translate-y-1 ${product.accent} border-t-[3px]`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="w-14 h-14 rounded-xl bg-coz-surface flex items-center justify-center shrink-0">
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h2 className="text-h3 text-coz-black">{product.title}</h2>
                        <span className="text-[0.875rem] text-coz-slate sm:ml-2">{product.subtitle}</span>
                      </div>
                      <p className="text-body-lg text-coz-slate max-w-[640px] mb-5">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((f) => (
                          <span key={f} className="px-3 py-1.5 rounded-pill bg-coz-surface text-[0.8125rem] text-coz-black">
                            {f}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={product.href}
                        className="inline-flex items-center gap-1 text-[0.875rem] font-medium text-coz-black group-hover:text-coz-gold transition-colors"
                      >
                        Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* CTA */}
      <section className="bg-coz-black py-section-lg">
        <div className="max-w-content mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-h3 text-white">Ready to explore?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/aegis" className="inline-flex items-center px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium hover:shadow-gold-glow transition-all">
                Explore AEGIS
              </Link>
              <Link to="/developers" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium hover:border-coz-slate-light transition-all">
                Developer Docs
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
