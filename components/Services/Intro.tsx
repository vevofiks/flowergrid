"use client"

import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Intro = () => {
    const introRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false);

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
        <div
            style={{ background: `url('/services/intro.jpg') no-repeat center center/cover` }}
            // 1. Changed min-h-screen to min-h-[60vh] for mobile so it doesn't take up too much vertical space
            // 2. Added overflow-hidden to prevent scrollbars
            className='relative flex items-center min-h-screen w-full overflow-hidden'
        >
            {/* Overlay: Changed to standard 'bg-gradient-to-r' and increased darkness on the left for readability */}
            <div className='absolute inset-0 bg-linear-to-r from-black/60 to-transparent'></div>

            {/* Content Wrapper */}
            {/* 3. Replaced fixed ml-12 with responsive padding (px-6 md:px-12) */}
            <div
                ref={introRef} className='relative z-10 w-full px-6 md:px-12 lg:pl-20 max-w-5xl'
                style={{
                    marginTop: isMobile ? "98px" : "30px",
                    padding: isMobile ? "30px" : "70px",
                }}
            >

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-8 !text-white drop-shadow-lg'>
                    Your Journey to Wholeness<br /> Begins Here
                </h1>

                <p className='text-md md:text-xl lg:text-2xl font-normal leading-relaxed tracking-wide !text-white/95 max-w-3xl drop-shadow-md'>
                    Our holistic wellness services combine medical science, holistic therapies and coaching 
                    expertise to help you create lasting transformation. Each programme is designed to support 
                    your physical health, emotional balance and personal growth.

                </p>
            </div>

        </div>
    )
}

export default Intro