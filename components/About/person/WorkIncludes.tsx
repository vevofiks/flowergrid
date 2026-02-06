'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FlippingCard from '../../ui/FlippingCard';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface StepData {
    title: string;
    image: string;
    description: string;
}

interface WorkIncludesProps {
    steps: StepData[];
    description?: string;
    title?: string;
    description2?: string;
    title2?: string;
}

const WorkIncludes = ({
    steps = [],
    description,
    title,
    description2,
    title2

}: WorkIncludesProps) => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const textElements = textRef.current?.children;
        if (textElements) {
            gsap.fromTo(textElements,
                { y: -50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none", 
                    }
                }
            );
        }

        const cards = cardsRef.current?.children;
        if (cards) {
            gsap.fromTo(cards,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className='w-full py-12 sm:py-16 md:py-20 bg-background flex justify-center overflow-hidden'
        >
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">

                <div ref={textRef} className="flex flex-col gap-6 sm:gap-8 text-body">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-heading leading-tight'>
                        {title}
                    </h1>
                    <p className='text-lg sm:text-xl md:text-2xl leading-relaxed text-[#5B5B5B] font-light'>
                        {description || "I take a holistic approach that combines mind, body, and spirit, because I believe true transformation starts from within and grows through guided reflection and actionable steps."}
                    </p>

                    <div className="flex flex-col gap-3 sm:gap-4">
                        <h2 className='text-xl sm:text-2xl md:text-3xl font-heading font-normal text-heading'>
                            {title2}
                        </h2>
                        <p className='text-lg sm:text-xl md:text-2xl leading-relaxed text-[#5B5B5B] font-light'>
                            {description2} 
                        </p>
                    </div>
                </div>

                <div ref={cardsRef} className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="w-full">
                            <FlippingCard data={step} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WorkIncludes;