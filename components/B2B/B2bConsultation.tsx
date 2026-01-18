"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftTextRef = useRef<HTMLHeadingElement>(null);
    const rightTextRef = useRef<HTMLHeadingElement>(null);
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

        tl.fromTo(buttonRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
        );

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="bg-[#F3EAD8] h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-8"
        >
            <div className="w-full max-w-[90vw] xl:max-w-7xl flex flex-col mb-10 md:mb-16">

                <h1
                    ref={leftTextRef}
                    className="text-left text-[#1C1C1C] font-sans font-medium tracking-wide leading-[0.9] opacity-0
                      text-2xl md:text-8xl lg:text-[5rem] "
                >
                    BRING HOLISTIC WELLNESS
                </h1>

                <h1
                    ref={rightTextRef}
                    className="text-right text-[#1C1C1C] font-sans font-medium tracking-wide leading-[0.9] opacity-0 mt-2 md:mt-4
                     text-2xl md:text-8xl lg:text-[5rem] "
                >
                    TO YOUR ORGANISATION
                </h1>
            </div>

            <button
                ref={buttonRef}
                className="bg-primary text-white font-medium rounded-full tracking-wider hover:bg-[#8F7A52] transition-colors duration-300 opacity-0 shadow-lg cursor-pointer
                   text-xs px-14 py-3 
                   md:text-base md:px-12 md:py-4"
            >
                Request a Consultation
            </button>
        </section>
    );
};

export default ContactSection;