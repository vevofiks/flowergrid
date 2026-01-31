'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlurTextReveal({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    console.log("BlurTextReveal text:", text);

    useGSAP(() => {
        const elements = containerRef.current?.querySelectorAll('.word');

        if (elements && elements.length > 0) {
            gsap.fromTo(elements,
                {
                    y: 20,              // Start slightly below
                    opacity: 0,         // Invisible
                    filter: "blur(8px)", // Heavy blur
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)", // Clear
                    duration: 0.8,
                    stagger: 0.05,       // Stagger each word by 0.05s for smooth reveal
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",  // Triggers when text enters view
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }
    }, { scope: containerRef });

    // Split text into words and wrap each in a span
    const words = text.split(' ');

    return (
        <div ref={containerRef} className="overflow-hidden">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a4122] leading-tight tracking-wide">
                {words.map((word, index) => (
                    <span key={index} className="word">
                        {word}
                        {index < words.length - 1 && " "}
                    </span>
                ))}
            </p>
        </div>
    );
}