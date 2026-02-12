"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SprigIcon = ({ className }: { className?: string }) => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M12 21C12 21 13.5 16 16.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 12C18.5 12 20.5 10.5 20.5 8.5C20.5 6.5 18.5 5.5 16.5 5.5C14.5 5.5 13 7 13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21C12 21 10.5 15 7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 11C5.5 11 3.5 9.5 3.5 7.5C3.5 5.5 5.5 4.5 7.5 4.5C9.5 4.5 11 6 11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12C14 12 15 10 15 8C15 6 13 5 12 5C11 5 9 6 9 8C9 10 10 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CardSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const data = [
        {
            title: "For those seeking clarity",
            points: [
                "You want a calmer, more focused mind",
                "You're looking for direction and a sense of purpose",
                "You want to understand your patterns rather than feel controlled by them",
            ]
        },
        {
            title: "For those seeking alignment",
            points: [
                "You want your mind, body and your emotions to work together",
                "You're ready to build healthier habits that feel sustainable",
                "You want a life that feels balanced, intentional and grounded",
            ]
        },
        {
            title: "For those seeking support",
            points: [
                "You want guidance you can trust from experienced practitioners",
                "You want structure, accountability and techniques that genuinely work",
                "You prefer a holistic transformation programme that respects both medical insight and spiritual wellbeing.",
            ]
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        // Animate header
        tl.fromTo(headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animate card content only (not the background)
        const cards = gsap.utils.toArray(".membership-card");
        cards.forEach((card: any, index: number) => {
            tl.fromTo(card.querySelector(".card-icon"),
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                index === 0 ? "-=0.6" : "-=0.5"
            )
                .fromTo(card.querySelector(".card-title"),
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                    "-=0.6"
                )
                .fromTo(card.querySelectorAll(".card-point"),
                    { x: -20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                    "-=0.6"
                );
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className='w-full px-6 md:px-14 lg:px-20'>
            <div className="max-w-[1400px] mx-auto">


                <h2
                    ref={headerRef}
                    className='text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-center mb-16'
                >
                    Who This Membership Is For
                </h2>


                <div ref={cardsRef} className='grid grid-cols-1 gap-8'>
                    {data.map((card, index) => (
                        <div key={index} className="border-5 border-[#C19A6B]/40 rounded-3xl p-2">
                            <div
                                className='membership-card relative bg-[#E5CCA1] border-[1.5px] border-[#C19A6B]/40 rounded-3xl p-8 md:p-10 flex flex-col gap-6 h-full hover:border-[#C19A6B] hover:shadow-sm transition-all duration-300'
                            >

                                <div className="card-icon mb-2">
                                    <Image src={`${process.env.NEXT_PUBLIC_IMGURL}home/leaf.png`} alt="Sprig" className="w-12 h-12" width={40} height={40} />
                                </div>


                                <h3 className="card-title text-[#1C1C1C] text-2xl md:text-[1.75rem] font-sans font-medium leading-tight">
                                    {card.title}
                                </h3>


                                <ul className="flex flex-col">
                                    {card.points.map((point, i) => (
                                        <li key={i} className="card-point flex items-start gap-3 text-[#4A4A4A] font-sans text-base md:text-lg leading-relaxed">

                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#4A4A4A] shrink-0 opacity-70" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardSection