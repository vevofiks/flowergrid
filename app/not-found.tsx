"use client";

import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const flowerLeftRef = useRef<HTMLDivElement>(null);
    const flowerRightRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial reveal animation
        const tl = gsap.timeline();

        tl.from(".nf-digit", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
        })
            .from(".nf-text-element", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            }, "-=0.8")
            .from([flowerLeftRef.current, flowerRightRef.current], {
                scale: 0,
                rotation: -15,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.75)",
            }, "-=0.5");

        // Floating animations for flowers
        gsap.to(flowerLeftRef.current, {
            y: -15,
            rotation: 5,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(flowerRightRef.current, {
            y: 15,
            rotation: -5,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5,
        });

        // Parallax effect on mouse move
        const handleMouseMove = (e: MouseEvent) => {
            if (typeof window === 'undefined') return;
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(".parallax-content", {
                x: xPos,
                y: yPos,
                duration: 2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, { scope: containerRef });

    return (
        <main
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background px-6 md:px-12 overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div
                ref={flowerLeftRef}
                className="absolute -left-20 -top-20 md:left-10 md:top-10 w-64 md:w-96 opacity-20 pointer-events-none"
            >
                <Image
                    src={`/home/hero-flower.png`}
                    alt="Decorative Flower"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div
                ref={flowerRightRef}
                className="absolute -right-20 -bottom-20 md:right-10 md:bottom-10 w-64 md:w-96 opacity-20 pointer-events-none transform rotate-180"
            >
                <Image
                    src={`/home/hero-flower.png`}
                    alt="Decorative Flower"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="parallax-content relative flex flex-col items-center text-center z-10">
                <div className="flex space-x-2 md:space-x-4 mb-2">
                    <span className="nf-digit text-7xl md:text-[180px] lg:text-[220px] font-gilroy-black text-primary leading-none">4</span>
                    <span className="nf-digit text-7xl md:text-[180px] lg:text-[220px] font-gilroy-black text-primary leading-none">0</span>
                    <span className="nf-digit text-7xl md:text-[180px] lg:text-[220px] font-gilroy-black text-primary leading-none">4</span>
                </div>

                <div ref={textRef} className="max-w-2xl px-4">
                    <h2 className="nf-text-element text-3xl md:text-5xl lg:text-6xl text-text-heading mb-6 tracking-tight">
                        The path you seek has shifted.
                    </h2>
                    <p className="nf-text-element text-lg md:text-xl text-text-body mb-10 leading-relaxed font-sans">
                        It seems you've wandered into a quiet corner of our garden. While this page doesn't exist, your journey toward holistic wellness continues.
                    </p>

                    <div className="nf-text-element">
                        <Link
                            href="/"
                            className="inline-block px-10 py-4 bg-primary text-white rounded-full font-medium text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg active:scale-95"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Subtle Floating Petal (Optional/Extra) */}
            <div className="absolute top-1/2 left-1/4 w-8 h-8 opacity-10 animate-pulse pointer-events-none">
                <Image
                    src={`/home/leaf.png`}
                    alt=""
                    width={32}
                    height={32}
                    className="w-full h-auto"
                />
            </div>
        </main>
    );
}
