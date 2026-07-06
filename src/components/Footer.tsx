import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'AEGIS', href: '/aegis' },
    { label: 'AI Platform', href: '/products' },
    { label: 'Automation', href: '/products' },
    { label: 'Developer Platform', href: '/developers' },
    { label: 'Enterprise', href: '/products' },
  ],
  resources: [
    { label: 'Documentation', href: '/developers' },
    { label: 'API Reference', href: '/developers' },
    { label: 'SDKs', href: '/developers' },
    { label: 'GitHub', href: '#' },
    { label: 'Status Page', href: '/company' },
  ],
  company: [
    { label: 'Mission & Vision', href: '/company' },
    { label: 'Research', href: '/company' },
    { label: 'Blog', href: '/company' },
    { label: 'Careers', href: '/company' },
    { label: 'Contact', href: '/company' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '/security' },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Footer() {
  return (
    <footer className="bg-coz-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-content mx-auto px-6 pt-section pb-16"
      >
        {/* Top headline */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-h2 text-white max-w-[800px]">
            Building the future of intelligent infrastructure.
          </h2>
          <p className="text-body-lg text-coz-slate-light mt-4">
            Cozanet — technology that works for everyone.
          </p>
        </motion.div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-[0.75rem] font-semibold tracking-[0.1em] uppercase text-coz-slate mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[0.875rem] text-coz-slate-light hover:text-white transition-colors duration-200 leading-relaxed"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-coz-border-dark pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[0.75rem] text-coz-slate">
            © 2025 Cozanet. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-coz-slate hover:text-white transition-colors duration-200"
                aria-label="Social link"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
