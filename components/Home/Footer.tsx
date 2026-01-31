"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
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

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const linksColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const copyrightRef = useRef<HTMLDivElement>(null);

    // 2. Get current path to force re-render/re-animation on navigation
    const pathname = usePathname();

    useGSAP(() => {

        gsap.set([leftColRef.current, linksColRef.current, rightColRef.current, copyrightRef.current], {
            clearProps: "all",
            opacity: 1,
            y: 0
        });

        ScrollTrigger.refresh();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 95%",
                toggleActions: "play none none none",
            },
        });

        tl.from([leftColRef.current, linksColRef.current, rightColRef.current], {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "opacity,transform"
        });

        tl.from(copyrightRef.current, {
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            clearProps: "opacity"
        }, "<");

    }, {
        scope: footerRef,
        dependencies: [pathname]
    });

    return (
        <footer
            ref={footerRef}
            className="relative bg-[#271B0D] text-[#D6CFC2] overflow-hidden pt-16 pb-8 min-h-screen flex flex-col justify-center"
        >
            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">

                    {/* Left Column */}
                    <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-between relative h-[400px] lg:h-auto order-3 lg:order-1 mt-10 lg:mt-0">
                        <div className="absolute bottom-[-40px] z-20 left-[17px] md:left-11 w-[280px] md:w-[350px] lg:w-[450px] pointer-events-none opacity-90">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMGURL}logo/footer flower.png`}
                                alt="Magnolia"
                                width={500}
                                height={800}
                                className="object-contain w-full h-120"
                            />
                        </div>
                        <div className="absolute -bottom-13 z-10 flex items-center gap-4 md:gap-6 pl-4 md:pl-8">
                            <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_IMGURL}logo/footer-logo_cropped.png`}
                                    alt="Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <span className="text-3xl md:text-5xl font-heading font-light tracking-wide text-[#F3EAD8] leading-none">
                                Flower Grid
                            </span>
                        </div>
                    </div>

                    {/* Middle Column (Links) */}
                    <div
                        ref={linksColRef}
                        className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start order-1 lg:order-2 lg:border-r lg:border-[#F3EAD8]/20 lg:pl-16 py-8"
                    >
                        <ul className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
                            <li><Link href="/" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Home</Link></li>
                            <li className="flex flex-col gap-2">
                                <Link href="/about" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">About</Link>
                                <ul className="flex flex-col gap-2 pl-4 lg:pl-6 border-l border-[#F3EAD8]/20">
                                    <li><Link href="/about/person1" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Samina Khan</Link></li>
                                    <li><Link href="/about/person2" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Monira & Team</Link></li>
                                    <li><Link href="/about/team" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">Team</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/services" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Services</Link></li>
                            <li><Link href="/membership" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Membership</Link></li>
                            <li className="flex flex-col gap-2">
                                <Link href="/programs" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Programs</Link>
                                <ul className="flex flex-col gap-2 pl-4 lg:pl-6 border-l border-[#F3EAD8]/20">
                                    <li><Link href="/programs/b2b" className="text-base md:text-lg font-sans text-[#D6CFC2]/70 hover:text-[#A58E62] transition-colors">B2B</Link></li>
                                </ul>
                            </li>
                            {/* <li><Link href="/blogs" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Blogs</Link></li> */}
                            <li><Link href="/contact" className="text-xl md:text-2xl font-heading font-light tracking-wide hover:text-[#A58E62] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Right Column (Contact) */}
                    <div ref={rightColRef} className="lg:col-span-4 flex flex-col justify-center items-center lg:items-center order-2 lg:order-3 py-8">
                        <div className="flex flex-col gap-2 text-center font-sans text-sm md:text-base tracking-widest text-[#D6CFC2]/80 mb-10">
                            <a href="tel:+447432211096" className="hover:text-white transition-colors block">+44 7432 211096</a>
                            <a href="mailto:sk@flowergrid.co.uk" className="hover:text-white transition-colors block">sk@flowergrid.co.uk</a>
                            <p className="mt-6 text-[#D6CFC2]/80!">Coulsdon CR5 2JA</p>
                            <Link href="#" className="hover:text-white transition-colors block">[Map Link]</Link>
                            <Link href="#" className="mt-6 hover:text-white transition-colors block font-medium text-[#F3EAD8]">Book a Discovery Call</Link>
                        </div>
                        <div className="flex items-center gap-6 text-[#D6CFC2]">
                            <Link href="https://www.instagram.com/flowergridwellness/" target="_blank" className="hover:text-[#A58E62] transition-colors"><Instagram className="w-6 h-6" strokeWidth={1.5} /></Link>
                            <Link href="https://www.facebook.com/flowergriidwellness/" target="_blank" className="hover:text-[#A58E62] transition-colors"><Facebook className="w-6 h-6" strokeWidth={1.5} /></Link>
                            <Link href="https://uk.linkedin.com/company/flowergridwellness" target="_blank" className="hover:text-[#A58E62] transition-colors"><Linkedin className="w-6 h-6" strokeWidth={1.5} /></Link>
                            <Link href="https://www.tiktok.com/@flowergrid" target="_blank" className="hover:text-[#A58E62] transition-colors"><TikTokIcon className="w-5 h-5" /></Link>
                            <Link href="https://www.youtube.com/channel/UCyP_NG0t1WA_OAJZGR-qU_w" target="_blank" className="hover:text-[#A58E62] transition-colors"><Youtube className="w-6 h-6" strokeWidth={1.5} /></Link>
                        </div>
                    </div>

                </div>

                <div ref={copyrightRef} className="border-t border-[#F3EAD8]/10 mt-10 pt-8 text-center relative z-20">
                    <p className="font-sans text-xs tracking-widest text-[#D6CFC2]/50">
                        © Copyright 2026 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}