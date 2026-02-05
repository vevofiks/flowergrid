"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });


        tl.from(imageWrapperRef.current, {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });


        tl.from([titleRef.current, textRef.current, btnRef.current], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=1.2");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className='relative w-full h-screen bg-[#F3EAD8] flex items-center justify-center overflow-hidden'>

            <div className="max-w-7xl w-full h-full max-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center justify-items-center">

                <div className="flex flex-col items-center md:items-start z-10 order-2 md:order-1 justify-start md:justify-center h-full max-h-[90vh] mx-10 md:mx-0">
                    <h1 ref={titleRef} className='text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.1] mb-6 text-center md:text-left'>
                        The Vision Behind <br className="hidden md:block" />
                        Flowergrid
                    </h1>

                    <p ref={textRef} className='text-[#4A4A4A] text-sm md:text-base lg:text-xl font-sans! leading-relaxed max-w-lg mb-8 text-center md:text-left'>
                        FlowerGrid exists to guide individuals and organizations towards holistic wellbeing through mind, body, and spirit integration. We provide evidence-based, personalised programs that foster personal growth, resilience, and conscious living, supporting meaningful change while helping clients achieve balance, clarity, and long-term transformation.
                    </p>

                    <Link href="/vision" className='' >
                        <button ref={btnRef} className='bg-primary text-white font-sans text-xs md:text-sm uppercase tracking-wider font-medium rounded-full px-8 py-3 md:px-25 md:py-4 hover:bg-[#8F7A52] transition-colors duration-300 shadow-md'>
                            Discover Our Vision
                        </button>
                    </Link>
                </div>

                <div ref={imageWrapperRef} className="relative w-full h-[35vh] md:h-[60vh] lg:h-[90vh] flex items-center justify-center md:justify-end order-1 md:order-2">
                    <div className="relative w-full h-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMGURL}home/H vision flower.png`}
                            alt="Vision Flower"
                            fill
                            className='object-contain object-center md:object-right'
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Vision