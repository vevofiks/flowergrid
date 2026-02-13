"use client";

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const AboutB2b = () => {
    const headerVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    const columnVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: i * 0.2,
            },
        }),
    };

    return (
        <section className="w-full bg-background py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    className="flex items-start gap-4 mb-12"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-4xl font-heading text-text-heading">
                        About Our Corporate Wellbeing programmes
                    </h2>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMGURL}home/connection-logo.png`}
                        alt="Flowergrid Logo"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    <motion.div
                        className="space-y-2"
                        custom={0}
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-text-body font-heading text-base md:text-lg leading-relaxed">
                            At Flowergrid, we believe people are at the heart of every organisation's success. Our corporate wellbeing programmes are designed to create workplaces that are emotionally aware, purpose-driven, and resilient.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-2"
                        custom={1}
                        variants={columnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <p className="text-text-body text-base md:text-lg leading-relaxed">
                            We combine coaching psychology, mindfulness practice and behavioural science to help teams perform with clarity, compassion and confidence. Each programme is tailored to your culture, goals and people.
                        </p>

                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default AboutB2b