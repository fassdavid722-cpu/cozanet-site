import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'CZN Token', href: '/czn' },
  { label: 'Technology', href: '/technology' },
  { label: 'Developers', href: '/developers' },
  { label: 'Security', href: '/security' },
  { label: 'Company', href: '/company' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 100);
      if (currentY > lastScrollY && currentY > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center',
          'border-b transition-shadow duration-300',
          scrolled
            ? 'bg-white/[0.92] backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-coz-border'
            : 'bg-white/[0.92] backdrop-blur-xl border-coz-border/60'
        )}
      >
        <div className="max-w-content-wide mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/images/brand/cozanet-logo.png" alt="Cozanet" className="w-11 h-11 object-contain" />
            <span className="text-[1rem] font-semibold text-coz-black tracking-tight">Cozanet</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-3 py-2 text-[0.875rem] font-medium transition-colors duration-200 rounded-md',
                  location.pathname === link.href
                    ? 'text-coz-black border-b-2 border-coz-gold -mb-[1px]'
                    : 'text-[#374151] hover:text-coz-black'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/documentation"
              className="text-[0.875rem] font-medium text-[#374151] hover:text-coz-black transition-colors duration-200 hover:underline underline-offset-4"
            >
              Documentation
            </Link>
            <Link
              to="/company"
              className="text-[0.875rem] font-medium text-white bg-coz-black px-5 py-2.5 rounded-button hover:bg-coz-charcoal transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-coz-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-[72px]"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[2rem] font-medium text-coz-black py-3 hover:text-coz-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-8 flex flex-col gap-4 items-center"
              >
                <Link
                  to="/documentation"
                  onClick={() => setMobileOpen(false)}
                  className="text-[1.125rem] text-[#374151] hover:text-coz-black"
                >
                  Documentation
                </Link>
                <Link
                  to="/company"
                  onClick={() => setMobileOpen(false)}
                  className="text-[1rem] font-medium text-white bg-coz-black px-8 py-3 rounded-button"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}
