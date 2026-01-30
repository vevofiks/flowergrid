"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
    {
        id: 1,
        date: "AUG 21, 2025",
        readTime: "2 min read",
        title: "The Art of Slow Living: Why Your Mind Needs It",
        desc: "In a world that moves at lightning speed, learning to slow down isn’t just an act of rebellion—it’s a form of self-care. This blog explores practical ways to embrace slow living and how it can restore your inner peace.",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H8 a.png`,
        link: "/blog/slow-living"
    },
    {
        id: 2,
        date: "SEP 4, 2025",
        readTime: "3 min read",
        title: "How Plant Power is Redefining Healing",
        desc: "Discover how the ancient wisdom of plant medicine is making its way back into modern wellness practices. From herbal teas to aromatherapy, here's why nature’s remedies still matter today.",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H8 b.png`,
        link: "/blog/plant-power"
    },
    {
        id: 3,
        date: "AUG 21, 2025",
        readTime: "2 min read",
        title: "The Art of Slow Living: Why Your Mind Needs It",
        desc: "In a world that moves at lightning speed, learning to slow down isn’t just an act of rebellion—it’s a form of self-care. This blog explores practical ways to embrace slow living and how it can restore your inner peace.",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H8 c.png`,
        link: "/blog/slow-living-2"
    },
];

const truncateText = (text: string, wordLimit: number = 30): string => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
};

export default function BlogSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        if (cardsRef.current) {
            tl.from(cardsRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.4");
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-[#F3EAD8] flex flex-col py-5 px-6 md:px-12 lg:px-20">


            <div ref={headerRef} className="flex-none flex items-center justify-center gap-3 md:gap-4 mb-7">
                <div className="relative w-6 h-6 md:w-20 md:h-20">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMGURL}home/leaf.png`}
                        alt="Leaf"
                        fill
                        className="object-contain opacity-80"
                    />
                </div>
                <h2 className="text-[#1C1C1C] text-3xl md:text-5xl lg:text-[4rem] font-heading font-light tracking-wide leading-none">
                    Blog Articles
                </h2>
            </div>


            <div className="w-full max-w-[1600px] mx-auto">
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="w-full h-full flex flex-col bg-[#ECDDC4]/40 border border-[#8C7A65]/10 rounded-3xl overflow-hidden hover:bg-[#ECDDC4] transition-colors duration-500 group"
                        >


                            <div className="relative w-full h-56 md:h-64 lg:h-72 shrink-0 overflow-hidden bg-[#E6D7C3]">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-[#F3EAD8]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#1C1C1C] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                    {blog.date}
                                </div>
                            </div>


                            <div className="flex-1 flex flex-col p-6 md:p-8">
                                <div className="text-[#8C7A65] text-xs uppercase tracking-widest font-sans font-bold mb-3">
                                    {blog.readTime}
                                </div>
                                <Link href={blog.link} className="block mb-3 md:mb-4">
                                    <h3 className="text-[#1C1C1C] text-xl lg:text-2xl font-heading font-normal leading-tight group-hover:text-[#8C7A65] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                </Link>
                                <p className="text-[#4A4A4A] text-sm font-sans leading-relaxed flex-1 mb-6">
                                    {truncateText(blog.desc, 30)}
                                </p>


                                <div className="mt-auto pt-4 border-t border-[#8C7A65]/20 flex justify-end items-center">
                                    <Link href={blog.link} className="text-[#1C1C1C] text-xs font-bold uppercase tracking-widest hover:text-[#8C7A65] transition-colors flex items-center gap-2">
                                        Read Article
                                        <div className="w-8 h-8 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:bg-[#1C1C1C] group-hover:text-[#F3EAD8] transition-all">
                                            ↗
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}