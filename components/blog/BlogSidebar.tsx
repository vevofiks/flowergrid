'use client';

import React, { useEffect, useState } from 'react';

// AskAI Component
export function AskAI({ url }: { url: string }) {
    const encodedUrl = encodeURIComponent(url);

    const links = [
        { name: 'ChatGPT', icon: '🧠', href: `https://chat.openai.com?q=Summarize+this+article:+${encodedUrl}` },
        { name: 'Claude', icon: '🤖', href: `https://claude.ai/new?q=Summarize+this+article:+${encodedUrl}` },
        { name: 'Grok', icon: '🚀', href: `https://twitter.com/i/grok?text=Summarize+this+article:+${encodedUrl}` },
        { name: 'Perplexity', icon: '🔍', href: `https://www.perplexity.ai/?q=Summarize+this+article:+${encodedUrl}` },
    ];

    return (
        <div className="bg-[#ECDDC4]/30 rounded-2xl p-6 border border-[#8C7A65]/10">
            <h3 className="font-heading text-sm text-[#1C1C1C] mb-4">Ask AI to summarize this article</h3>
            <div className="space-y-3">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-[#4A4A4A] hover:text-[#8C7A65] transition-colors group"
                    >
                        <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-xs shadow-sm group-hover:scale-110 transition-transform">
                            {link.icon}
                        </span>
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

// Table of Contents Component
export function TableOfContents({ content }: { content: any }) {
    const [activeId, setActiveId] = useState<string>('');
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

    useEffect(() => {
        if (!content?.blocks) return;

        const extractedHeadings = content.blocks
            .filter((block: any) => block.type === 'header' && block.data.level === 2) // Only H2
            .map((block: any) => ({
                id: block.data.text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                text: block.data.text,
                level: block.data.level
            }));

        setHeadings(extractedHeadings);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66% 0px' }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    return (
        <div className="mb-8">
            <h3 className="font-heading text-lg text-[#1C1C1C] mb-4">Contents</h3>
            <nav className="space-y-1 relative border-l border-[#8C7A65]/20 ml-2">
                {headings.map(({ id, text, level }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to center
                        }}
                        className={`block text-sm py-2 pr-4 transition-all duration-300 leading-relaxed rounded-r-lg
                            ${level === 3 ? 'pl-6' : 'pl-4'}
                            ${activeId === id
                                ? 'bg-[#8C7A65] text-white font-medium shadow-md -ml-[1px] border-l-2 border-[#1C1C1C]'
                                : 'text-[#4A4A4A] hover:text-[#8C7A65] hover:bg-[#ECDDC4]/30 border-l-2 border-transparent -ml-[1px]'
                            }
                        `}
                    >
                        {text}
                    </a>
                ))}
            </nav>
        </div>
    );
}
