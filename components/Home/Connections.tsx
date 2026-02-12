"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Connections = () => {
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

        tl.fromTo(".connection-text",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
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
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-heading">
                            Understanding the Flowergrid Connection
                        </h2>
                    </div>
                    <div>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMGURL}home/connection-logo.png`}
                            alt="Flowergrid Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="connection-text mb-12">
                    <p className="text-text-body text-base md:text-lg leading-relaxed mb-6">
                        At Flowergrid, we believe in Flower of Life healing for personal growth and spiritual balance, harnessing the power of this sacred geometry to guide conscious living. As a modern holistic wellness centre, the Flowergrid approach blends medical science with sacred geometry-based holistic wellness practices to create complete mind body spirit wellness.
                    </p>
                    <p className="text-text-body text-base md:text-lg leading-relaxed">
                        Our programs help individuals manage physical conditions, support mental health, improve aesthetics, reduce anxiety, and cultivate mind body spirit wellness through integrative holistic methods. Discover how this ancient symbol can illuminate your journey, shaping your path toward personal growth, self-awareness, and lasting transformation.
                    </p>
                </div>

                <div className="flex justify-center">

                    <Link href="/our-team" className="connection-button px-10 py-4 bg-primary text-white rounded-full font-medium text-sm md:text-base hover:bg-primary/90 transition-colors inline-block">
                        Discover The Flowergrid Philosophy
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Connections