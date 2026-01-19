"use client";

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeInText = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const lines1 = gsap.utils.toArray(".line-1");
        const lines2 = gsap.utils.toArray(".line-2");
        const sections = gsap.utils.toArray(".text-section");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=350%",
                scrub: 1,
                pin: true,
            }
        });

        tl.fromTo(lines1,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" }
        );

        tl.to(sections, {
            yPercent: -100,
            duration: 2,
            ease: "power2.inOut"
        });

        tl.fromTo(lines2,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 2, stagger: 0.2, ease: "power3.out" }
        );

    }, { scope: containerRef });

    return (
        <div className='h-screen w-full relative bg-[#F3EAD8] overflow-hidden' ref={containerRef}>
            <div className='text-section flex flex-col h-screen w-full justify-center text-start text-[28px] sm:text-5xl md:text-6xl lg:text-[6rem] tracking-wider uppercase text-[#2D3F28]! pl-4 sm:pl-6 md:pl-10 font-heading! leading-[80px] md:leading-tight lg:leading-[140px]'>
                <h2 className='line-1'>Tailored workshops on </h2>
                <h2 className='line-1'>leadership, </h2>
                <h2 className='line-1'>communication, </h2>
                <h2 className='line-1'>wellbeing, and mental</h2>
                <h2 className='line-1'>health,</h2>
            </div>
            <div className='text-section flex flex-col h-screen w-full justify-center text-end text-3xl sm:text-5xl md:text-6xl lg:text-[6rem] tracking-wider uppercase text-[#2D3F28]! pr-4 sm:pr-6 md:pr-10 font-heading! leading-[80px] md:leading-tight lg:leading-[120px]'>
                <h2 className='line-2'>designed to enhance</h2>
                <h2 className='line-2'>productivity, resilience,</h2>
                <h2 className='line-2'>and engagement</h2>
                <h2 className='line-2'>across your</h2>
                <h2 className='line-2'>organization or</h2>
                <h2 className='line-2'>institution.</h2>
            </div>

        </div>
    )
}

export default FadeInText;