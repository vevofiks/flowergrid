'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function LeafScrollText({ lines }: { lines: string[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const leafRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const slug = usePathname();
    const isOurTeam = slug.split("/")[1] === "our-team";

    useGSAP(() => {
        const textLines = gsap.utils.toArray<HTMLElement>('.reveal-line');
        const totalDuration = 10;
        const swayDuration = totalDuration / lines.length;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=1000%",
                scrub: 1.5,
                pin: true,
            }
        });

        tl.set(leafRef.current, { top: "0%", x: -50, rotation: -45, opacity: 0 });
        tl.set(textLines, { color: "#3A4033", opacity: 0 });
        if (ctaRef.current) tl.set(ctaRef.current, { opacity: 0, y: 20 });

        tl.to(leafRef.current, { opacity: 1, duration: 0.5, ease: "power1.out" }, 0);

        tl.to(leafRef.current, {
            top: "110%",
            duration: totalDuration,
            ease: "none",
        }, 0);
        lines.forEach((_, index) => {
            const startTime = index * swayDuration;
            const isEven = index % 2 === 0;
            tl.to(leafRef.current, {
                x: isEven ? 60 : -60,
                rotation: isEven ? 15 : -45,
                duration: swayDuration,
                ease: "sine.inOut"
            }, startTime);
        });

        textLines.forEach((line, index) => {
            const linePosition = ((index + 1) / (lines.length + 1)) * 110;
            const leafReachTime = (linePosition / 110) * totalDuration;
            tl.to(line, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }, leafReachTime + 0.1);
        });

        tl.to(leafRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power1.in"
        }, totalDuration - 1);

        if (isOurTeam && ctaRef.current) {
            tl.to(ctaRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.out(1.7)"
            }, totalDuration - 0.5);
        }

    }, { scope: containerRef, dependencies: [isOurTeam] });

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center bg-[#F3EAD8]"
        >
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 max-w-[90%] md:max-w-6xl px-4 text-center">
                {lines.map((line, i) => (
                    <p
                        key={i}

                        className="reveal-line text-lg md:text-2xl lg:text-4xl tracking-[0.2em] uppercase font-normal font-heading leading-relaxed"
                    >
                        {line}
                    </p>
                ))}
            </div>

            <div
                ref={leafRef}
                className="absolute left-1/2 -translate-x-1/2 z-20 w-12 md:w-16 lg:w-20 pointer-events-none"
            >
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMGURL}home/leaf.png`}
                    alt="Leaf"
                    width={100}
                    height={100}
                    className="w-full h-auto object-contain opacity-90"
                    priority
                />
            </div>
        </section>
    );
}