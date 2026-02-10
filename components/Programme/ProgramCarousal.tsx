"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export interface DecorativeImage {
    src: string;
    alt: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    className?: string;
}

export interface ProgramData {
    id: number;
    title: string;
    description: string;
    benefits: string[];
    buttonText: string;
    buttonLink?: string;
    imageUrl: string;
    imageAlt: string;
    decorativeImages?: DecorativeImage[];
}

interface ProgramCarouselProps {
    programs: ProgramData[];
    onButtonClick?: (programId: number) => void;
}

const getPositionClasses = (position: string): string => {
    const positions = {
        'top-left': '-top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-4 md:-left-4 lg:-top-6 lg:-left-24',
        'top-right': '-top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-16 md:-right-16 lg:-top-20 lg:-right-20',
        'bottom-left': '-bottom-6 -left-6 sm:-bottom-8 sm:-left-8 md:-bottom-16 md:-left-16 lg:-bottom-20 lg:-left-20',
        'bottom-right': '-bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-0 md:-right-10 lg:-bottom-10 lg:-right-20'
    };
    return positions[position as keyof typeof positions] || '';
};

export default function ProgramCarousel({ programs, onButtonClick }: ProgramCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const sections = sectionsRef.current;

        sections.forEach((section, index) => {
            if (!section) return;

            const image = section.querySelector('.program-image');
            const content = section.querySelector('.program-content');
            const decoratives = section.querySelectorAll('.decorative-element');

            gsap.set(image, { opacity: 0, scale: 0.95 });
            gsap.set(content, { opacity: 0, y: 30 });
            gsap.set(decoratives, { opacity: 0, scale: 0.8, rotation: -10 });

            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.to(image, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                    gsap.to(content, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "power2.out"
                    });
                    gsap.to(decoratives, {
                        opacity: 0.7,
                        scale: 1,
                        rotation: 0,
                        duration: 1,
                        delay: 0.4,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                    setCurrentSection(index);
                },
                onEnterBack: () => {
                    setCurrentSection(index);
                }
            });
        });

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setIsNavVisible(true),
            onLeave: () => setIsNavVisible(false),
            onEnterBack: () => setIsNavVisible(true),
            onLeaveBack: () => setIsNavVisible(false),
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [programs]);

    const scrollToSection = (index: number) => {
        const section = sectionsRef.current[index];
        if (!section) return;

        gsap.to(window, {
            scrollTo: {
                y: section,
                offsetY: 0
            },
            duration: 1,
            ease: "power2.inOut"
        });
    };

    const handleButtonClick = (programId: number) => {
        if (onButtonClick) {
            onButtonClick(programId);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative bg-[#F3E5CB]"
        >
            {/* Section Heading */}
            <div className="text-center pt-16 md:pt-20 pb-8 md:pb-12">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal">
                    Explore Our Transformational <br /> programs
                </h2>
            </div>

            {/* Navigation Arrows */}
            <div className={`fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-4 transition-all duration-500 ${isNavVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
                }`}>
                <button
                    onClick={() => scrollToSection(currentSection - 1)}
                    disabled={currentSection === 0}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#A67C52] text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl ${currentSection === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#8B6844] hover:scale-110'
                        }`}
                    aria-label="Previous section"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>

                <button
                    onClick={() => scrollToSection(currentSection + 1)}
                    disabled={currentSection === programs.length - 1}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#A67C52] text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl ${currentSection === programs.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#8B6844] hover:scale-110'
                        }`}
                    aria-label="Next section"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Program Sections */}
            {programs.map((program, index) => {
                const isImageLeft = index % 2 === 0;

                return (
                    <div
                        key={program.id}
                        ref={(el) => { sectionsRef.current[index] = el; }}
                        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-20 py-16 md:py-20 snap-start"
                    >
                        {/* Main Content */}
                        <div className={`max-w-7xl w-full flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } items-center gap-6 md:gap-10 lg:gap-16 xl:gap-20`}>

                            {/* Image Section */}
                            <div className="program-image w-full md:w-3/5 lg:w-1/2">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={program.imageUrl}
                                        alt={program.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="program-content w-full md:w-2/5 lg:w-1/2">
                                <div className="relative p-6 md:p-8 lg:p-12 xl:p-16 border-2 border-[#A67C52] rounded-3xl overflow-hidden">
                                    {/* Decorative Images */}
                                    {program.decorativeImages?.map((decorative, idx) => (
                                        <div
                                            key={idx}
                                            className={`decorative-element absolute ${getPositionClasses(decorative.position)} z-10 pointer-events-none`}
                                        >
                                            <Image
                                                src={decorative.src}
                                                alt={decorative.alt}
                                                width={250}
                                                height={250}
                                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-56 lg:h-56 xl:w-60 xl:h-60 object-contain"
                                            />
                                        </div>
                                    ))}
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 text-center leading-tight">
                                        {program.title}
                                    </h2>

                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 text-center">
                                        {program.description}
                                    </p>

                                    <div className="mb-8">
                                        <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900 mb-4 text-center">
                                            Key Benefits:
                                        </h3>
                                        <ul className="space-y-3">
                                            {program.benefits.map((benefit, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm md:text-base text-gray-700 flex items-start gap-3 justify-center"
                                                >
                                                    <span className="text-[#A67C52] mt-1 font-bold">•</span>
                                                    <span className="text-center">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handleButtonClick(program.id)}
                                            className="px-8 py-3 bg-[#A67C52] hover:bg-[#8B6844] text-white rounded-full font-medium text-sm md:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                                        >
                                            {program.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}