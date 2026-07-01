import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Palette, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    label: '10+',
    desc: 'Projects',
  },
  {
    icon: Server,
    label: '2',
    desc: 'Internships',
  },
  {
    icon: Palette,
    label: 'MERN',
    desc: 'Stack',
  },
  {
    icon: Zap,
    label: '24/7',
    desc: 'Learning',
  },
];

const milestones = [
  {
    year: '2023',
    title: 'Started B.Tech Journey',
    desc: 'Began Computer Science Engineering at YBN University and explored web development.',
  },
  {
    year: '2024',
    title: 'Node.js Developer Intern',
    desc: 'Developed REST APIs, JWT authentication, and MySQL-based backend applications at Eimple Labs.',
  },
  {
    year: '2025',
    title: 'React Developer Intern',
    desc: 'Built responsive React applications using Material UI, Redux, and REST API integration.',
  },
];

function SectionHeader({ label, title, description }: {
  label: string; title: string; description: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
        {title}
      </h2>
      <p className="max-w-2xl mx-auto text-surface-500 text-lg">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        <SectionHeader
          label="About Me"
          title="Crafting Digital Experiences"
          description="I'm a full stack developer passionate about building elegant, performant applications that solve real problems."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-surface-900 mb-4">
                My Story
              </h3>
              <div className="space-y-4 text-surface-600 leading-relaxed">
                <p>
                  I'm <span className="font-semibold">Sachin Kumar Vishwakarma</span>, a Computer Science Engineering student and full-stack web developer passionate about building modern, responsive, and scalable web applications.
                </p>

                <p>
                  With hands-on experience in React, Node.js, Express.js, and MySQL, I enjoy creating clean user interfaces and secure backend systems while continuously learning new technologies.
                </p>

                <p>
                  I'm always eager to solve real-world problems, improve my skills, and contribute to innovative software projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-surface-50/80"
                  >
                    <item.icon className="w-5 h-5 mx-auto mb-2 text-primary-500" />
                    <div className="text-2xl font-bold gradient-text">{item.label}</div>
                    <div className="text-sm text-surface-500">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-accent-300 to-transparent" />

              <div className="space-y-8">
                {milestones.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-white border-2 border-primary-400 shadow-md shadow-primary-200/50" />
                    <div className="glass rounded-2xl p-5">
                      <span className="text-xs font-mono text-primary-500 tracking-wider">{item.year}</span>
                      <h4 className="text-lg font-semibold text-surface-900 mt-1">{item.title}</h4>
                      <p className="text-sm text-surface-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
