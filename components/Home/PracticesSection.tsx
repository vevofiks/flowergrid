"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
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

const Card = ({ practice }: { practice: Practice }) => (
    <Link href={'/services'}>
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] lg:rounded-[28px] aspect-[3/4] cursor-pointer">
            <Image
                src={practice.image}
                alt={practice.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 lg:top-4 lg:right-4 z-10">
                <button className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-black" />
                </button>
            </div>

            <div className="absolute bottom-2.5 left-2.5 md:bottom-3 md:left-3 lg:bottom-4 lg:left-4 z-10">
                <div className="bg-[#432A0F]/50 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-full">
                    <span className="text-white text-xs md:text-sm lg:text-sm font-medium font-heading tracking-wide">
                        {practice.title}
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

export default function PracticesSection({
    practices,
}: PracticesSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    // Safety check for practices
    if (!practices || practices.length === 0) {
        return null;
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".col-1-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".col-2-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.7")
            .from(".col-3-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.7");

    }, { scope: sectionRef });

    const mindPractice = practices.find(p => p.id === 'mind') || practices[0];
    const bodyPractice = practices.find(p => p.id === 'body') || practices[1];
    const spiritPractice = practices.find(p => p.id === 'spirit') || practices[2];

    return (
        <section
            ref={sectionRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
        >
            <div className="w-full h-full flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12">
                <div className="w-full max-w-[1000px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-5 xl:gap-8">

                        {/* Column 1: Text + Mind Card */}
                        {mindPractice && (
                            <div className="col-1-item group transition-transform duration-500 ease-out hover:-translate-y-3">
                                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                    <Card practice={mindPractice} />
                                </div>
                            </div>
                        )}

                        {/* Column 2: Text + Body */}
                        {bodyPractice && (
                            <div className="col-2-item group transition-transform duration-500 ease-out hover:-translate-y-3">
                                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                    <div>
                                        <p className="text-[#5A5A5A] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-sans leading-tight lg:leading-snug">
                                            Each practice plays a part in restoring balance to the mind, body, and spirit
                                        </p>
                                    </div>
                                    <Card practice={bodyPractice} />
                                </div>
                            </div>
                        )}

                        {/* Column 3: Text + Spirit */}
                        {spiritPractice && (
                            <div className="col-3-item group transition-transform duration-500 ease-out hover:-translate-y-3 sm:col-span-2 lg:col-span-1">
                                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                    <div className="hidden lg:block h-12 xl:h-16"></div>
                                    <div>
                                        <p className="text-[#5A5A5A] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-sans leading-tight lg:leading-snug">
                                            bringing clarity, health, and calm through evidence-based and holistic care
                                        </p>
                                    </div>
                                    <Card practice={spiritPractice} />
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}