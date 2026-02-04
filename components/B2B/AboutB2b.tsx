"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const AboutB2b = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".connection-header",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        tl.fromTo(".connection-column",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
            "-=0.4"
        );

        tl.fromTo(".connection-button",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.3"
        );

    }, { scope: container });
    return (
        <section ref={container} className="w-full bg-background py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="connection-header flex items-start gap-4 mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-4xl font-heading text-text-heading">
                        About Our Corporate Wellbeing Programmes
                    </h2>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMGURL}home/connection-logo.png`}
                        alt="Flowergrid Logo"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    <div className="connection-column space-y-2">
                        <p className="text-text-body font-heading text-base md:text-lg leading-relaxed">
                            At Flowergrid, we believe people are at the heart of every organization’s success. Our corporate wellbeing programmes are designed to create workplaces that are emotionally aware, purpose-driven, and resilient.
                        </p>
                    </div>

                    <div className="connection-column space-y-2">
                        <p className="text-text-body text-base md:text-lg leading-relaxed">
                            We combine coaching psychology, mindfulness practice and behavioural science to help teams perform with clarity, compassion and confidence. Each programme is tailored to your culture, goals and people.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutB2b 