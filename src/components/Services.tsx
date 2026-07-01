import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Layout, Server, PenTool } from 'lucide-react';

interface Service {
  icon: typeof Code2;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'End-to-end web application development from concept to deployment, with clean architecture and scalable code.',
    features: ['React & Next.js', 'Node.js APIs', 'Database Design', 'Cloud Deployment'],
    gradient: 'from-primary-500 to-blue-600',
    color: '#3b82f6',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Crafting pixel-perfect, responsive interfaces with modern frameworks and delightful interactions.',
    features: ['Responsive Design', 'Framer Motion', 'Component Libraries', 'Performance'],
    gradient: 'from-accent-500 to-cyan-600',
    color: '#06b6d4',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust, scalable server architectures with secure APIs and efficient data management.',
    features: ['REST & GraphQL', 'Authentication', 'Microservices', 'Database Optimization'],
    gradient: 'from-violet-500 to-purple-600',
    color: '#8b5cf6',
  },
  {
    icon: PenTool,
    title: 'UI/UX Development',
    description: 'Translating design visions into interactive, accessible, and user-centered digital experiences.',
    features: ['Design Systems', 'Accessibility', 'Prototyping', 'User Testing'],
    gradient: 'from-emerald-500 to-teal-600',
    color: '#10b981',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="perspective-1000"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative glass rounded-3xl p-8 overflow-hidden group"
        animate={{
          rotateX: hovered ? -3 : 0,
          rotateY: hovered ? 5 : 0,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${service.color}60, transparent, ${service.color}30)`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ backgroundColor: service.color }}
        />

        <div className="relative z-10">
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${service.color}12` }}
            animate={{
              boxShadow: hovered ? `0 0 30px ${service.color}30` : '0 0 0px transparent',
              rotate: hovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <service.icon size={26} style={{ color: service.color }} />
          </motion.div>

          <h3 className="text-xl font-bold text-surface-900 mb-3">{service.title}</h3>
          <p className="text-surface-500 leading-relaxed mb-6">{service.description}</p>

          <div className="grid grid-cols-2 gap-3">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-surface-600"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50/30 rounded-full blur-3xl" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
            Services
          </h2>
          <p className="max-w-2xl mx-auto text-surface-500 text-lg">
            Comprehensive development services tailored to your project needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
