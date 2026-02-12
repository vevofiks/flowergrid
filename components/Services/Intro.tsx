"use client"

import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { motion, type Variants } from "framer-motion";


const Intro = () => {
    const introRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false);

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

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useGSAP(() => {
        // Staggered child animation for text elements
        const textElements = introRef.current?.querySelectorAll('h1, p')

        if (textElements) {
            gsap.fromTo(
                textElements,
                {
                    opacity: 0,
                    y: -50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    stagger: 0.5,
                    delay: 1.5,
                }
            )
        }
    }, { scope: introRef })
    return (
               <section className="relative h-screen w-full overflow-hidden">
                
                            <div className="absolute inset-0">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMGURL}services/intro.jpg`}
                                    alt="service page Hero Image"
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
                
                                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-8 text-white! drop-shadow-lg'>
                    Your Journey to Wholeness <br className="hidden sm:block" /> Begins Here
                </h1>
                
                                    <motion.p
                                        variants={itemVariants}
                                        className="text-white/90! text-lg md:text-2xl mb-10 tracking-wide font-sans font-light"
                                    >
   Our holistic wellness services combine medical science, holistic therapies and coaching
                    expertise to help you create lasting transformation. Each program is designed to support
                    your physical health, emotional balance and personal growth.
             </motion.p>
            
                
                                </div>
                            </motion.div>
                        </section>
    )
}

export default Intro