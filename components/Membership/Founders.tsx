"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Founders() {
    const sectionRef = useRef<HTMLElement>(null);
    const saminaRef = useRef<HTMLDivElement>(null);
    const moniraRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });


        tl.from(saminaRef.current?.querySelector(".content-block")!, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, 0)
            .from(saminaRef.current?.querySelector(".image-block")!, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, 0);


        tl.from(moniraRef.current?.querySelector(".image-block")!, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "-=0.5")
            .from(moniraRef.current?.querySelector(".content-block")!, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "<");

    }, { scope: sectionRef });
    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F3EAD8] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto flex flex-col gap-20 lg:gap-32">

                <div ref={saminaRef} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    <div className="image-block w-full lg:flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[450px] aspect-[3/5] md:aspect-[3/4] lg:aspect-[6/8] md:max-h-[600px] lg:mb-0">                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMGURL}about/person1/Samina.png`}
                                alt="Samina Khan"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="content-block flex-1 order-2 lg:order-1 text-center lg:text-left">
                        <h2 className="text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-heading font-normal mb-2">
                            Meet <span className="font-medium">Samina Khan</span>
                        </h2>
                        <h3 className="text-[#C19A6B] text-xl md:text-2xl font-sans font-light mb-6">
                            Co-Founder & Wellness Strategist
                        </h3>
                        <p className="text-[#4A4A4A] text-base md:text-lg font-sans leading-relaxed mb-8">
                            Samina has over 12 years of experience supporting individuals through mental health and holistic wellness initiatives. She blends evidence-based coaching, energy work, and psychological techniques to help clients uncover patterns, release emotional blocks, and create sustainable habits. Through the FlowerGrid programmes, Samina guides members from self-discovery to transformation, ensuring each step integrates mind, body, and spirit. Her practical, compassionate approach helps you build clarity, resilience, and long-term wellbeing.
                        </p>
                        <Link href="/about/samina-khan">
                            <button className="bg-[#9C8255] hover:bg-[#856E46] text-white font-medium text-base md:text-lg px-8 py-4 rounded-full transition-colors duration-300 shadow-md">
                                Learn more about Samina
                            </button>
                        </Link>
                    </div>
                </div>
                <div ref={moniraRef} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    <div className="image-block w-full lg:flex-1 order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[450px] aspect-square md:aspect-[3/4] max-h-[400px] md:max-h-[600px] mb-4 lg:mb-0">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMGURL}about/person2/monira.png`}
                                alt="Monira Ahmed"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="content-block flex-1 order-2 text-center lg:text-right">
                        <h2 className="text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-heading font-normal mb-2">
                            Meet <span className="font-medium">Monira Ahmed</span>
                        </h2>
                        <h3 className="text-[#C19A6B] text-xl md:text-2xl font-sans font-light mb-6">
                            Co-Founder & Leadership Life Coach
                        </h3>
                        <p className="text-[#4A4A4A] text-base md:text-lg font-sans leading-relaxed mb-8">
                            Monira brings a unique blend of global strategy, human behaviour insight, and coaching expertise. She combines NLP, mindset training, and wellbeing practices to support clients in aligning their personal and professional lives. In the FlowerGrid programmes, Monira focuses on conscious living, habit transformation, and mind-body-soul integration. She empowers members to gain confidence, make lasting changes, and step fully into their potential.
                        </p>
                        <Link href="/about/monira-ahmed">
                            <button className="bg-[#9C8255] hover:bg-[#856E46] text-white font-medium text-base md:text-lg px-8 py-4 rounded-full transition-colors duration-300 shadow-md">
                                Learn more about Monira
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}