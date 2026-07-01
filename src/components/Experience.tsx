import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  color: string;
}

const experiences: ExperienceItem[] = [

  {
    period: 'June 2024 - 2025',
    role: 'Node.js Developer Intern',
    company: 'Eimple Labs',
    location: 'Remote',
    description:
      'Developed secure backend services and RESTful APIs using Node.js, Express.js, and MySQL.',
    highlights: [
      'Built RESTful APIs with Express.js.',
      'Implemented JWT authentication.',
      'Optimized MySQL database performance.',
      'Connected backend services with frontend applications.',
    ],
    color: '#06b6d4',
  },
  {
    period: 'June 2025 - Present',
    role: 'React Developer Intern',
    company: 'Eimple Labs',
    location: 'Remote',
    description:
      'Building responsive and scalable web applications using ReactJS, Material UI, and Redux.',
    highlights: [
      'Developed reusable React components.',
      'Implemented Redux for state management.',
      'Integrated REST APIs with frontend.',
      'Optimized UI performance and user experience.',
    ],
    color: '#3b82f6',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding bg-surface-50 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
            Experience
          </h2>
          <p className="max-w-2xl mx-auto text-surface-500 text-lg">
            My professional journey building products that make a difference.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-accent-300 to-primary-100 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-white border-2 shadow-lg md:-translate-x-1/2"
                style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}40` }}
              />

              <div className={`flex-1 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <span className="inline-block font-mono text-sm text-primary-500 tracking-wider mb-1">
                  {exp.period}
                </span>
              </div>

              <div className={`flex-1 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                <div className="glass rounded-2xl p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${exp.color}15` }}>
                      <Briefcase size={18} style={{ color: exp.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-surface-900">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-surface-500">
                        <span className="font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-surface-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-sm text-surface-500">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
