'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MeetExperts() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate the title words one by one
        const titleWords = titleRef.current?.children;
        if (titleWords && titleWords.length > 0) {
            gsap.fromTo(titleWords,
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }

        // Animate the description text
        if (descriptionRef.current) {
            gsap.fromTo(descriptionRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    delay: 0.8,
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }

        // Animate the image
        if (imageRef.current) {
            gsap.fromTo(imageRef.current,
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 bg-[#F3E5CB]"
        >
            <div className="w-full max-w-7xl flex flex-col gap-8 sm:gap-10 md:gap-12">
                {/* Top Grid: Image + Title */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                    {/* Left Column: MEET + Image */}
                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-none">
                            MEET
                        </h2>
                        <div
                            ref={imageRef}
                            className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#D4C4A8] shadow-lg"
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMGURL}services/s2.png`}
                                alt="Meet our experts"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: OUR + Arrow + EXPERTS */}
                    <div
                        ref={titleRef}
                        className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center lg:mt-[10%] h-full"
                    >
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-wrap sm:flex-nowrap">
                            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-none text-black">
                                OUR
                            </span>
                            <Link
                            href={'/about/team'}
                            >
                             <button className="group px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 lg:px-16 lg:py-5 border-2 border-black rounded-full flex items-center justify-center hover:bg-primary hover:border-white active:scale-95 transition-all duration-300 flex-shrink-0 touch-manipulation">
                                <svg className="w-20 h-8 sm:w-24 sm:h-10 md:w-32 md:h-12 lg:w-[149px] lg:h-[63px] text-black group-hover:text-white! transition-colors duration-300" viewBox="0 0 149 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M99.3333 0C99.3333 3.339 103.884 8.325 108.491 12.51C114.413 17.91 121.491 22.6215 129.605 26.217C135.689 28.9125 143.065 31.5 149 31.5M149 31.5C143.065 31.5 135.683 34.0875 129.605 36.783C121.491 40.383 114.413 45.0945 108.491 50.4855C103.884 54.675 99.3333 59.67 99.3333 63M149 31.5H-3.8147e-06" stroke="currentColor" strokeWidth="3" />
                                </svg>
                            </button>
                            </Link>
                           
                        </div>
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-none text-black">
                            EXPERTS
                        </span>
                    </div>
                </div>

                <p
                    ref={descriptionRef}
                    className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-800 leading-relaxed max-w-5xl"
                >
                    Our method integrates the best of modern medicine with proven holistic techniques.
                    By addressing the mind, body and spirit together through our holistic wellness services, we help clients create lasting change.
                    Every journey is personalised and supported by a multidisciplinary team of
                    coaches, therapists and medical professionals.
                </p>

            </div>
        </section>
    );
}
