"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={className}
        fill="currentColor"
    >
        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 448 209.9z" />
    </svg>
);

export default function ContactInfoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        });

        if (cardsRef.current) {
            tl.from(cardsRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            }, "-=0.4");
        }

        tl.from(mapRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }, "-=0.4");

    }, { scope: sectionRef });

    const socialLinks = [
        { Icon: Instagram, href: "https://www.instagram.com/flowergridwellness/" },
        { Icon: Facebook, href: "https://www.facebook.com/flowergriidwellness/" },
        { Icon: Linkedin, href: "https://uk.linkedin.com/company/flowergridwellness" },
        { Icon: TikTokIcon, href: "https://www.tiktok.com/@flowergrid" },
        { Icon: Youtube, href: "https://www.youtube.com/channel/UCyP_NG0t1WA_OAJZGR-qU_w" },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full h-screen bg-[#F3EAD8] flex flex-col px-6 py-6 md:px-12 md:py-12 lg:px-20 lg:py-16 overflow-hidden"
        >
            <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-10 lg:gap-12">


                <div ref={headerRef} className="flex flex-col gap-1 md:gap-2 shrink-0">
                    <h2 className="text-[#1C1C1C] text-3xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight">
                        Create a Healthier, Happier You
                    </h2>
                    <p className="text-primary! text-xl md:text-4xl lg:text-5xl font-heading font-light">
                        – Speak to Us Today
                    </p>
                </div>


                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 shrink-0">


                    <div className="bg-[#E6D7C3] rounded-2xl p-4 md:p-8 flex items-center justify-center md:justify-start min-h-[80px] md:min-h-[140px]">
                        <div className="flex gap-4 md:gap-6 text-[#1C1C1C]">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-60 transition-opacity p-1.5 md:p-2 border border-[#1C1C1C] rounded-full"
                                >
                                    <Icon size={16} className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>


                    <div className="bg-[#E6D7C3] rounded-2xl p-4 md:p-8 flex flex-col justify-center min-h-[80px] md:min-h-[140px]">
                        <span className="text-[#1C1C1C] text-xs md:text-sm font-sans mb-0.5 md:mb-1 tracking-wide opacity-80">
                            Email:
                        </span>
                        <a href="mailto:sk@flowergrid.co.uk" className="text-[#1C1C1C] text-base md:text-xl font-sans hover:text-[#C19A6B] transition-colors truncate">
                            sk@flowergrid.co.uk
                        </a>
                    </div>


                    <div className="bg-[#E6D7C3] rounded-2xl p-4 md:p-8 flex flex-col justify-center min-h-[80px] md:min-h-[140px]">
                        <span className="text-[#1C1C1C] text-xs md:text-sm font-sans mb-0.5 md:mb-1 tracking-wide opacity-80">
                            Phone:
                        </span>
                        <a href="tel:+447432211096" className="text-[#1C1C1C] text-base md:text-xl font-sans hover:text-[#C19A6B] transition-colors">
                            +44 7432 211096
                        </a>
                    </div>

                </div>



                <div ref={mapRef} className="flex-1 w-full relative rounded-2xl md:rounded-2xl overflow-hidden shadow-lg bg-gray-200 min-h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.4474816737425!2d-0.12098422364579864!3d51.30289112562308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875fd3dd7637719%3A0xf4c019e289f1be75!2sFlowergriid%20%7C%20Holistic%20Wellness%20Centre%20Croydon!5e0!3m2!1sen!2sin!4v1768718902532!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                    />
                </div>

            </div>
        </section>
    );
}