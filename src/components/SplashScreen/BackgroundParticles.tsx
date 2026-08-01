import { motion } from "framer-motion";
import {
    Code2,
    Braces,
    Database,
    Cpu,
    Terminal,
    Globe,
} from "lucide-react";

const icons = [
    Code2,
    Braces,
    Database,
    Cpu,
    Terminal,
    Globe,
];

export default function BackgroundParticles() {
    return (
        <>
            {/* Blur Background */}

            <div className="absolute inset-0 overflow-hidden">

                <motion.div
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, -50, 30, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[140px]"
                />

                <motion.div
                    animate={{
                        x: [0, -80, 30, 0],
                        y: [0, 50, -30, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[150px]"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                    }}
                    className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-[120px]"
                />
            </div>

            {/* Small Floating Particles */}

            <div className="absolute inset-0 overflow-hidden">

                {Array.from({ length: 45 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-sky-400/40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -25, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                        }}
                    />
                ))}
            </div>

            {/* Floating Coding Icons */}

            <div className="absolute inset-0 overflow-hidden">

                {icons.map((Icon, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-blue-400/20"
                        style={{
                            left: `${10 + index * 15}%`,
                            top: `${15 + (index % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 8, -8, 0],
                            opacity: [0.2, 0.45, 0.2],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5 + index,
                        }}
                    >
                        <Icon
                            size={40}
                            strokeWidth={1.5}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Grid */}

            <div
                className="
        absolute
        inset-0
        opacity-[0.04]
        [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
        [background-size:45px_45px]
        "
            />
        </>
    );
}