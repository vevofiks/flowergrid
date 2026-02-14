"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import Link from "next/link";

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
            <div ref={heroImageRef} className="relative w-full h-[50vh] md:h-[65vh] lg:h-[82vh]">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMGURL}home/H1.png`}
                    alt="Hero Image"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            <div className="relative w-full flex-1 px-6 md:px-12 lg:px-14 pb-20 pt-0">
                <div ref={flowerRef} className="absolute -top-5 right-5 w-40 md:top-10 md:right-3 md:w-100 lg:w-150 pointer-events-none z-0">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMGURL}home/hero-flower.png`}
                        width={600}
                        height={600}
                        alt="Decorative Flower"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div ref={textRef} className="relative z-10 md:-mt-6                                                                                                                                                                                                                     max-w-4xl">
                    <h1 className="hero-text-element medium leading-[1.1] text-4xl md:text-6xl lg:text-[59px]">
                    Integrating Mind, Body & Soul for Complete Wellbeing
                    </h1>                                                                                                                                       

                    <p className="hero-text-element mt-6 md:mt-8 text-lg md:text-xl max-w-2xl">
                        Flowergrid is a holistic wellness centre in the UK, guiding you toward balance, clarity and conscious living through integrative mind-body-spirit practices.
                    </p>

                    <div className="hero-text-element mt-10 flex flex-wrap md:flex-col gap-4">
                        <Link href={`/contact-us`} >
                        <button className="w-full md:w-100 px-8 py-4 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                            Book a Discovery Session
                        </button>
                        </Link>
                        <button className="w-full md:w-120 px-8 py-4 border border-[#171717] text-[#17171] text-sm md:text-base rounded-full font-medium hover:bg-primary hover:border-primary hover:text-white transition-colors">
                            Discover the Flower of Life Approach
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}