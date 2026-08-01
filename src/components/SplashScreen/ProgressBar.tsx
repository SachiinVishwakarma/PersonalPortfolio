import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgressBarProps {
    duration?: number;
}

export default function ProgressBar({
    duration = 6000,
}: ProgressBarProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const start = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - start;

            const percent = Math.min(
                Math.floor((elapsed / duration) * 100),
                100
            );

            setProgress(percent);

            if (percent >= 100) {
                clearInterval(timer);
            }
        }, 25);

        return () => clearInterval(timer);
    }, [duration]);

    return (
        <div className="w-full max-w-xl mt-10">

            {/* Header */}

            <div className="flex justify-between mb-2 text-sm">

                <span className="font-medium text-slate-600">
                    Initializing Portfolio...
                </span>

                <motion.span
                    key={progress}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    className="font-bold text-blue-600"
                >
                    {progress}%
                </motion.span>
            </div>

            {/* Progress */}

            <div className="relative h-3 overflow-hidden rounded-full bg-slate-200">

                <motion.div
                    initial={{ width: 0 }}
                    animate={{
                        width: `${progress}%`,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.2,
                    }}
                    className="absolute inset-y-0 left-0 rounded-full
          bg-gradient-to-r
          from-sky-500
          via-blue-600
          to-cyan-400"
                />

                {/* Glow */}

                <motion.div
                    animate={{
                        x: ["-20%", "120%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                    className="absolute top-0 h-full w-24
          bg-white/40
          blur-md"
                />
            </div>

            {/* Status */}

            <motion.p
                key={progress}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-sm text-slate-500"
            >
                {progress < 25 &&
                    "Loading Assets..."}

                {progress >= 25 &&
                    progress < 50 &&
                    "Building Components..."}

                {progress >= 50 &&
                    progress < 75 &&
                    "Connecting Creativity..."}

                {progress >= 75 &&
                    progress < 100 &&
                    "Preparing Experience..."}

                {progress === 100 &&
                    "Ready 🚀"}
            </motion.p>
        </div>
    );
}