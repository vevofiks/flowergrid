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
        thumb: "/Home/H4 d.png",
        details: "Improve your health, energy, and lifestyle habits through personalised guidance. Integrating medical insight with holistic practices ensures long-term vitality and wellbeing.",
        benefits: ["Increased energy and stamina", "Sustainable nutrition and movement habits", "Enhanced physical health"]
    },
    {
        id: 2,
        title: "Calm, Focused, Resilient",
        thumb: "/Home/H4 e.png",
        details: "Reduce anxiety, gain clarity, and cultivate emotional balance. Practical tools and expert guidance support daily resilience, helping you make decisions with confidence and calm.",
        benefits: ["Reduced stress and overwhelm", "Clear thinking and focus", "Emotional balance in daily life"]
    },
    {
        id: 3,
        title: "Aligned and Purposeful",
        thumb: "/Home/H4 f.png",
        details: "Deepen self-awareness, align with your purpose, and nurture inner calm. Mindfulness, reflection, and integrative practices foster a sense of harmony and direction.",
        benefits: ["Heightened self-awareness", "Stronger connection to purpose", "Lasting inner calm and balance"]
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
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
        >
            <div className="intro-text text-center max-w-5xl mb-12 md:mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-black! mb-4">
                    What You Will Achieve
                </h2>
                <p className="text-base md:text-lg lg:text-xl font-sans text-black/70! leading-relaxed">
                    Experience transformation that touches every part of your being. 
                    <br />
                    FlowerGrid programs are designed to create measurable, lasting impact
                    <br />
                    across mind, body, and spirit.                
                </p>
                <div className="mt-8">

                <button
                    className="px-8 py-3 bg-[#A67C52] hover:bg-[#8B6844] text-white rounded-full font-medium text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"

                >
                    Explore How We Support You

                </button>

                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 relative z-10 w-full justify-center items-start max-w-7xl">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="thumb-item flex flex-col items-center gap-6 flex-1"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                            <Image
                                src={section.thumb}
                                alt={section.title}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </div>

                        <h3 className="text-black! text-lg md:text-xl lg:text-2xl font-normal tracking-wide text-center px-4">
                            {section.title}
                        </h3>

                        <div className="p-6 rounded-2xl max-w-[400px]">
                            <p className="text-black/80 text-sm md:text-base leading-relaxed text-center">
                                {section.details}
                            </p>
                        </div>

                        <ul className="
                            list-disc text-black/80 
                            text-sm md:text-base md:text-lg lg:text-lg md:ml-10 lg:p-10
                            leading-relaxed text-center">
                            {section.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    );
}