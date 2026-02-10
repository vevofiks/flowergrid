"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        id: 1,
        title: "Vitality and Strength",
        thumb: `/home/H4 d.png`,
        details: "Improve your health, energy, and lifestyle habits through personalised guidance. Integrating medical insight with holistic practices ensures long-term vitality and wellbeing.",
        // benefits: ["Increased energy and stamina", "Sustainable nutrition and movement habits", "Enhanced physical health"]
    },
    {
        id: 2,
        title: "Calm, Focused, Resilient",
        thumb: `/home/H4 e.png`,
        details: "Reduce anxiety, gain clarity, and cultivate emotional balance. Practical tools and expert guidance support daily resilience, helping you make decisions with confidence and calm.",
        // benefits: ["Reduced stress and overwhelm", "Clear thinking and focus", "Emotional balance in daily life"]
    },
    {
        id: 3,
        title: "Aligned and Purposeful",
        thumb: `/home/H4 f.png`,
        details: "Deepen self-awareness, align with your purpose, and nurture inner calm. Mindfulness, reflection, and integrative practices foster a sense of harmony and direction.",
        // benefits: ["Heightened self-awareness", "Stronger connection to purpose", "Lasting inner calm and balance"]
    },
];

export default function Achievement() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".intro-text", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
        tl.from(".thumb-item", {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.4");
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-4 px-4 md:py-16 md:px-8 lg:py-4 lg:px-12 overflow-hidden"
        >
            <div className="intro-text text-center max-w-5xl mb-8 md:mb-12 lg:mb-16 relative z-10 px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-black! mb-4">
                    What You Will Achieve
                </h2>
                <p className="text-base md:text-lg lg:text-xl font-sans text-black/70! leading-relaxed">
                
                    Experience transformation that touches every part of your being.
                    <br />
                    Holistic wellness programmes at Flowergrid are designed to create measurable impact.
                </p>
                <div className="mt-8">

                    <button
                        className="px-8 py-3 bg-[#A67C52] hover:bg-[#8B6844] text-white rounded-full font-medium text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        Explore How We Support You

                    </button>

                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-12 xl:gap-16 px-4 md:px-6 lg:px-10 relative z-10 w-full justify-center items-start max-w-7xl">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="thumb-item flex flex-col items-center gap-4 md:gap-5 lg:gap-6 flex-1 w-full md:w-auto"
                    >
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                            <Image
                                src={section.thumb}
                                alt={section.title}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </div>

                        <h3 className="text-black! text-lg md:text-xl lg:text-2xl font-normal tracking-wide text-center px-2 md:px-4">
                            {section.title}
                        </h3>

                        <div className="px-4 py-4 md:px-6 md:py-5 lg:px-6 lg:py-6 rounded-2xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
                            <p className="text-black/80 text-sm md:text-base lg:text-base leading-relaxed text-center">
                                {section.details}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}