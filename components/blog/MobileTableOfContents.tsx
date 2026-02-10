'use client';

import { useState, useEffect } from 'react';

export default function MobileTableOfContents({ content }: { content: any }) {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (!content?.blocks) return;

        const extractedHeadings = content.blocks
            .filter((block: any) => block.type === 'header' && [1, 2, 3].includes(block.data.level))
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

    if (headings.length === 0) return null;

    return (
        <div className="lg:hidden mb-8 border-b border-[#8C7A65]/20 pb-8">
            <h3 className="font-heading text-lg text-[#1C1C1C] mb-4">Table of Contents</h3>
            <nav className="space-y-1">
                {headings.map(({ id, text, level }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={`block text-sm py-2 pr-4 transition-colors leading-relaxed border-l-2
                            ${level === 1 ? 'pl-3 font-semibold border-[#8C7A65]' : ''}
                            ${level === 2 ? 'pl-6 border-transparent' : ''}
                            ${level === 3 ? 'pl-9 text-xs border-transparent' : ''}
                            ${activeId === id
                                ? 'text-[#8C7A65] font-medium'
                                : 'text-[#4A4A4A] hover:text-[#8C7A65]'
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
