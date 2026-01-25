"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ProgrammeCard {
    id: number;
    title: string;
    description: string;
    details?: string[];
}

interface ProgrammeCardsProps {
    cards?: ProgrammeCard[];
}

const defaultCards: ProgrammeCard[] = [
    {
        id: 1,
        title: "Medical and holistic expertise working together",
        description:
            "Our team includes GPs, therapists, coaches and holistic practitioners. You are not passed from one professional to another – you receive one joined approach.",
    },
    {
        id: 2,
        title: "Reviews that keep you on track",
        description:
            "Regular check-ins allow us to update your plan, monitor your wellbeing and measure meaningful change.",
    },
    {
        id: 3,
        title: "A clearer understanding of you",
        description:
            "We begin with a set of assessments that help us understand how you think, feel and function. This may include:",
        details: [
            "health markers",
            "stress and sleep indicators",
            "personality mapping",
            "reflective questioning",
            "These insights guide every step that follows.",
        ],
    },
    {
        id: 4,
        title: "A programme built around your needs",
        description:
            "No two clients receive the same structure. Your plan is created by combining your assessment results with your goals, lifestyle and preferred pace of progress.",
    },
    {
        id: 5,
        title: "One place, many forms of support",
        description:
            "Whether you join online or onsite, you have access to the full panel of experts and the complete FlowerGrid method.",
    },
];

const ProgrammeCards: React.FC<ProgrammeCardsProps> = ({ cards = defaultCards }) => {
    return (
        <section className="relative py-16 px-4 md:px-8 lg:px-16 lg:mt-24 overflow-hidden mt-50 mb-20">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-center py-10 md:mb-20 text-text-heading leading-tight">
                What Makes FlowerGrid Programmes
                <br /> Different
            </h2>

            {/* Cards Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                {/* Decorative curved lines - Behind the cards */}

                <svg className="absolute inset-0 w-screen -left-82 top-100 md:-top-[65rem] pointer-events-none opacity-40 -z-10" width="170%" height="200%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M-50 400 
                        C 150 150, 450 150, 720 400  
                        S 1250 650, 1490 400" 
                        stroke="#8C8C73"
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                    />
                </svg>

                <svg
                    className="absolute inset-0 w-[1900px] left-[-20rem] top-[17rem]  h-full pointer-events-none opacity-40 -z-10"
                    viewBox="0 0 1725 639"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    transform="scale(-1, 1)"
                >
                    <path d="M0.394531 307.332C17.3945 285.665 64.7945 255.332 118.395 307.332C185.395 372.332 620.895 685.332 857.395 631.832C1093.89 578.332 1409.89 220.532 1525.89 77.0319C1618.69 -37.7682 1704.23 2.16521 1724.39 33.8319" stroke="#9C7D4D" strokeWidth="2" />
                </svg>


                {cards.map((card, index) => {
                    const cardRef = useRef<HTMLDivElement>(null);

                    const handleMouseEnter = () => {
                        gsap.to(cardRef.current, {
                            y: -10,
                            duration: 0.4,
                            ease: "power2.out",
                        });
                    };

                    const handleMouseLeave = () => {
                        gsap.to(cardRef.current, {
                            y: 0,
                            duration: 0.4,
                            ease: "power2.inOut",
                        });
                    };

                    return (
                        <div
                            key={card.id}
                            ref={cardRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`relative ${index === 2 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}`}
                        >
                            {/* Double Border Card - Outer Container */}
                            <div className="group w-full border-2 border-[#C4A484] rounded-3xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                {/* Inner Filled Container */}
                                <div className="w-full h-full bg-[#E5CCA1] rounded-2xl p-8 md:p-10 flex flex-col group-hover:bg-[#97794A] ">
                                    {/* Leaf decoration - Inside the card at top */}
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src="/Home/leaf.png"
                                            alt="Leaf decoration"
                                            width={50}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-heading mb-4 group-hover:text-white!">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-text-body leading-relaxed group-hover:text-white!">
                                            {card.description}
                                        </p>

                                        {/* Details list if available */}
                                        {card.details && (
                                            <ul className="mt-4 text-sm md:text-base text-text-body space-y-1 group-hover:text-white!">
                                                {card.details.map((detail, idx) => (
                                                    <li key={idx} className={detail.includes("These") ? "mt-2" : ""}>
                                                        {detail.startsWith("•") || detail.startsWith("These") ? (
                                                            detail
                                                        ) : (
                                                            `• ${detail}`
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default ProgrammeCards;