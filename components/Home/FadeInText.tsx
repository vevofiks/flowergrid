"use client";

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeInText = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const lines1 = gsap.utils.toArray(".line-1");
        const lines2 = gsap.utils.toArray(".line-2");

        gsap.set(section2Ref.current, { y: "100%" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                scrub: 1,
                pin: true
            }
        });

        tl.fromTo(lines1,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 6, stagger: 0.4, ease: "power3.out", force3D: true }
        );

        tl.to([section1Ref.current, section2Ref.current], {
            y: "-=100%",
            duration: 4,
            ease: "power2.inOut",
            force3D: true
        });

        tl.fromTo(lines2,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 6, stagger: 0.4, ease: "power3.out", force3D: true }
        );

    }, { scope: containerRef });

    return (
        <div className='h-screen w-full relative bg-[#F3EAD8] overflow-hidden z-10' ref={containerRef}>
            <div
                ref={section1Ref}
                className='absolute inset-0 flex flex-col justify-center text-start text-[28px] sm:text-4xl md:text-5xl lg:text-7xl tracking-wider uppercase text-[#2D3F28]! pl-4 sm:pl-6 md:pl-10 py-10 md:py-0 gap-2 md:gap-0 font-heading! sm:leading-tight md:leading-tight lg:leading-[1.1]'
            >
                <h2 className='line-1 will-change-transform will-change-opacity mt-5 md:mt-2'>Tailored workshops on </h2>
                <h2 className='line-1 will-change-transform will-change-opacity mt-5 md:mt-2'>leadership, </h2>
                <h2 className='line-1 will-change-transform will-change-opacity mt-5 md:mt-2'>communication, </h2>
                <h2 className='line-1 will-change-transform will-change-opacity mt-5 md:mt-2'>wellbeing, and mental</h2>
                <h2 className='line-1 will-change-transform will-change-opacity mt-5 md:mt-2'>health,</h2>
            </div>

            <div
                ref={section2Ref}
                className='absolute inset-0 flex flex-col justify-center text-end text-[28px] sm:text-4xl md:text-5xl lg:text-7xl tracking-wider uppercase text-[#2D3F28]! pr-4 sm:pr-6 md:pr-10 py-10 md:py-0 gap-2 md:gap-0 font-heading! sm:leading-tight md:leading-tight lg:leading-[1.1]'
            >
                <h2 className='line-2 will-change-transform will-change-opacity mt-5 md:mt-2'>designed to enhance</h2>
                <h2 className='line-2 will-change-transform will-change-opacity mt-5 md:mt-2'>productivity, resilience,</h2>
                <h2 className='line-2 will-change-transform will-change-opacity mt-5 md:mt-2'>and engagement</h2>
                <h2 className='line-2 will-change-transform will-change-opacity mt-5 md:mt-2'>across your</h2>
                <h2 className='line-2 will-change-transform will-change-opacity mt-5 md:mt-2'>organisation or</h2>
                <h2 className='line-2 will-change-transform will-change-opacity mt-5 md:mt-2'>institution.</h2>
            </div>
        </div>
    );
};

export default FadeInText;