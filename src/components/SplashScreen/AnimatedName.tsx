import { motion } from "framer-motion";

const letters = "SACHIN".split("");

export default function AnimatedName() {
    return (
        <div className="flex flex-wrap justify-center gap-1 md:gap-3 select-none">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{
                        opacity: 0,
                        x: (Math.random() - 0.5) * 700,
                        y: (Math.random() - 0.5) * 500,
                        rotate: (Math.random() - 0.5) * 360,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                    }}
                    transition={{
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 180,
                        damping: 14,
                    }}
                    whileHover={{
                        y: -8,
                        scale: 1.08,
                    }}
                    className="
          text-5xl
          sm:text-6xl
          md:text-8xl
          lg:text-9xl
          font-black
          tracking-wider
          bg-gradient-to-r
          from-sky-500
          via-blue-600
          to-cyan-400
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_25px_rgba(59,130,246,.45)]
          "
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
}