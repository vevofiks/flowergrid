"use client"

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const B2bValues = () => {
    const leafVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const leafLeftVariants: Variants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const leafRightVariants: Variants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const iconVariants: Variants = {
        hidden: { y: 50, opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.9,
                delay: 0.5 + i * 0.2,
                type: "spring",
                stiffness: 100,
            },
        }),
    };

    const contentVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.6 + i * 0.2,
            },
        }),
    };

    const values = [
        {
            icon: `/home/i3.png`,
            title: "Holistic and Practical",
            desc: "Our approach bridges psychology, mindfulness and real workplace challenges."
        },
        {
            icon: `/home/i4.png`,
            title: "Tailored for Every Culture",
            desc: "We design each corporate wellbeing programme to fit your specific structure, pace, and strategic objectives."
        },
        {
            icon: `/home/i1.png`,
            title: "Led by Experienced Practitioners",
            desc: "Our multi-disciplinary team of 15+ certified coaches, therapists and wellbeing experts bring both professional insight and human understanding."
        },
        {
            icon: `/home/i2.png`,
            title: "Sustainable Results",
            desc: "We focus on measurable impact, not quick fixes. Our programmes help create lasting behavioural and cultural change."
        }
    ];

    return (
        <section className="relative w-full min-h-screen py-12 md:py-32 overflow-hidden mt-10 flex flex-col justify-center">

            <motion.div
                className="absolute top-3 left-0 w-24 md:w-50 pointer-events-none z-0"
                variants={leafLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMGURL}home/left-leaf.png`}
                    alt="Decorative Leaf"
                    width={200}
                    height={200}
                    className="w-full h-auto opacity-60"
                />
            </motion.div>

            <motion.div
                className="absolute bottom-3 right-0 w-24 md:w-50 pointer-events-none z-0"
                variants={leafRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMGURL}home/right-leaf.png`}
                    alt="Decorative Leaf"
                    width={200}
                    height={200}
                    className="w-full h-auto opacity-60"
                />
            </motion.div>

            <div className="relative z-10 max-w-7xl w-full items-center mx-auto px-6">
                <h2 className="text-black! text-2xl md:text-3xl lg:text-4xl text-center mx-auto font-heading font-medium tracking-wide mt-[38px]">Why Organisations Choose Flowergrid</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center pb-10 md:pb-0">
                    {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.div
                                className="w-26 h-26 md:w-36 md:h-36 rounded-full flex items-center justify-center mt-10 md:mt-20 mb-6 md:mb-10 backdrop-blur-sm border border-white/20 bg-[#ECDCC5]"
                                custom={index}
                                variants={iconVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <div className="relative w-12 h-12 md:w-18 md:h-18">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain opacity-80"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="space-y-3 md:space-y-4 px-4 md:px-0"
                                custom={index}
                                variants={contentVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <h3 className="text-lg md:text-xl uppercase text-[#2D3E29] font-medium tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-[#646262] text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                                    {item.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default B2bValues