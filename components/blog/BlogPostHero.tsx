'use client';

import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';
import BlogRenderer from '@/components/BlogRenderer';

const ChatGPTIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
);

const ClaudeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M14.5 1.5h-5L4 12l5.5 10.5h5L20 12z" opacity="0.4" />
        <path d="M9.5 1.5L4 12l5.5 10.5h5L20 12l-5.5-10.5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
);

const GrokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const PerplexityIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

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
    date,
    readTime,
    category,
    tldr,
    url
}: BlogPostHeroProps) {
    const encodedUrl = encodeURIComponent(url);

    const aiLinks = [
        { name: 'ChatGPT', icon: ChatGPTIcon, href: `https://chat.openai.com?q=Summarize+this+article:+${encodedUrl}`, color: 'hover:text-[#10A37F]' },
        { name: 'Claude', icon: ClaudeIcon, href: `https://claude.ai/new?q=Summarize+this+article:+${encodedUrl}`, color: 'hover:text-[#CC9B7A]' },
        { name: 'Grok', icon: GrokIcon, href: `https://twitter.com/i/grok?text=Summarize+this+article:+${encodedUrl}`, color: 'hover:text-[#1DA1F2]' },
        { name: 'Perplexity', icon: PerplexityIcon, href: `https://www.perplexity.ai/?q=Summarize+this+article:+${encodedUrl}`, color: 'hover:text-[#20808D]' },
    ];

    return (
        <div className="w-full mb-16">
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src={'/blog/individualblogpost.png'}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-[center_20%]"
                />

                <div className="absolute inset-0 flex flex-col justify-end pb-50 md:pb-40">
                    <div className="max-w-350 mx-auto px-6 md:px-12 w-full !text-white">
                        <div className="max-w-4xl">
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
                                            className={`flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-[#8C7A65] ${link.color} hover:scale-105 transition-all duration-300 bg-[#ECDDC4]/50 hover:bg-[#ECDDC4] p-2 rounded-full md:px-4 md:py-2 md:rounded-full`}
                                            title={`Summarize with ${link.name}`}
                                        >
                                            <span className="text-sm leading-none"><link.icon /></span>
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