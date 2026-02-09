'use client';

import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';
import { extractTldrText } from '@/lib/utils';

interface BlogPostHeroProps {
    title: string;
    coverImage: string | null;
    date: string;
    readTime: string; 
    category: string;
    tldr: any; 
}

export default function BlogPostHero({
    title,
    coverImage,
    date,
    readTime,
    category,
    tldr
}: BlogPostHeroProps) {
    const tldrText = extractTldrText(tldr);

    return (
        <div className="w-full mb-16">
            {/* Hero Banner */}
            <div className="relative w-full h-[60vh] min-h-100 md:h-[70vh] overflow-hidden mb-12 group">
                {/* Background Image */}
                {coverImage ? (
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-[#E6D7C3] flex items-center justify-center text-[#8C7A65]">
                        <span className="text-xl font-medium tracking-widest">NO COVER IMAGE</span>
                    </div>
                )}


                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20">
                    <div className="max-w-350 mx-auto px-6 md:px-12 w-full !text-white">
                        <div className="max-w-4xl">
                            {/* Meta Tags */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm font-medium tracking-[0.15em] mb-6 uppercase opacity-90">
                                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white/30 transition-colors cursor-default">
                                    {category}
                                </span>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{date}</span>
                                </div>
                                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{readTime}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif leading-[1.1] mb-8 drop-shadow-lg !text-white">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* TLDR Section - Styled Box Below Hero */}
            {tldr && (
                <div className="max-w-4xl mx-auto -mt-24 md:-mt-32 relative z-10 px-6">
                    <div className="bg-[#FAF6F0]/95 backdrop-blur-xl border border-[#8C7A65]/10 rounded-4xl p-8 md:p-12 shadow-xl shadow-[#8C7A65]/5">
                        <div className="flex flex-col items-center text-center">
                            <span className="inline-block text-[#8C7A65] text-xs font-bold tracking-[0.2em] uppercase mb-6 border-b border-[#8C7A65]/20 pb-2">
                                At a Glance
                            </span>
                            <div className="prose prose-lg prose-brown max-w-none font-sans text-[#4A4A4A] leading-relaxed">
                                {tldrText}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
