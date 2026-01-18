"use client"

import Image from 'next/image';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const B2bValues = () => {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(".leaf-left", { x: -50, opacity: 0, duration: 1, ease: "power2.out" }, "start")
            .from(".leaf-right", { x: 50, opacity: 0, duration: 1, ease: "power2.out" }, "start");

        tl.from(".value-icon-wrapper", {
            y: 50,
            opacity: 0,
            scale: 0.8,
            duration: 0.9,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.5")

        tl.from(".value-content", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.6")

    }, { scope: container })

    const values = [
        {
            icon: "/Home/i3.png",
            title: "HOLISTIC & EVIDENCE-BASED CARE",
            desc: "Our approach bridges psychology, mindfulness and real workplace challenges."
        },
        {
            icon: "/Home/i2.png",
            title: "SUSTAINABLE RESULT",
            desc: "We focus on measurable impact, not quick fixes. Our programmes help create lasting behavioural and cultural change."
        },
        {
            icon: "/Home/i1.png",
            title: "Led by Experienced Practitioners",
            desc: "Our multi-disciplinary team of 15+ certified coaches, therapists and wellbeing experts bring both professional insight and human understanding."
        },
        {
            icon: "/Home/i4.png",
            title: "Tailored for Every Culture",
            desc: "We design each programme to fit your organisation’s structure, pace and objectives."
        }
    ];

    return (
        <section ref={container} className="relative w-full min-h-screen py-12 md:py-32 overflow-hidden mt-10 flex flex-col justify-center">

            <div className="leaf-left absolute top-3 left-0 w-24 md:w-50 pointer-events-none z-0">
                <Image
                    src="/Home/left-leaf.png"
                    alt="Decorative Leaf"
                    width={200}
                    height={200}
                    className="w-full h-auto opacity-60"
                />
            </div>

            <div className="leaf-right absolute bottom-3 right-0 w-24 md:w-50 pointer-events-none z-0">
                <Image
                    src="/Home/right-leaf.png"
                    alt="Decorative Leaf"
                    width={200}
                    height={200}
                    className="w-full h-auto opacity-60"
                />
            </div>

            <div className="relative z-10 max-w-7xl w-full items-center mx-auto px-6">
                <h2 className="text-black! text-2xl md:text-3xl lg:text-4xl text-center mx-auto font-heading font-normal tracking-wide mt-[38px]">Why Organisations Choose Flower Grid</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center pb-10 md:pb-0">
                    {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="value-icon-wrapper w-26 h-26 md:w-36 md:h-36 rounded-full flex items-center justify-center mt-10 md:mt-20 mb-6 md:mb-10 backdrop-blur-sm border border-white/20 bg-[#ECDCC5]">
                                <div className="relative w-12 h-12 md:w-18 md:h-18">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain opacity-80"
                                    />
                                </div>
                            </div>
                            <div className="value-content space-y-3 md:space-y-4 px-4 md:px-0">
                                <h3 className="text-lg md:text-xl uppercase text-[#2D3E29] font-medium tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-[#646262] text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default B2bValues