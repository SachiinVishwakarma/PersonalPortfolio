import { motion } from 'framer-motion';

export default function SignatureLogo() {
    return (
        <motion.a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }}
            whileHover={{
                scale: 1.03,
                y: -1,
            }}
            whileTap={{
                scale: 0.98,
            }}
            className="inline-block select-none"
        >
            <div className="flex flex-col leading-none">
                <h1
                    className="
            text-xl
            md:text-2xl
            lg:text-3xl
            font-normal
            bg-gradient-to-r
            from-primary-500
            via-accent-500
            to-primary-500
            bg-clip-text
            text-transparent
            drop-shadow-sm
          "
                    style={{
                        fontFamily: "'Alex Brush', cursive",
                    }}
                >
                    <span className="text-primary-500">{'<'}</span>

                    <span className="mx-1 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                        Sachin Kr. Vishwakarma
                    </span>

                    <span className="text-primary-500">{' />'}</span>
                </h1>
            </div>
        </motion.a>
    );
}