import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { extractTldrText } from '@/lib/utils';

// Helper to extract first image
function extractCoverImage(content: any): string | null {
    if (!content || !content.blocks) return null;
    const imageBlock = content.blocks.find((block: any) => block.type === 'image');
    return imageBlock?.data?.file?.url || null;
}

export interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    tldr: any;
    content: any;
    author: {
        name: string;
    } | null;
    createdAt: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
    const imageUrl = extractCoverImage(post.content);
    const excerpt = extractTldrText(post.tldr);
    const date = new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    // Placeholder for read time, as we don't calculate it yet
    const readTime = "3 min read";

    return (
        <div className="group flex flex-col h-full bg-[#f4ece0] rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E6D7C3]">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#8C7A65] opacity-50">
                        <span>No Image</span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow p-8">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs font-medium text-[#8C7A65] uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{date}</span>
                    </div>
                    <span className="w-1 h-1 bg-[#8C7A65] rounded-full" />
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif font-medium text-[#1C1C1C] mb-4 leading-tight group-hover:text-[#8C7A65] transition-colors">
                    <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8 line-clamp-3 flex-grow font-sans">
                    {excerpt}
                </p>

                {/* Explore Link */}
                <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1C1C1C] uppercase tracking-widest hover:text-[#8C7A65] transition-colors mt-auto group/link"
                >
                    Explore
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
            </div>
        </div>
    );
}
