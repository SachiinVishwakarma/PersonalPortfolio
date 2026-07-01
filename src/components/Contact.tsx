import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send} from 'lucide-react';
import {contactInfo, contactItems} from './ContactInfo';

import MouseLight from '../Effects/MouseLight';
import FloatingParticles from '../Effects/FloatingParticles';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="section-padding bg-surface-50 relative overflow-hidden">
      <MouseLight />
      <FloatingParticles />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-100/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-surface-500 text-lg">
            Have a project in mind? I'd love to hear about it. Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-surface-900 mb-6">
                Contact Info
              </h3>

              <div className="space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                        <Icon size={18} className="text-primary-500" />
                      </div>

                      <div>
                        <p className="text-sm text-surface-500">
                          {item.label}
                        </p>

                        <p className="font-medium text-surface-800">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-surface-900 mb-4">
                Follow Me
              </h3>

              <div className="flex items-center gap-3">
                {contactInfo.socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-surface-100/80 flex items-center justify-center text-surface-600 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form className="glass rounded-3xl p-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <motion.label
                    className="absolute left-4 transition-all duration-200 pointer-events-none font-medium"
                    animate={{
                      top: focused === 'name' || false ? '0.5rem' : '1.125rem',
                      fontSize: focused === 'name' || false ? '0.75rem' : '0.875rem',
                      color: focused === 'name' ? '#3b82f6' : '#9ca3af',
                    }}
                  >
                    Your Name
                  </motion.label>
                  <input
                    type="text"
                    className="w-full px-4 pt-6 pb-2 bg-white/60 border border-surface-200 rounded-xl text-surface-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    onFocus={() => setFocused('name')}
                    onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                  />
                </div>
                <div className="relative">
                  <motion.label
                    className="absolute left-4 transition-all duration-200 pointer-events-none font-medium"
                    animate={{
                      top: focused === 'email' || false ? '0.5rem' : '1.125rem',
                      fontSize: focused === 'email' || false ? '0.75rem' : '0.875rem',
                      color: focused === 'email' ? '#3b82f6' : '#9ca3af',
                    }}
                  >
                    Email Address
                  </motion.label>
                  <input
                    type="email"
                    className="w-full px-4 pt-6 pb-2 bg-white/60 border border-surface-200 rounded-xl text-surface-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    onFocus={() => setFocused('email')}
                    onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                  />
                </div>
              </div>

              <div className="relative">
                <motion.label
                  className="absolute left-4 transition-all duration-200 pointer-events-none font-medium"
                  animate={{
                    top: focused === 'subject' || false ? '0.5rem' : '1.125rem',
                    fontSize: focused === 'subject' || false ? '0.75rem' : '0.875rem',
                    color: focused === 'subject' ? '#3b82f6' : '#9ca3af',
                  }}
                >
                  Subject
                </motion.label>
                <input
                  type="text"
                  className="w-full px-4 pt-6 pb-2 bg-white/60 border border-surface-200 rounded-xl text-surface-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                  onFocus={() => setFocused('subject')}
                  onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                />
              </div>

              <div className="relative">
                <motion.label
                  className="absolute left-4 top-4 transition-all duration-200 pointer-events-none font-medium"
                  animate={{
                    top: focused === 'message' || false ? '0.5rem' : '1.125rem',
                    fontSize: focused === 'message' || false ? '0.75rem' : '0.875rem',
                    color: focused === 'message' ? '#3b82f6' : '#9ca3af',
                  }}
                >
                  Your Message
                </motion.label>
                <textarea
                  rows={5}
                  className="w-full px-4 pt-6 pb-2 bg-white/60 border border-surface-200 rounded-xl text-surface-900 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                  onFocus={() => setFocused('message')}
                  onBlur={(e) => { if (!e.target.value) setFocused(null); }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01, boxShadow: '0 12px 30px rgba(59,130,246,0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
