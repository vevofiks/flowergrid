"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function BlogHero() {

    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.2,
                delayChildren: 0.6
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: -60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
        
                    <div className="absolute inset-0">
                        <Image
                            src={`/blog/bloghero.png`}
                            alt="blog page Hero Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
        
                    <motion.div
                        className="relative z-10 h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="max-w-6xl">
        
                            <motion.h1
                                variants={itemVariants}
                                className="text-white! text-3xl md:text-7xl lg:text-[5.5rem] font-heading font-medium leading-[1.1] mb-6 tracking-wide"
                            >
                                Holisitic Journals
                            </motion.h1>
        
                            <motion.p
                                variants={itemVariants}
                                className="text-white/90! text-lg md:text-2xl mb-10 tracking-wide font-sans font-light"
                            >
                        Discover thoughtful insights, mindful practices, and expert guidance on holistic healing, emotional wellbeing, and conscious living.
                            </motion.p>
    
        
                        </div>
                    </motion.div>
                </section>
    );
}
