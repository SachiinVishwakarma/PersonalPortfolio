import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SignatureLogo from '../Effects/SignatureLogo';
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'glass shadow-lg shadow-black/[0.03]'
          : 'bg-transparent'
        }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <SignatureLogo />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${activeSection === link.href.slice(1)
                  ? 'text-primary-600'
                  : 'text-surface-600 hover:text-surface-900'
                }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary-50 rounded-lg"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-surface-600 hover:bg-surface-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-surface-600 hover:bg-surface-50'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleClick('#contact'); }}
                className="block w-full text-center mt-3 px-5 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-xl"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
