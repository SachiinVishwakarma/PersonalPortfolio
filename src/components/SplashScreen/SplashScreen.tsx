import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BackgroundParticles from "./BackgroundParticles";
import TypingCode from "./TypingCode";
import AnimatedName from "./AnimatedName";
import ProgressBar from "./ProgressBar";

interface SplashScreenProps {
    onFinish: () => void;
}

const SplashScreen: FC<SplashScreenProps> = ({ onFinish }) => {
    const [showEditor, setShowEditor] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];

        timers.push(
            setTimeout(() => {
                setShowEditor(true);
            }, 400)
        );

        timers.push(
            setTimeout(() => {
                setShowName(true);
            }, 2500)
        );

        timers.push(
            setTimeout(() => {
                setShowProgress(true);
            }, 3200)
        );

        timers.push(
            setTimeout(() => {
                setExit(true);
            }, 7000)
        );

        timers.push(
            setTimeout(() => {
                onFinish();
            }, 7600)
        );

        return () => timers.forEach(clearTimeout);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {!exit && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(20px)",
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="fixed inset-0 z-[9999] overflow-hidden
          bg-gradient-to-br
          from-white
          via-sky-50
          to-blue-100"
                >
                    {/* Background */}
                    <BackgroundParticles />

                    {/* Main Content */}

                    <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

                        <div className="w-full max-w-6xl">

                            <motion.div
                                className="flex flex-col items-center gap-10"
                            >

                                {/* Intro */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: -20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                >
                                    <p
                                        className="
                    text-xs
                    md:text-sm
                    uppercase
                    tracking-[10px]
                    text-blue-600
                    font-semibold
                    "
                                    >
                                        INITIALIZING PORTFOLIO
                                    </p>
                                </motion.div>

                                {/* Editor */}

                                <AnimatePresence>
                                    {showEditor && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 40,
                                                scale: 0.95,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                        >
                                            <TypingCode />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Name */}

                                <AnimatePresence>
                                    {showName && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 40,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                        >
                                            <div className="text-center">

                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                    }}
                                                    className="
                          mb-6
                          uppercase
                          tracking-[8px]
                          text-slate-500
                          text-sm
                          "
                                                >
                                                    Welcome to World of 
                                                </motion.p>

                                                <AnimatedName />

                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                    }}
                                                    transition={{
                                                        delay: 0.8,
                                                    }}
                                                    className="
                          mt-6
                          text-slate-600
                          text-base
                          md:text-lg
                          tracking-[4px]
                          "
                                                >
                                                    Full Stack Developer • AI • UI/UX
                                                </motion.p>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Progress */}

                                <AnimatePresence>
                                    {showProgress && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 30,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="w-full flex justify-center"
                                        >
                                            <ProgressBar duration={3500} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>

                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;