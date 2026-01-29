"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        id: "body",
        title: "BODY",
        thumb: `/home/H4 d.png`,
        full: `/home/H4 a.png`,
        details: [
            { title: "Medical & Aesthetic Health Care", desc: "Enhancing physical vitality through scientifically guided body sculpting & health checks." },
            { title: "Nutritional Consulting", desc: "Personalized diet plans to optimize gut health, energy, and immunity." },
            { title: "Medical Checks & Treatments", desc: "Preventative care, early detection, and holistic recovery paths." },
        ],
    },
    {
        id: "mind",
        title: "MIND",
        thumb: `/home/H4 e.png`,
        full: `/home/H4 b.png`,
        details: [
            { title: "Anxiety & Stress Management", desc: "Tools and techniques to declutter the mind and manage stress effectively." },
            { title: "Neuro-Linguistic Programming (NLP)", desc: "Rewiring thought patterns to break negative cycles and boost confidence." },
            { title: "Psychological Therapy", desc: "Professional counseling to navigate personal challenges." },
            { title: "Hypnotherapy", desc: "Accessing the subconscious mind to release deep-rooted patterns." },
        ],
    },
    {
        id: "spirit",
        title: "SPIRIT",
        thumb: `/home/H4 f.png`,
        full: `/home/H4 c.png`,
        details: [
            { title: "Meditation & Mindfulness", desc: "Guided practices to cultivate presence and inner peace." },
            { title: "Reiki Healing", desc: "Gentle energy work to unblock chakras and restore balance." },
        ],
    },
];

export default function BodyMindSpirit() {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const overlayImageRef = useRef<HTMLImageElement>(null);
    const detailContentRef = useRef<HTMLDivElement>(null);
    const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [displayIndex, setDisplayIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(".intro-text", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" });
        tl.from(".thumb-item", {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.4");
    }, { scope: containerRef });


    useGSAP(() => {
        if (activeSection === null) return;

        const index = activeSection;
        const thumbEl = thumbRefs.current[index];

        if (!thumbEl || !overlayRef.current || !overlayImageRef.current || !detailContentRef.current) return;

        const rect = thumbEl.getBoundingClientRect();
        gsap.set(overlayRef.current, {
            position: "fixed",
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            borderRadius: "50%",
            zIndex: 50,
            autoAlpha: 1,
        });

        overlayImageRef.current.src = sections[index].full;

        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        tl.to(overlayRef.current, {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            duration: 1,
            ease: "expo.inOut"
        });

        tl.set(detailContentRef.current, { autoAlpha: 1 });

        tl.fromTo(".detail-title",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.4"
        );

        tl.fromTo(".detail-card",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.6"
        );

        tl.fromTo(".detail-btn",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.4"
        );

    }, [activeSection]);


    const handleExpand = (index: number) => {
        if (isAnimating || activeSection !== null) return;
        setIsAnimating(true);
        setDisplayIndex(index);
        setActiveSection(index);
    };

    const handleClose = () => {
        if (isAnimating || activeSection === null) return;
        setIsAnimating(true);

        const thumbEl = thumbRefs.current[activeSection];
        const rect = thumbEl?.getBoundingClientRect();

        const tl = gsap.timeline({
            onComplete: () => {
                setIsAnimating(false);
                setActiveSection(null);
                gsap.set(overlayRef.current, { autoAlpha: 0 });
            }
        });

        tl.to(detailContentRef.current, { autoAlpha: 0, duration: 0.3 });

        if (rect) {
            tl.to(overlayRef.current, {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                borderRadius: "50%",
                duration: 0.8,
                ease: "expo.inOut"
            });
        } else {
            tl.to(overlayRef.current, { opacity: 0, duration: 0.5 });
        }
    };

    const currentData = sections[displayIndex];

    const getGridClass = (count: number) => {
        if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
        if (count === 3) return "grid-cols-1 md:grid-cols-3";
        return "grid-cols-1 md:grid-cols-2";
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
        >
            <div className="intro-text text-center max-w-5xl mb-12 md:mb-16 relative z-10">
                <p className="text-lg md:text-[50px] font-normal text-black/70! leading-none font-heading!">
                    Each practice plays a part in restoring balance to the mind, body, and spirit bringing clarity, health, and calm through evidence-based and holistic care.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 relative z-10 w-full justify-center items-center">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="thumb-item group cursor-pointer flex flex-col items-center gap-6"
                        onClick={() => handleExpand(index)}
                        ref={(el) => { if (el) thumbRefs.current[index] = el; }}
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src={section.thumb}
                                alt={section.title}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-xl md:text-2xl font-bold tracking-widest uppercase drop-shadow-md">
                                    {section.title}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={overlayRef}
                className="fixed z-60 overflow-hidden invisible"
                style={{ pointerEvents: activeSection !== null ? "auto" : "none" }}
            >
                <img
                    ref={overlayImageRef}
                    src={activeSection !== null ? sections[activeSection].full : undefined}
                    alt="Expanded"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-10 bg-black/20 cursor-pointer" onClick={handleClose} />
            </div>

            <div
                ref={detailContentRef}
                className="fixed inset-0 z-70 flex flex-col items-center justify-center invisible opacity-0 pointer-events-none"
            >
                <div className="relative w-full max-w-[90vw] h-full max-h-screen overflow-y-auto flex flex-col justify-between pointer-events-auto py-10 md:py-12 no-scrollbar">

                    <h2 className="detail-title text-white! text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-center mt-4 md:mt-10 mb-8 md:mb-0 drop-shadow-lg shrink-0">
                        {currentData.title}
                    </h2>

                    <div className={`grid gap-4 md:gap-6 mb-8 md:mb-10 w-full ${getGridClass(currentData.details.length)}`}>
                        {currentData.details.map((detail, idx) => (
                            <div
                                key={idx}
                                className="detail-card bg-black/30 backdrop-blur-md border border-white/30 p-5 md:p-8 rounded-[30px] text-white! hover:bg-black/50 transition-colors duration-300 h-full flex flex-col justify-center text-center"
                            >
                                <h3 className="text-white! text-lg md:text-2xl font-bold mb-2 md:mb-3">{detail.title}</h3>
                                <p className="text-white! text-sm md:text-base opacity-90 leading-relaxed">{detail.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="detail-btn flex items-center justify-center shrink-0 mb-4 md:mb-0">
                        <button onClick={handleClose} className="flex items-center justify-center gap-2 rounded-full text-center bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 md:p-4 px-8 md:px-10 text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                            Back <MoveRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}