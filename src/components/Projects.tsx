import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  download?: string;
  featured: boolean;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Funfinity',
    description:
      'A modern gaming hub featuring browser games with a responsive UI, category-based browsing, and an engaging user experience.',
    image: './funfinity.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/SachiinVishwakarma/GameHub.git',
    demo: 'https://fun-finity.vercel.app',
    featured: true,
    color: '#ff7e5f',
  },
  {
    title: 'Academic ERP',
    description:
      'A full-stack student management system with secure authentication, role-based access, and academic record management.',
    image:
      'https://cdn.libsys.co.in/fetch/15/1/CONTENT/BACKGROUND/Academic%20Campus%20ERP_1683790130843.jpg',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
    featured: false,
    color: '#ff3cac',
  },
  {
    title: 'KriyaHub',
    description:
      'A mobile task management application that helps users organize daily activities with a clean and intuitive interface.',
    image: './kriyahub.png',
    tags: ['React Native', 'JavaScript'],
    download: '/kriyahub.apk',
    featured: false,
    color: '#00c9ff',
  },
  {
    title: 'Common Sense Knowledge Research',
    description:
      'Research project exploring common-sense reasoning in AI using machine learning and natural language processing techniques.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMheEmdQGdDgE3tIsZHc1dHCq-ayxrKEmzXQ&s',
    tags: ['Python', 'Machine Learning', 'NLP', 'TensorFlow'],
    github: '#',
    demo: '#',
    featured: false,
    color: '#4e65ff',
  },
];
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`perspective-1000 ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative glass rounded-3xl overflow-hidden preserve-3d group"
        animate={{
          rotateX: hovered ? -2 : 0,
          rotateY: hovered ? 3 : 0,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className={`relative overflow-hidden ${project.featured ? 'h-80 md:h-96' : 'h-56'}`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, transparent)`,
            }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="relative p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-surface-100/80 text-surface-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-surface-900 mb-2 flex items-center gap-2">
            {project.title}
            <motion.span
              animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={20} className="text-primary-400" />
            </motion.span>
          </h3>

          <p className="text-surface-500 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            {project.download ? (
              <motion.a
                href={project.download}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📥 Download APK
              </motion.a>
            ) : (
              <>
                {project.github && project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-100/80 text-surface-700 text-sm font-medium hover:bg-surface-200/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                )}

                {project.demo && project.demo !== "#" && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium shadow-md shadow-primary-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
              </>
            )}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-100/15 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-surface-500 text-lg">
            A selection of projects that showcase my expertise across the full stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
