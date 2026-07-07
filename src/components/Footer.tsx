import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.94 4.29a1.5 1.5 0 0 0-1.53-.24L2.87 10.66a1.4 1.4 0 0 0 .07 2.64l4.53 1.45 1.74 5.42a1.4 1.4 0 0 0 2.34.55l2.5-2.4 4.4 3.24a1.5 1.5 0 0 0 2.37-.9l3.14-14.5a1.5 1.5 0 0 0-.02-.87ZM9.4 14.02l9.29-6.9c.2-.15.42.12.24.3l-7.6 7.03a1.4 1.4 0 0 0-.4.75l-.3 2.03-1.23-3.21Z" />
    </svg>
  );
}

const socialLinks = [
  { Icon: Twitter, href: 'https://x.com/CozyCrypto_io', label: 'X (Twitter)' },
  { Icon: TelegramIcon, href: 'https://t.me/CozanetOfficial', label: 'Telegram' },
  { Icon: Github, href: 'https://github.com/fassdavid722-cpu', label: 'GitHub' },
];

const footerLinks = {
  products: [
    { label: 'AEGIS', href: '/aegis' },
    { label: 'CZN Token', href: '/czn' },
    { label: 'AI Platform', href: '/products' },
    { label: 'Automation', href: '/products' },
    { label: 'Developer Platform', href: '/developers' },
    { label: 'Enterprise', href: '/products' },
  ],
  resources: [
    { label: 'Documentation', href: '/developers' },
    { label: 'API Reference', href: '/developers' },
    { label: 'SDKs', href: '/developers' },
    { label: 'GitHub', href: 'https://github.com/fassdavid722-cpu', external: true },
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
                {links.map((link: { label: string; href: string; external?: boolean }) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.875rem] text-coz-slate-light hover:text-white transition-colors duration-200 leading-relaxed"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[0.875rem] text-coz-slate-light hover:text-white transition-colors duration-200 leading-relaxed"
                      >
                        {link.label}
                      </Link>
                    )}
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
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coz-slate hover:text-white transition-colors duration-200"
                aria-label={label}
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
