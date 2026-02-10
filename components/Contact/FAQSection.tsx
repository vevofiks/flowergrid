"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { Faq, defaultFaqs } from "../../app/contact/data/faqData";

gsap.registerPlugin(ScrollTrigger);


const FaqItem = ({
    question,
    answer,
    isOpen,
    onToggle
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    const answerRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(answerRef.current, {
            height: "auto",
            opacity: 1,
            paddingBottom: "24px",
            duration: 0.4,
            ease: "power2.inOut",
        });

        tl.current.to(iconRef.current, {
            rotation: 45,
            duration: 0.3,
            ease: "power2.inOut",
        }, 0);
    }, { scope: answerRef });

    // Play or reverse animation based on isOpen prop
    useGSAP(() => {
        if (!tl.current) return;
        if (isOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isOpen]);

    return (
        <div className="border-b border-[#1C1C1C]/20 last:border-b-0">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
            >
                <h3 className="text-base md:text-lg font-sans text-[#1C1C1C] pr-8">
                    {question}
                </h3>
                <div ref={iconRef} className="text-[#1C1C1C] shrink-0">
                    <Plus size={24} strokeWidth={1.5} />
                </div>
            </button>
            <div
                ref={answerRef}
                className="h-0 overflow-hidden opacity-0 text-[#4A4A4A] font-sans text-sm md:text-base leading-relaxed"
            >
                <div className="pb-6">{answer}</div>
            </div>
        </div>
    );
};

interface FaqSectionProps {
    faqs?: Faq[];
    title?: string;
}

export default function FaqSection({ faqs = defaultFaqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [openFaqId, setOpenFaqId] = useState<number | null>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        if (listRef.current) {
            tl.from(listRef.current.children, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
            }, "-=0.4");
        }
    }, { scope: sectionRef });

    const handleToggle = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#F3EAD8] px-6 py-16 md:px-12 md:py-24 lg:px-20"
        >
            <div className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-16">
                <h2
                    ref={headerRef}
                    className="text-[#1C1C1C] text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-center"
                >
                    {title}
                </h2>

                <div ref={listRef} className="flex flex-col">
                    {faqs.map((faq) => (
                        <FaqItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaqId === faq.id}
                            onToggle={() => handleToggle(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}