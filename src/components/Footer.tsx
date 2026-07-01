import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { contactInfo } from "./ContactInfo";

const socials = [
  {
    icon: Github,
    href: contactInfo.socials.find((s) => s.label === "GitHub")?.href || "#",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: contactInfo.socials.find((s) => s.label === "LinkedIn")?.href || "#",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: contactInfo.socials.find((s) => s.label === "Instagram")?.href || "#",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-100">
      <div className="container-custom py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              <span className="gradient-text">Sachin</span>
              <span className="text-surface-800">.dev</span>
            </a>

            <p className="mt-2 text-sm text-surface-500 max-w-xs">
              Full Stack Developer passionate about building modern,
              responsive, and scalable web applications.
            </p>
          </div>

       

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center text-surface-600 hover:bg-primary-50 hover:text-primary-600 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">
              Sachin Kumar Vishwakarma
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-sm text-surface-400 text-center">
            Designed & Developed by{" "}
            <span className="font-semibold gradient-text">
              Sachin Kumar Vishwakarma
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}