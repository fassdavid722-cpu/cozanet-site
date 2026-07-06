import { Shield, Brain, Workflow, Code2, Building2 } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader';
import ScrollReveal from '../../components/ScrollReveal';

const products = [
  {
    icon: <Shield size={24} className="text-coz-gold" />,
    title: 'AEGIS',
    subtitle: 'Financial Operating System',
    description: 'Wallets, payments, business finance, AI assistant, portfolio management, and cross-chain infrastructure.',
    link: { label: 'Explore AEGIS', href: '/aegis' },
    topBorder: '#6C2BD9',
  },
  {
    icon: <Brain size={24} className="text-coz-gold" />,
    title: 'AI Platform',
    subtitle: 'Intelligent Products',
    description: 'Future intelligent products powered by artificial intelligence, designed to augment human capability.',
    link: { label: 'Learn More', href: '/products' },
  },
  {
    icon: <Workflow size={24} className="text-coz-gold" />,
    title: 'Automation',
    subtitle: 'Workflow Engine',
    description: 'Build, deploy, and manage automated workflows that connect your systems and eliminate repetitive tasks.',
    link: { label: 'Learn More', href: '/products' },
  },
  {
    icon: <Code2 size={24} className="text-coz-gold" />,
    title: 'Developer Platform',
    subtitle: 'APIs, SDKs, Tools',
    description: 'Premium APIs, SDKs, and developer tools designed for engineers who demand reliability and elegance.',
    link: { label: 'Explore Docs', href: '/developers' },
  },
  {
    icon: <Building2 size={24} className="text-coz-gold" />,
    title: 'Enterprise',
    subtitle: 'Business Solutions',
    description: 'Scalable infrastructure and compliance-ready solutions for organizations operating at global scale.',
    link: { label: 'Learn More', href: '/products' },
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-coz-black py-section">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Products"
          headline="One ecosystem. Infinite possibilities."
          description="Products and platforms that work together to power the digital economy."
          dark
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {products.map((product, i) => (
            <ScrollReveal key={product.title} delay={i * 0.1}>
              <div
                className="group bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-dark h-full"
                style={product.topBorder ? { borderTop: `3px solid ${product.topBorder}` } : {}}
              >
                <div className="w-12 h-12 rounded-xl bg-coz-gold-light/10 flex items-center justify-center mb-5">
                  {product.icon}
                </div>
                <h3 className="text-h4 text-white mb-1">{product.title}</h3>
                <p className="text-[0.875rem] text-coz-slate-light mb-3">{product.subtitle}</p>
                <p className="text-[1rem] text-coz-slate-light/80 leading-relaxed mb-4">
                  {product.description}
                </p>
                {product.link && (
                  <a
                    href={product.link.href}
                    className="inline-flex items-center gap-1 text-[0.875rem] font-medium text-coz-gold hover:text-coz-gold-muted transition-colors"
                  >
                    {product.link.label}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
