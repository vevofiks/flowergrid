"use client";

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const MembershipHelp = () => {
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

                <div className="connection-header flex items-center gap-4 mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl max-w-3xl font-heading text-text-heading">
                        How Flower Grid Membership Helps
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    <div className="connection-column space-y-6">
                        <p className="text-text-body font-heading text-base md:text-lg leading-relaxed">
                           Our membership brings together mind, body, and spirit in a single, integrated approach. Guided by the Flower of Life philosophy, the Flowergrid Holistic Transformation Programme helps you create balance, clarity, and alignment in your life.
                        </p>
                        <p className="text-text-body font-heading text-base md:text-lg leading-relaxed">
                            Through integrative coaching and evidence-based mental health techniques, you gain practical tools to manage stress, build confidence, and transform habits. Holistic wellbeing practices and medical insights work together to support your overall health.
                        </p>
                    </div>

                    <div className="connection-column space-y-6">
                        <p className="text-text-body text-base md:text-lg leading-relaxed">
                            With guidance on lifestyle alignment and conscious living, this holistic transformation programme empowers you to live intentionally and nurture your mind, body, and spirit.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MembershipHelp