"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function ProgramIntro() {
    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: -60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMGURL}programme/p1.jpg`}
                    alt="Programmes Hero"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-6xl">

          <motion.h1
            variants={itemVariants}
            className="text-white! text-4xl md:text-4xl lg:text-6xl font-heading font-medium leading-[1.1] mb-6 tracking-wide"
          >
            Flowergrid Holistic Wellness Programmes Support for Mind, Body & Self
        </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/90! text-lg md:text-2xl font-sans font-light tracking-wide max-w-3xl"
          >
            Our holistic wellness programmes are created by a multidisciplinary team who combine medical understanding, therapeutic practice and holistic methods. Every journey is adapted around your needs and your pace.
          </motion.p>


        </div>
      </motion.div>
    </section>
  );
}
