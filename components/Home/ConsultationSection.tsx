"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ConsultationSectionProps {
    lineOne: string;
    lineTwo: string;
    subtext?: string;
    buttonText?: string;
    buttonLink: string;
}

const ConsultationSection: React.FC<ConsultationSectionProps> = ({
    lineOne,
    lineTwo,
    subtext,
    buttonText = "Request a Consultation",
    buttonLink
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLHeadingElement>(null);
    const rightTextRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(leftTextRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );

        tl.fromTo(rightTextRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.7"
        );

        if (subtext && subtextRef.current) {
            tl.fromTo(subtextRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.4"
            );
        }

        tl.fromTo(buttonRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="bg-[#F3EAD8] min-h-[60vh] md:min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 py-16 md:py-20"
        >
            <div className="w-full max-w-[90vw] xl:max-w-7xl flex flex-col mb-8 md:mb-12">
                <h1
                    ref={leftTextRef}
                    className="text-left text-[#1C1C1C] font-sans font-medium tracking-wide leading-[0.9] opacity-0
                     text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem]"
                >
                    {lineOne}
                </h1>

                <h1
                    ref={rightTextRef}
                    className="text-right text-[#1C1C1C] font-sans font-medium tracking-wide leading-[0.9] opacity-0 mt-2 md:mt-4
                     text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem]"
                >
                    FLOWERGRID
                </h1>
            </div>

            {subtext && (
                <p
                    ref={subtextRef}
                    className="text-[#4A4A4A] text-center text-sm md:text-base lg:text-xl font-sans leading-relaxed max-w-2xl mb-10 md:mb-14 opacity-0 px-4"
                >
                    {subtext}
                </p>
            )}

            <Link href={buttonLink}>
                <button
                    ref={buttonRef}
                    className="bg-primary text-white font-medium rounded-full tracking-wider transition-all duration-300 opacity-0 shadow-lg hover:shadow-xl hover:scale-105
                       text-xs px-8 py-3 
                       md:text-base md:px-12 md:py-4"
                >
                    {buttonText}
                </button>
            </Link>
        </section>
    );
};

export default ConsultationSection;