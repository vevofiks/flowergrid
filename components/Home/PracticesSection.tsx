"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Practice {
    id: string;
    title: string;
    image: string;
}

interface PracticesSectionProps {
    practices: Practice[];
}

export default function PracticesSection({
    practices,
}: PracticesSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate columns or items
        tl.from(".col-1-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".col-2-text", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.8")
            .from(".col-2-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6")
            .from(".col-3-text", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.8")
            .from(".col-3-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6")
            .from(".main-arrow-btn", {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.4");

    }, { scope: sectionRef });

    const mindPractice = practices.find(p => p.id === 'mind') || practices[0];
    const bodyPractice = practices.find(p => p.id === 'body') || practices[1];
    const spiritPractice = practices.find(p => p.id === 'spirit') || practices[2];

    const Card = ({ practice, className }: { practice: Practice, className?: string }) => (
        <Link href={'/services'}>
            <div className={`group relative overflow-hidden rounded-[28px] aspect-[4/5] sm:aspect-[5/4] md:aspect-[5/6] cursor-pointer ${className}`}>
                <Image
                    src={practice.image}
                    alt={practice.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-6 right-6 z-10">
                    <button className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm">
                        <ArrowUpRight className="w-6 h-6 md:w-5 md:h-5 text-black" />
                    </button>
                </div>

                <div className="absolute bottom-8 left-8 z-10">
                    <div className="bg-[#432A0F]/40 backdrop-blur-sm px-6 sm:px-8 py-3 rounded-full">
                        <span className="text-white text-xl md:text-lg font-medium font-heading tracking-wider">
                            {practice.title}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <section
            ref={sectionRef}
            className="w-full py-6 px-6 md:px-12 lg:py-20 overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                    <div className="flex flex-col gap-8">
                        <Card practice={mindPractice} />
                    </div>

                    {/* Column 2: Text + Body */}
                    <div className="flex flex-col gap-8 pt-0 lg:pt-0">
                        <div className="col-2-text mb-4 lg:mb-8">
                            <p className="text-[#4A4A4A] text-2xl lg:text-3xl font-sans leading-tight max-w-[90%]">
                                Each practice plays a part in restoring balance to the mind, body, and spirit
                            </p>
                        </div>
                        <div className="col-2-card">
                            <Card practice={bodyPractice} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 relative">
                        <div className="hidden lg:block h-32 xl:h-40"></div>

                        <div className="col-3-text mb-4 lg:mb-8 pl-4 border-l-0 lg:border-l-0">
                            <p className="text-[#4A4A4A] text-2xl lg:text-3xl font-sans leading-snug max-w-[90%]">
                                bringing clarity, health, and calm through evidence-based and holistic care
                            </p>
                        </div>

                        <div className="col-3-card relative">
                            <Card practice={spiritPractice} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
