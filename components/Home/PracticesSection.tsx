"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] aspect-4/5 md:aspect-3/3 cursor-pointer shadow-lg shadow-black/5">
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
                <div className="bg-[#432A0F]/50 backdrop-blur-md px-3 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-full">
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            checkScroll();
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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
            className="w-full h-auto py-10 md:py-20 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="w-full  flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                <div className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-12 relative">

                    <div
                        ref={scrollContainerRef}
                        className="w-full h-[450px] md:h-auto overflow-x-auto scrollbar-hide snap-x snap-mandatory overflow-y-hidden"
                    >
                        <div className="flex items-start gap-6 md:gap-12 py-6 min-w-full md:mb-[60px]">

                            {/* Mind Card */}
                            {mindPractice && (
                                <div className="col-1-item group transition-transform duration-500 ease-out hover:-translate-y-3 shrink-0 w-[75vw] sm:w-[50vw] md:w-[31%] lg:w-[calc(33.333%-2rem)] snap-center md:snap-start md:mt-0">
                                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                        <Card practice={mindPractice} />
                                    </div>
                                </div>
                            )}

                            {/* Body Card */}
                            {bodyPractice && (
                                <div className="col-2-item group transition-transform duration-500 ease-out hover:-translate-y-3 shrink-0 w-[75vw] sm:w-[50vw] md:w-[31%] lg:w-[calc(33.333%-2rem)] snap-center md:snap-start md:mt-15">
                                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                        <div className="hidden md:block min-h-16">
                                            <p className="text-[#5A5A5A] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-sans leading-tight lg:leading-snug">
                                                Each practice plays a part in restoring balance to the mind, body, and spirit
                                            </p>
                                        </div>
                                        <Card practice={bodyPractice} />
                                    </div>
                                </div>
                            )}

                            {/* Spirit Card */}
                            {spiritPractice && (
                                <div className="col-3-item group transition-transform duration-500 ease-out hover:-translate-y-3 shrink-0 w-[75vw] sm:w-[50vw] md:w-[31%] lg:w-[calc(33.333%-2rem)] snap-center md:snap-start md:mt-30">
                                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                                        <div className="hidden md:block min-h-16">
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

                    {/* Navigation Buttons - Hidden on Desktop */}
                    <div className="flex md:hidden justify-center gap-10 items-center w-full mt-4 md:mt-8 px-2">
                        <button
                            onClick={() => scroll('left')}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#535D4E]/20 flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'opacity-100 bg-white hover:bg-[#535D4E] hover:text-white cursor-pointer shadow-md' : 'opacity-30 cursor-not-allowed'}`}
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#535D4E]/20 flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'opacity-100 bg-white hover:bg-[#535D4E] hover:text-white cursor-pointer shadow-md' : 'opacity-30 cursor-not-allowed'}`}
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
