'use client';

import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';
import BlogRenderer from '@/components/BlogRenderer';

interface BlogPostHeroProps {
    title: string;
    coverImage: string | null;
    date: string;
    readTime: string;
    category: string;
    tldr: any;
    url: string;
}

export default function BlogPostHero({
    title,
    coverImage,
    date,
    readTime,
    category,
    tldr,
    url
}: BlogPostHeroProps) {
    const encodedUrl = encodeURIComponent(url);

    const aiLinks = [
        { name: 'ChatGPT', icon: '🧠', href: `https://chat.openai.com?q=Summarize+this+article:+${encodedUrl}` },
        { name: 'Claude', icon: '🤖', href: `https://claude.ai/new?q=Summarize+this+article:+${encodedUrl}` },
        { name: 'Grok', icon: '🚀', href: `https://twitter.com/i/grok?text=Summarize+this+article:+${encodedUrl}` },
        { name: 'Perplexity', icon: '🔍', href: `https://www.perplexity.ai/?q=Summarize+this+article:+${encodedUrl}` },
    ];

    return (
        <div className="w-full mb-16">
            {/* Hero Banner */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                {coverImage ? (
                    <Image
                        src={'/blog/individualbloghero.png'}
                        alt={title}
                        fill
                        priority
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-[#E6D7C3] flex items-center justify-center text-[#8C7A65]">
                        <span className="text-xl font-medium tracking-widest">NO COVER IMAGE</span>
                    </div>
                )}


                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end pb-50 md:pb-40">
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
                    <div className="bg-[#FAF6F0]/95 backdrop-blur-xl border border-[#8C7A65]/10 rounded-4xl p-8 md:p-12 shadow-xl shadow-[#8C7A65]/5 relative overflow-hidden">

                        <div className="flex flex-col items-center text-center">
                            <span className="inline-block text-[#8C7A65] text-xs font-bold tracking-[0.2em] uppercase mb-6 border-b border-[#8C7A65]/20 pb-2">
                                At a Glance
                            </span>
                            <div className="text-left w-full mt-2 mb-8">
                                {typeof tldr === 'string' ? (
                                    <p className="font-sans text-[#4A4A4A] leading-relaxed">{tldr}</p>
                                ) : (
                                    <BlogRenderer data={tldr} />
                                )}
                            </div>

                            {/* AI Summary Section */}
                            <div className="flex flex-col items-center gap-4 pt-6 border-t border-[#8C7A65]/10 w-full">
                                <span className="text-[#8C7A65] text-[10px] font-bold tracking-[0.2em] uppercase">
                                    Ask Ai to Summarise
                                </span>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {aiLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-[#8C7A65] hover:text-[#1C1C1C] hover:scale-105 transition-all duration-300 bg-[#ECDDC4]/50 hover:bg-[#ECDDC4] p-2 rounded-full md:px-4 md:py-2 md:rounded-full"
                                            title={`Summarize with ${link.name}`}
                                        >
                                            <span className="text-sm leading-none">{link.icon}</span>
                                            <span className="hidden md:inline-block leading-none">{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
