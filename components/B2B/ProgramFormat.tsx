"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
const sections = [
    {
        id: "intensive",
        title: "5-Day Intensive Programme",
        thumb: `/b2b/7.png`,
        details: "A guided wellbeing and leadership experience for teams seeking sustainable transformation. Includes personalised assessments, group coaching, and integrated mind-body workshops."
    },
    {
        id: "power",
        title: "Power Hour Sessions",
        thumb: `/b2b/8.png`,
        details: "Short, focused sessions offering immediate clarity and practical strategies for managers or teams facing specific challenges."
    },
    {
        id: "workshops",
        title: "Workshops and Events",
        thumb: `/b2b/9.png`,
        details: "Half-day or full-day group sessions designed to enhance emotional wellbeing, address anxiety and build a culture of open communication."
    },
];

export default function ProgramFormat() {
    const introVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    const thumbVariants: Variants = {
        hidden: { y: 50, opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                delay: i * 0.2,
                type: "spring",
                stiffness: 100,
            },
        }),
    };

    const buttonVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.6,
            },
        },
    };

    return (
        <section
            className="relative w-full h-auto flex flex-col items-center justify-between lg:justify-center py-12 lg:py-16 px-4 md:mt-20"
        >
            <motion.div
                className="text-center max-w-5xl mb-8 lg:mb-10 relative z-10"
                variants={introVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-black! mb-4">
                    Programme Formats
                </h2>
                <p className="text-base md:text-xl lg:text-2xl font-sans text-black/70! leading-relaxed">
                    Choose a format that suits your organisation&apos;s needs and time frame.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 relative z-10 w-full justify-center items-start max-w-7xl">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        className="flex flex-col items-center gap-6 flex-1"
                        custom={index}
                        variants={thumbVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-48 lg:h-48 xl:w-64 xl:h-64">
                            <Image
                                src={section.thumb}
                                alt={section.title}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </div>

                        <h3 className="text-black! text-lg md:text-xl lg:text-2xl font-normal tracking-wide text-center px-4">
                            {section.title}
                        </h3>

                        <div className="px-4 py-2 rounded-2xl max-w-[350px]">
                            <p className="text-black/80 text-sm md:text-base leading-relaxed text-center">
                                {section.details}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-8 lg:mt-10 flex justify-center relative z-10"
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Link href={"/contact-us"} >
                <button className="bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-base font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Request a Tailored Proposal
                </button>
                </Link>
            </motion.div>

        </section>
    );
}