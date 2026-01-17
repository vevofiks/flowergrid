"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        id: 1,
        question: "I am new to holistic wellness. Where is the best place to start?",
        answer: "The best starting point is our complimentary discovery call. This is a relaxed, confidential conversation where we can understand your personal goals and challenges. We can then recommend the most suitable path for you, whether that is one-to-one coaching, a specific wellness programme, or joining a workshop.",
    },
    {
        id: 2,
        question: "How do I book a holistic wellness consultation at Flowergrid?",
        answer: "Booking is simple. You can schedule online, ring us on +44 7432 211096, or drop us an email at sk@flowergrid.co.uk. We offer a free 30-minute discovery session where we'll chat about what you're looking for and suggest the right holistic wellbeing programme to help you get there.",
    },
    {
        id: 3,
        question: "What qualifications do your holistic wellness practitioners have?",
        answer: "Our team includes qualified doctors, certified life coaches, licensed therapists and accredited holistic practitioners. Each professional holds proper certifications in their speciality, whether that's NLP, hypnotherapy, Reiki or clinical qualifications. We take professional standards seriously to ensure you receive safe, effective integrative wellness support.",
    },
    {
        id: 4,
        question: "Can I combine different holistic wellbeing services in my programme?",
        answer: "Absolutely. Our holistic wellness approach works best when combining complementary services. Many clients benefit from pairing life and transformation coaching with stress management, or medical consultations with energy healing for complete mind body spirit wellness.",
    },
    {
        id: 5,
        question: "Do you offer holistic wellness services in Croydon and South London?",
        answer: "Yes, our holistic wellness centre in Coulsdon, CR5 2JA, serves Croydon, Surrey and South London. We also provide online integrative wellness consultations across the UK and internationally, making mind body spirit wellness accessible wherever you are.",
    },
    {
        id: 6,
        question: "What are your fees for a discovery call or initial session?",
        answer: "Our initial discovery call is offered free of charge, with no obligation. This ensures you can explore how Flowergrid can help you before making a commitment. Fees for subsequent coaching or therapy sessions vary depending on the practitioner and programme length. Please contact us for our current rate card.",
    },
    {
        id: 7,
        question: "What happens during a corporate wellness workshop?",
        answer: "Our corporate workshops are interactive and practical. We focus on key areas such as resilience, leadership, communication, and stress management. The aim is to provide your team with tangible tools and strategies they can apply immediately to improve their performance, wellbeing, and workplace environment.",
    },
    {
        id: 8,
        question: "Can I combine different holistic wellbeing services in my programme?",
        answer: "Absolutely. Our holistic wellness approach works best when combining complementary services. Many clients benefit from pairing life and transformation coaching with stress management, or medical consultations with energy healing for complete mind body spirit wellness.",
    },
    {
        id: 9,
        question: "What is your policy for cancelling or rescheduling an appointment?",
        answer: "We operate a 48-hour cancellation policy. If you need to reschedule or cancel an appointment, please let us know at least 48 hours in advance to avoid a cancellation fee. This policy helps us manage our practitioners' schedules and offer appointments to clients on our waiting list.",
    },
];

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

export default function FaqSection() {
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
                    Frequently Asked Questions
                </h2>

                <div ref={listRef} className="flex flex-col">
                    {faqData.map((faq) => (
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