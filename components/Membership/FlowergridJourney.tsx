"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlowergridJourney() {
    const containerRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const beamRef = useRef<HTMLDivElement>(null);

    const journeySteps = [
        {
            title: "Awakening",
            description:
                "Discover your current patterns, habits, and blocks. Gain insight into what’s holding you back and where your energy is focused.",
            image: "/membership/f1.png",
        },
        {
            title: "Alignment",
            description:
                "Integrate mind, body, and spirit practices. Learn to harmonise daily routines, mindset, and lifestyle for balanced energy and focus.",
            image: "/membership/f2.png",
        },
        {
            title: "Healing",
            description:
                "Release emotional and subconscious blocks through coaching, hypnotherapy, and holistic techniques. Restore inner calm and resilience.",
            image: "/membership/f3.png",
        },
        {
            title: "Transformation",
            description:
                "Adopt new habits, behaviours, and perspectives. Build confidence, clarity, and direction to move forward with purpose.",
            image: "/membership/f4.png",
        }, {
            title: "Integration",
            description: "Embed sustainable change into your daily life. Maintain long-term wellbeing, conscious living, and a sense of empowered alignment Through this journey, the Flowergrid Holistic Transformation Programme helps you reconnect, heal, and grow into the most aligned, empowered version of yourself.",
            image: "/membership/f1.png",
        }
    ];

    useGSAP(() => {
        const isMobile = window.innerWidth < 768;
        gsap.fromTo(
            beamRef.current,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.5,
                },
            }
        );

        const sections = gsap.utils.toArray<HTMLElement>(".journey-step");

        sections.forEach((section, index) => {
            const q = gsap.utils.selector(section);
            const isEven = index % 2 === 0;

            gsap.fromTo(
                q(".step-image"),
                {
                    opacity: 0,
                    y: isMobile ? 30 : 0,
                    x: isMobile ? 0 : (isEven ? -50 : 50)
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );

            // Animate Text
            gsap.fromTo(
                q(".step-text"),
                {
                    opacity: 0,
                    y: isMobile ? 30 : 0,
                    x: isMobile ? 0 : (isEven ? 50 : -50)
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );

            gsap.fromTo(
                q(".step-dot"),
                { backgroundColor: "#F3EAD8", borderColor: "#8c5e35", scale: 1 },
                {
                    backgroundColor: "#8c5e35",
                    borderColor: "#F3EAD8",
                    scale: 1.3,
                    duration: 0.4,
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        end: "bottom center",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full mb-20">

            <div className="pt-20 pb-10 text-center top-0 z-10 backdrop-blur-sm">
                <h2 className="text-3xl md:text-5xl font-heading text-[#3a3a3a] mb-4">
                    The Flowergrid Journey
                </h2>
                <p className="text-[#5a5a5a] text-sm md:text-base max-w-2xl mx-auto px-6">
                    Our membership is a guided, structured journey, supporting you step-by-step
                    to create clarity, balance, and lasting transformation.
                </p>
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-0">

                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#8c5e35]/20 z-0">
                    <div
                        ref={beamRef}
                        className="w-full bg-[#8c5e35] shadow-[0_0_10px_#8c5e35]"
                        style={{ height: '0%' }}
                    />
                </div>

                {journeySteps.map((step, index) => (
                    <div
                        key={index}
                        className={`journey-step w-full min-h-[70vh] md:h-screen flex flex-col md:flex-row items-start md:items-center justify-center relative py-12 md:py-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div className={`w-full md:w-1/2 flex items-center mb-6 md:mb-0 pl-12 md:pl-0 ${index % 2 === 1 ? "md:justify-start md:pl-8 lg:pl-20" : "md:justify-end md:pr-8 lg:pr-20"
                            }`}>
                            <div className="step-image w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] relative">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>

                        <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                            <div className="step-dot w-3 h-3 md:w-6 md:h-6 bg-[#F3EAD8] rounded-full border-2 md:border-[3px] border-[#8c5e35] transition-all duration-300"></div>
                        </div>
                        <div className={`w-full md:w-1/2 flex items-center pl-12 md:pl-0 ${index % 2 === 1 ? "md:justify-end md:pr-8 lg:pr-20" : "md:justify-start md:pl-8 lg:pl-20"
                            }`}>
                            <div className="step-text max-w-md text-left pr-4 md:pr-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-[#3a3a3a] mb-3 md:mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-[#5a5a5a] font-sans leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}