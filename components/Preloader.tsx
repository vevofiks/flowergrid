"use client";

import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLoading } from "@/contexts/LoadingContext";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const container = useRef(null);
    const { setPreloaderComplete } = useLoading();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".preloader-text", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out"
        })
            .from(".preloader-line", {
                scaleX: 0,
                duration: 1,
                ease: "expo.out"
            }, "-=0.8");

    }, { scope: container });

    useGSAP(() => {
        if (!isLoading) {
            const exitTl = gsap.timeline({
                onComplete: () => {
                    if (container.current) {
                        (container.current as HTMLElement).style.display = "none";
                    }
                }
            });

            exitTl.to(".preloader-content", {
                y: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.in"
            })
                .to(".preloader-panel", {
                    height: "0%",
                    duration: 1.2,
                    stagger: 0.06,
                    ease: "power4.inOut",
                    onStart: () => {
                        setTimeout(() => {
                            setPreloaderComplete(true);
                        }, 200);
                    }
                }, "-=0.4");
        }
    }, {
        scope: container,
        dependencies: [isLoading]
    });

    return (
        <div
            ref={container}
            className="fixed inset-0 z-9999 flex items-end justify-center pointer-events-none"
        >
            <div className="absolute inset-0 flex w-full h-full pointer-events-auto">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="preloader-panel flex-1 h-full bg-primary border-r border-white/5 last:border-none origin-top"
                    />
                ))}
            </div>

            <div className="preloader-content absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <div className="overflow-hidden">
                    <h1 className="preloader-text text-5xl md:text-7xl font-heading text-white! tracking-widest uppercase">
                        FlowerGrid
                    </h1>
                </div>

                <div className="w-24 h-px bg-white my-4 preloader-line origin-left" />

                <div className="overflow-hidden">
                    <p className="preloader-text text-sm md:text-base font-sans text-white! tracking-[0.3em] uppercase">
                        Wellbeing
                    </p>
                </div>
            </div>
        </div>
    );
}