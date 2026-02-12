"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
    const answerRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(answerRef.current, {
            height: "auto",
            opacity: 1,
            paddingBottom: "1.5rem",
            duration: 0.4,
            ease: "power2.inOut",
        });

        tl.current.to(iconRef.current, {
            rotation: 45,
            duration: 0.3,
            ease: "power2.inOut",
        }, 0);
    }, { scope: answerRef });

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
                className="flex w-full items-center justify-between py-5 text-left focus:outline-none group"
            >
                <h3 className="text-base md:text-lg font-sans text-[#1C1C1C] pr-8 group-hover:text-[#8C7A65] transition-colors">
                    {question}
                </h3>
                <div ref={iconRef} className="text-[#1C1C1C] shrink-0">
                    <Plus size={20} strokeWidth={1.5} />
                </div>
            </button>
            <div
                ref={answerRef}
                className="h-0 overflow-hidden opacity-0 text-[#4A4A4A] font-sans text-sm md:text-base leading-relaxed"
            >
                <div className="pb-2">{answer}</div>
            </div>
        </div>
    );
};

interface BlogFaqProps {
    faqs: { question: string; answer: string }[];
}

export default function BlogFaq({ faqs }: BlogFaqProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(headerRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        if (listRef.current) {
            tl.from(listRef.current.children, {
                y: 15,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "power3.out",
            }, "-=0.4");
        }
    }, { scope: sectionRef });

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={sectionRef} className="m-6 mt-12 md:mt-16 border-t border-[#8C7A65]/20 pt-10">
            <div className="flex flex-col gap-8 md:gap-12">
                <h2
                    ref={headerRef}
                    className="text-[#1C1C1C] text-2xl md:text-3xl lg:text-4xl font-heading font-medium"
                >
                    Frequently Asked Questions
                </h2>

                <div ref={listRef} className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
