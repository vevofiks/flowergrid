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
        title: "Medical & Aesthetic Wellness",
        desc: "Experience a unique fusion of medical expertise and holistic health care for vitality, longevity, and confidence.",
        thumb: `/home/H4 d.png`,
        full: `/home/H4 a.png`,
        details: [
            { title: "Medical Checks, Treatments & Aesthetics", desc: "Comprehensive assessments and aesthetic services guided by healthcare professionals." },
            { title: "Nutritional Consulting", desc: "Tailored plans to optimize nutrition, metabolism, and energy." },
            { title: "Doctor Consultations", desc: "Access our network of integrative practitioners for personalised health insights." },
            { title: "Integrative Health & Fitness Plans", desc: "Custom wellness programmes combining fitness, nutrition, and mindfulness." },
        ],
    },
    {
        id: "mind",
        title: "Therapeutic & Mental Wellness",
        desc: "Restore peace and resilience with holistic wellness services and therapies that support mental clarity, emotional healing, and stress management.Restore peace and resilience with holistic wellness services and therapies that support mental clarity, emotional healing, and stress management.",
        thumb: `/home/H4 e.png`,
        full: `/home/H4 b.png`,
        details: [
            { title: "Anxiety & Stress Management Techniques", desc: "Learn evidence-based tools to calm the mind and regulate emotions." },
            { title: "Neuro-Linguistic Programming (NLP)", desc: "Rewire patterns of thought and behaviour to achieve positive change." },
            { title: "Psychological Therapy", desc: "Receive compassionate support to process emotions and heal from within." },
            { title: "Hypnotherapy", desc: "Access your subconscious to overcome blocks and instill confidence." },
        ],
    },
    {
        id: "spirit",
        title: "Holistic & Energy Healing",
        desc: "Reconnect with your inner essence through holistic wellness services that harmonise energy, calm the spirit, and awaken self-awareness.",
        thumb: `/home/H4 f.png`,
        full: `/home/H4 c.png`,

        details: [
            { title: "Meditation & Mindfulness & Breathing", desc: "Restore presence and balance through guided stillness" },
            { title: "Reiki Healing", desc: "Channel universal energy to clear blockages and renew your emotional state." },
            { title: "Colour Therapy / Auricular Acupuncture", desc: "Experience subtle energy realignment for mind–body rejuvenation."},
            { title: "Soul Reflection & Transformation Work", desc: "Dive deep into self-awareness, ego work, and soul growth" }
        ],
    },
    {
        id: "transformation",
        title: "Life Coaching & Transformation",
        desc: "Discover powerful coaching programmes that help you redefine your path, strengthen relationships, and unlock your fullest potential.",
        thumb: `/services/s1.png`,
        full: `/services/s3.jpg`,
        details: [
            { title: "Personal & Professional Growth Coaching", desc: "Build confidence, clarity, and purpose in every aspect of life." },
            { title: "Relationship Coaching", desc: "Strengthen communication, compassion, and connection in your relationships." },
            { title: "Conscious Living Coaching", desc: "Align your thoughts and habits with your soul’s purpose." },
            { title: "Leadership & Soft Skills Coaching", desc: "Enhance emotional intelligence, leadership, and communication for success" }
        ],
    }
];

export default function MedicalServices() {
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
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
        >
            <h2 className="intro-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-heading uppercase text-center mb-12 sm:mb-16 md:mb-20 drop-shadow-lg">
                The Flower of Life reminds us that everything in the universe is connected
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="thumb-item group flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative touch-manipulation"
                        onClick={() => handleExpand(index)}
                        ref={(el) => { if (el) thumbRefs.current[index] = el; }}
                    >
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64 rounded-full -z-10 transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                            style={{ backgroundColor: '#F3E5CB' }}
                        />

                        <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64 transition-transform duration-500 scale-105 relative z-10">
                            <Image
                                src={section.thumb}
                                alt={section.title}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </div>
                        <div className="text-center max-w-[260px] sm:max-w-[280px] px-2">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-1.5 sm:mb-2">{section.title}</h3>
                            <p className="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed">{section.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
    {/* 
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
            </div> */}

            {/* <div
                ref={detailContentRef}
                className="fixed inset-0 z-70 flex flex-col items-center justify-center invisible opacity-0 pointer-events-none"
            >
                <div className="relative w-full max-w-[95vw] sm:max-w-[90vw] h-full max-h-screen overflow-y-auto flex flex-col justify-between pointer-events-auto py-6 sm:py-8 md:py-10 lg:py-12 px-2 sm:px-4 no-scrollbar">

                    <h2 className="detail-title text-white! text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading uppercase text-center mt-2 sm:mt-4 md:mt-6 lg:mt-10 mb-4 sm:mb-6 md:mb-8 drop-shadow-lg shrink-0 px-2">
                        {currentData.title}
                    </h2>
     {/* <button
                onClick={handleClose}
                className="detail-btn fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black active:scale-90 transition-all duration-300 cursor-pointer touch-manipulation z-80"
                aria-label="Close"
                style={{ opacity: activeSection !== null ? 1 : 0, pointerEvents: activeSection !== null ? 'auto' : 'none' }}
            >
                <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>
                    <div className={`grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10 w-full ${getGridClass(currentData.details.length)}`}>
                        {currentData.details.map((detail, idx) => (
                            <div
                                key={idx}
                                className="detail-card bg-black/30 backdrop-blur-md border border-white/30 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl text-white! hover:bg-black/50 transition-colors duration-300 h-full flex flex-col justify-center text-center"
                            >
                                <h3 className="text-white! text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3">{detail.title}</h3>
                                <p className="text-white! text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">{detail.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="detail-btn flex items-center justify-center shrink-0 mb-4 sm:mb-6 md:mb-8 lg:mb-0">
                        <button className="flex items-center justify-center gap-2 rounded-full text-center bg-white/20 backdrop-blur-md border border-white/30 text-white p-2.5 sm:p-3 md:p-4 px-6 sm:px-8 md:px-10 text-xs sm:text-sm md:text-base hover:bg-white hover:text-black active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation">
                            Explore Coaching Services
                        </button>
                    </div>
                </div>
            </div> */}

            {/* Close Button - Outside detail content for better accessibility */}
            {/* <button
                onClick={handleClose}
                className="detail-btn fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black active:scale-90 transition-all duration-300 cursor-pointer touch-manipulation z-80"
                aria-label="Close"
                style={{ opacity: activeSection !== null ? 1 : 0, pointerEvents: activeSection !== null ? 'auto' : 'none' }}
            >
                <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button> */}

        </section>
    );
}