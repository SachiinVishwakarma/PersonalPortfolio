import { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

import MouseLight from '../Effects/MouseLight';
import FloatingParticles from '../Effects/FloatingParticles';
import { contactInfo } from './ContactInfo';
const roles = ['Full Stack Developer', 'React Native Developer', 'Freelancer', 'Problem Solver','Open Source Contributor'];

function TypingEffect() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <span className="gradient-text">
      {displayText}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-primary-500 ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
}

const socialLinks = [
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
  {
    icon: Mail,
    href: `mailto:${contactInfo.email}`,
    label: "Email",
  },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MouseLight />
      <FloatingParticles />

      <div className="absolute inset-0 gradient-hero opacity-80" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block mb-8">
            {/* Active Status Dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500 border-2 border-white"></span>
            </span>

            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 shadow-glass-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-neutral-600">
                Open to Internship & Full-Time Opportunities
              </span>
            </motion.div>
          </div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Sachin
            </span>
          </motion.h1>

          <motion.div
            className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <TypingEffect />
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            I'm a Computer Science Engineering student and passionate Full Stack
            Developer specializing in React, Node.js, Express.js, MySQL, and .NET.
            I enjoy building responsive, scalable web applications and continuously
            learning modern technologies.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mt-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="/SachinVishw.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-primary-100 text-primary-600 font-semibold shadow-lg hover:bg-white hover:border-primary-300 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                className="p-3 glass rounded-xl text-neutral-500 hover:text-primary-600 hover:shadow-glass transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-primary-500 transition-colors"
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
