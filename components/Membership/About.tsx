"use client";

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const MembershipAbout = () => {
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
                    <h2 className="text-4xl md:text-5xl lg:text-5xl max-w-3xl font-heading text-text-heading">
                        Empowering You to Take Control of Your Wellbeing
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
                    <div className="connection-column space-y-6">
                        <p className="text-text-body font-heading text-base md:text-lg leading-relaxed">
                            The Flowergrid Membership offers structured guidance and expert support to help you cultivate clarity, resilience, and balance in your life. Through evidence-based techniques and holistic practices, you develop practical skills to manage stress, strengthen emotional wellbeing, and build sustainable habits. The membership provides a supportive community where you can share experiences and gain encouragement, ensuring you never feel alone on your journey.
                        </p>
                    </div>

                    <div className="connection-column space-y-6">
                        <p className="text-text-body text-base md:text-lg leading-relaxed">
                            Alongside personalised coaching, you receive tools to integrate mindful living into daily routines, aligning your mind, body, and spirit. Designed to empower you, the program fosters self-awareness, confidence, and lasting transformation, enabling you to navigate challenges with clarity, maintain energy and focus, and create a healthier, more intentional life.

                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="connection-button px-10 py-4 bg-primary text-white rounded-full font-medium text-base md:text-lg hover:bg-primary/90 transition-colors">
                        Discover The Flowergrid Philosophy
                    </button>
                </div>

            </div>
        </section>
    )
}

export default MembershipAbout