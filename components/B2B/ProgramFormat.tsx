"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        id: "intensive",
        title: "5-Day Intensive Programme",
        thumb: `/b2b/7.png`,
        details: "A guided wellbeing and leadership experience for teams seeking sustainable transformation. Includes personalised assessments, group coaching, and integrated mind-body workshops."
    },
    {
        id: "power",
        title: "Power Hour Sessions",
        thumb: `/b2b/8.png`,
        details: "Short, focused sessions offering immediate clarity and practical strategies for managers or teams facing specific challenges."
    },
    {
        id: "workshops",
        title: "Workshops and Events",
        thumb: `/b2b/9.png`,
        details: "Half-day or full-day group sessions designed to enhance emotional wellbeing, address anxiety and build a culture of open communication."
    },
];

export default function ProgramFormat() {
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

        tl.from(".proposal-btn", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
        >
            <div className="intro-text text-center max-w-5xl mb-12 md:mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-black! mb-4">
                    Programme Formats
                </h2>
                <p className="text-base md:text-xl lg:text-2xl font-sans text-black/70! leading-relaxed">
                    Choose a format that suits your organisation's needs and time frame.
                </p>
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
                    </div>
                ))}
            </div>

            <div className="proposal-btn mt-12 md:mt-16 flex justify-center relative z-10">
                <button className="bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-base font-semibold tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Request a Tailored Proposal
                </button>
            </div>

        </section>
    );
}