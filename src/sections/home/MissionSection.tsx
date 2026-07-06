import { motion } from 'framer-motion';
import ScrollReveal from '../../components/ScrollReveal';
import { Link } from 'react-router-dom';

const ecosystemProducts = [
  { name: 'AEGIS', href: '/aegis', accent: true },
  { name: 'AI Platform', href: '/products', accent: false },
  { name: 'Automation', href: '/products', accent: false },
  { name: 'Developer Platform', href: '/developers', accent: false },
  { name: 'Enterprise Platform', href: '/products', accent: false },
];

const infrastructure = ['APIs', 'SDKs', 'Gateway', 'Microservices', 'Blockchain'];

export default function MissionSection() {
  return (
    <section className="bg-white py-section">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left: Label */}
          <ScrollReveal>
            <span className="text-label text-coz-slate uppercase">Our Mission</span>
            <div className="w-10 h-0.5 bg-coz-gold mt-4" />
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-h2 text-coz-black max-w-[720px]">
                Cozanet exists to build intelligent digital infrastructure that connects artificial intelligence, financial technology, and automation into a single, seamless ecosystem.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[1rem] leading-relaxed text-coz-slate max-w-[560px] mt-6">
                We are not building one application. We are building an ecosystem where intelligent software, financial infrastructure, and automation work together to solve real problems for real people.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Ecosystem Diagram */}
        <ScrollReveal delay={0.3} className="mt-20">
          <div className="relative max-w-[900px] mx-auto">
            {/* Center node */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-8 py-4 rounded-card border-2 border-coz-gold bg-white shadow-card"
              >
                <span className="text-[1.125rem] font-semibold text-coz-black tracking-wide">COZANET</span>
              </motion.div>
            </div>

            {/* Connecting lines from center to products */}
            <div className="hidden lg:block absolute left-1/2 top-[60px] w-0.5 h-8 bg-coz-border -translate-x-1/2" />

            {/* Product nodes */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {ecosystemProducts.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="hidden lg:block w-0.5 h-6 bg-coz-border mb-2" />
                  <Link
                    to={product.href}
                    className={`w-full text-center px-4 py-3 rounded-card border text-[0.875rem] font-medium transition-all hover:shadow-card ${
                      product.accent
                        ? 'border-coz-gold bg-coz-gold-light text-coz-gold-dark'
                        : 'border-coz-border bg-white text-coz-black hover:border-coz-gold-muted'
                    }`}
                  >
                    {product.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CZN Token */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="w-0.5 h-6 bg-coz-border" />
              <Link
                to="/czn"
                className="px-6 py-3 rounded-card border-2 border-coz-gold bg-coz-gold-light text-coz-gold-dark font-semibold text-[0.9375rem] hover:shadow-gold-glow transition-shadow"
              >
                CZN — Ecosystem Token
              </Link>
            </motion.div>

            {/* Infrastructure layer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-coz-surface rounded-card-lg p-6"
            >
              <div className="text-center text-[0.75rem] font-medium tracking-[0.1em] uppercase text-coz-slate mb-4">
                Infrastructure Layer
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {infrastructure.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-pill bg-white border border-coz-border text-[0.875rem] text-coz-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
