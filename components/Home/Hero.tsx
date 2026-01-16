"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLoading } from "@/contexts/LoadingContext";

export default function Hero() {
    const container = useRef(null);
    const textRef = useRef(null);
    const flowerRef = useRef(null);
    const heroImageRef = useRef(null);
    const { isPreloaderComplete } = useLoading();

    useGSAP(() => {

        gsap.set(".hero-text-element", { opacity: 0, y: 40 });
        gsap.set(flowerRef.current, { opacity: 0, x: 50 });
        gsap.set(heroImageRef.current, { y: -100, opacity: 0 });


        if (!isPreloaderComplete) return;

        const tl = gsap.timeline();


        tl.to(heroImageRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.6,
            ease: "power3.out"
        }, 0)


            .to(".hero-text-element", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                clearProps: "all"
            }, 0.2)

            .to(flowerRef.current, {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }, "-=0.8");


        gsap.to(flowerRef.current, {
            y: -20,
            rotation: 5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: container, dependencies: [isPreloaderComplete] })

    return (
        <section ref={container} className="relative w-full min-h-screen flex flex-col bg-background overflow-x-hidden">
            <div ref={heroImageRef} className="relative w-full h-[50vh] md:h-[65vh] lg:h-[78vh]">
                <Image
                    src="/Home/H1.png"
                    alt="Hero Image"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            <div className="relative w-full flex-1 px-6 md:px-12 lg:px-14 pb-20 pt-4 md:pt-0">
                <div ref={flowerRef} className="absolute top-[-20px] right-[20px] w-40 md:top-auto md:right-3 md:w-100 lg:w-150 pointer-events-none z-0">
                    <Image
                        src="/Home/hero-flower.png"
                        width={600}
                        height={600}
                        alt="Decorative Flower"
                        className="w-full h-auto"
                    />
                </div>

                <div ref={textRef} className="relative z-10 -mt-16.25 max-w-4xl">
                    <h1 className="hero-text-element medium leading-[1.1] text-4xl md:text-6xl lg:text-[59px]">
                        EMBRACE HEALTH INTEGRATION <br className="hidden md:block" />
                        OF MIND, BODY & SOUL <br className="hidden md:block" />
                        WITH
                    </h1>

                    <p className="hero-text-element mt-6 md:mt-8 text-lg md:text-xl max-w-2xl">
                        <span className="font-bold text-gray-600">Samina Khan</span>, wellbeing coach with expertise in
                        integrated holistic practices for mind and body
                    </p>

                    <div className="hero-text-element mt-10 flex flex-wrap md:flex-col gap-4">
                        <button className="w-full md:w-100 px-8 py-4 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                            Book a Discovery Session
                        </button>
                        <button className="w-full md:w-120 px-8 py-4 border border-[#171717] text-[#17171] rounded-full font-medium hover:bg-primary hover:border-primary hover:text-white transition-colors">
                            Discover the Flower of Life Approach
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}