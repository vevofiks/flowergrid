"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 4,
                staggerChildren: 0.2,
                delayChildren: 1.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: -60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">

            <div className="absolute inset-0">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMGURL}membership/hero.jpg`}
                    alt="Membership Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
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
                        Flowergrid Holistic Wellness Membership
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/90! text-lg md:text-2xl mb-10 tracking-wide font-sans font-light"
                    >
                        A guided membership for mind, body and soul transformation
                    </motion.p>

                    <motion.button
                        variants={{
                            hidden: { y: 60, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5
                                }
                            }
                        }}
                        className="bg-[#C19A6B] hover:bg-[#A8865A] text-white font-medium text-base md:text-lg px-8 py-4 rounded-full shadow-lg"
                        whileTap={{ scale: 0.95 }}
                    >
                        Join the Flower Grid Membership
                    </motion.button>

                </div>
            </motion.div>
        </section>
    )
}