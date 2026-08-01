import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SignatureLogo from "../Effects/SignatureLogo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navbar background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section
  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-90px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Prevent body scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu on desktop resize
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);

      if (!element) return;

      const navbarHeight = 80;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-transparent"
        }`}
    >
      <div className="container-custom flex h-16 md:h-20 items-center justify-between">

        <SignatureLogo />

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                  ? "text-primary-600"
                  : "text-surface-600 hover:text-surface-900"
                }`}
            >
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-primary-50"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">
                {link.label}
              </span>
            </button>
          ))}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleClick("#contact")}
            className="ml-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden rounded-lg p-2"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-white/20 glass md:hidden"
          >
            <div className="space-y-2 p-4">

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${activeSection === link.href.substring(1)
                      ? "bg-primary-50 text-primary-600"
                      : "text-surface-700 hover:bg-surface-50"
                    }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleClick("#contact")}
                className="mt-3 w-full rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-3 text-white"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}