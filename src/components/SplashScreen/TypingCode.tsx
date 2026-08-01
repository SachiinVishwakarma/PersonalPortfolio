import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileCode2 } from "lucide-react";

const snippets = [
    `const developer = {
  name: "Sachin",
  role: "Full Stack Developer",
  location: "India",
};`,

    `const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
];`,

    `async function buildPortfolio() {
  return "Modern • Fast • Beautiful";
}`,

    `npm run portfolio

✔ Starting Dev Server...
✔ Loading Components...
✔ Ready 🚀`,
];

const typingSpeed = 28;
const deletingSpeed = 15;
const pauseTime = 1800;

export default function TypingCode() {
    const [snippetIndex, setSnippetIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = snippets[snippetIndex];

        let timer: ReturnType<typeof setTimeout>;

        if (!deleting) {
            if (displayText.length < current.length) {
                timer = setTimeout(() => {
                    setDisplayText(current.slice(0, displayText.length + 1));
                }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setDeleting(true);
                }, pauseTime);
            }
        } else {
            if (displayText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayText(current.slice(0, displayText.length - 1));
                }, deletingSpeed);
            } else {
                setDeleting(false);
                setSnippetIndex((prev) => (prev + 1) % snippets.length);
            }
        }

        return () => clearTimeout(timer);
    }, [displayText, deleting, snippetIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl overflow-hidden rounded-3xl border border-blue-100 bg-white/70 shadow-2xl backdrop-blur-xl"
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-blue-100 bg-white/80 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                    <FileCode2 size={18} />
                    <span className="text-sm font-medium">
                        Portfolio.tsx
                    </span>
                </div>

                <div className="w-12"></div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-blue-100 bg-slate-50">
                <div className="border-r border-blue-100 bg-white px-5 py-2 text-sm font-medium text-blue-600">
                    App.tsx
                </div>

                <div className="px-5 py-2 text-sm text-slate-400">
                    Hero.tsx
                </div>

                <div className="px-5 py-2 text-sm text-slate-400">
                    Portfolio.tsx
                </div>
            </div>

            {/* Editor */}
            <div className="relative bg-slate-950 p-5 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>

                <pre className="relative overflow-x-auto whitespace-pre-wrap break-words font-mono text-sm leading-7 text-slate-200 md:text-base">
                    <code>{displayText}</code>

                    <span className="animate-pulse text-blue-400">
                        |
                    </span>
                </pre>
            </div>
        </motion.div>
    );
}