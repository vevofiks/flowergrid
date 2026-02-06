import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { extractTldrText } from '@/lib/utils'; // Make sure this utils file exists or define inline if not

// Helper to extract first image from Editor.js content (duplicated from page for now, or move to utils)
function extractCoverImage(content: any): string | null {
    if (!content || !content.blocks) return null;
    const imageBlock = content.blocks.find((block: any) => block.type === 'image');
    return imageBlock?.data?.file?.url || null;
}

interface BlogPost {
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

interface BlogFeaturedSectionProps {
    latestPost: BlogPost | null;
    featuredPosts: BlogPost[];
}

export default function BlogFeaturedSection({ latestPost, featuredPosts }: BlogFeaturedSectionProps) {
    if (!latestPost && featuredPosts.length === 0) return null;

    return (
        <section className="bg-transparent mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column: Latest Post (Large Card) */}
                {latestPost && (
                    <div>
                        <h2 className="text-xl font-serif text-[#1C1C1C] mb-6">Latest Post</h2>
                        <Link href={`/blogs/${latestPost.slug}`} className="block group">
                            <div className="bg-[#E6D7C3] rounded-3xl overflow-hidden mb-6 aspect-[4/3] relative">
                                {extractCoverImage(latestPost.content) ? (
                                    <Image
                                        src={extractCoverImage(latestPost.content)!}
                                        alt={latestPost.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#E6D7C3] flex items-center justify-center text-[#8C7A65]">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#1C1C1C] mb-3 leading-tight group-hover:text-[#8C7A65] transition-colors">
                                {latestPost.title}
                            </h3>
                            <div className="flex justify-between items-center text-xs font-sans text-[#8C7A65] uppercase tracking-widest mt-4">
                                <span>By {latestPost.author?.name || 'Flowergrid'}</span>
                                <span>
                                    Last Updated: {new Date(latestPost.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Right Column: Featured Posts (List) */}
                {featuredPosts.length > 0 && (
                    <div>
                        <h2 className="text-xl font-serif text-[#1C1C1C] mb-6">Featured Posts</h2>
                        <div className="space-y-8">
                            {featuredPosts.map((post) => (
                                <Link key={post._id} href={`/blogs/${post.slug}`} className="flex gap-6 group items-start">
                                    {/* Thumbnail */}
                                    <div className="relative w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#E6D7C3]">
                                        {extractCoverImage(post.content) ? (
                                            <Image
                                                src={extractCoverImage(post.content)!}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#E6D7C3]" />
                                        )}
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-serif font-medium text-[#1C1C1C] mb-2 leading-tight group-hover:text-[#8C7A65] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-[#4A4A4A] font-sans leading-relaxed mb-3 line-clamp-2">
                                            {extractTldrText(post.tldr)}
                                        </p>
                                        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#8C7A65]">
                                            <span>By {post.author?.name || 'Flowergrid'}</span>
                                            <span>
                                                {new Date(post.createdAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
