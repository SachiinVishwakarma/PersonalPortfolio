import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiVercel,
} from "react-icons/si";
import { SiMui } from "react-icons/si";

import { IconType } from "react-icons";

interface Skill {
  name: string;
  color: string;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB", icon: FaReact },
      { name: "Next.js", color: "#000000", icon: SiNextdotjs },
      { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
      { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "Redux", color: "#764ABC", icon: SiRedux },
      { name: "Framer Motion", color: "#FF0055", icon: SiFramer },
      { name: "Material UI", color: "#007FFF", icon: SiMui },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", color: "#339933", icon: FaNodeJs },
      { name: "Express.js", color: "#000000", icon: SiExpress },
      { name: ".NET", color: "#512BD4", icon: SiDotnet },
      { name: "MySQL", color: "#4479A1", icon: SiMysql },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
      { name: "REST APIs", color: "#FF6C37", icon: SiPostman },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", color: "#F05032", icon: FaGitAlt },
      { name: "GitHub", color: "#181717", icon: FaGithub },
      { name: "Docker", color: "#2496ED", icon: FaDocker },
      { name: "AWS", color: "#FF9900", icon: FaAws },
      { name: "Figma", color: "#F24E1E", icon: FaFigma },
      { name: "Vercel", color: "#000000", icon: SiVercel },
    ],
  },
];

function SkillCard({ skill, index, categoryInView }: {
  skill: Skill; index: number; categoryInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={categoryInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="perspective-1000"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative glass rounded-2xl p-5 cursor-pointer preserve-3d overflow-hidden group"
        animate={{
          rotateX: hovered ? -5 : 0,
          rotateY: hovered ? 8 : 0,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-3">

          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              backgroundColor: `${skill.color}12`,
              color:
                skill.color === "#000000" || skill.color === "#181717"
                  ? "#374151"
                  : skill.color,
            }}
            animate={{
              boxShadow: hovered
                ? `0 0 24px ${skill.color}40`
                : "0 0 0px transparent",
            }}
          >
            <Icon size={28} />
          </motion.div>
          <span className="text-sm font-semibold text-surface-800">{skill.name}</span>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: skill.color }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

function CategorySection({ category }: { category: SkillCategory }) {
  const catRef = useRef(null);
  const catInView = useInView(catRef, { once: true, margin: '-50px' });

  return (
    <div ref={catRef}>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={catInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-lg font-semibold text-surface-700 mb-6 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-gradient-to-r from-primary-400 to-transparent" />
        {category.title}
      </motion.h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {category.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
            categoryInView={catInView}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding bg-surface-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/10 rounded-full blur-3xl" />

      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 tracking-tight">
            My Tech Stack
          </h2>
          <p className="max-w-2xl mx-auto text-surface-500 text-lg">
            Technologies I use to bring ideas to life — from pixel-perfect frontends to scalable backends.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
