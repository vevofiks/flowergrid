'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BlogRenderer from '@/components/BlogRenderer';
import { TableOfContents } from '@/components/blog/BlogSidebar';
import MobileTableOfContents from '@/components/blog/MobileTableOfContents';
import AuthorSidebar from '@/components/blog/AuthorSidebar';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogFeaturedSection from '@/components/blog/BlogFeaturedSection';
import BlogFaq from '@/components/blog/BlogFaq';
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react';

function extractCoverImage(content: any): string | null {
    if (!content || !content.blocks) return null;
    const imageBlock = content.blocks.find((block: any) => block.type === 'image');
    return imageBlock?.data?.file?.url || null;
}

export default function BlogPostLayout({ blog, latestPost, featuredPosts }: { blog: any; latestPost?: any; featuredPosts?: any[] }) {
    const [isFocusMode, setIsFocusMode] = useState(false);
    const [blogUrl, setBlogUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setBlogUrl(window.location.href);
        }
    }, []);

    const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const coverImage = extractCoverImage(blog.content);

    return (
        <div className="min-h-screen bg-[#F3EAD8] pb-20">
            {/* HERO SECTION - Full Width */}
            {!isFocusMode && (
                <BlogPostHero
                    title={blog.title}
                    coverImage={coverImage}
                    date={formattedDate}
                    readTime={blog.readTime || '5 min read'}
                    category="Holistic Health"
                    tldr={blog.tldr}
                    url={blogUrl} // Pass URL for AI Summary links
                />
            )}

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">

                {/* Back Button & Focus Toggle */}
                <div className="flex justify-between items-center mb-8 pt-24 md:pt-28">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-sm text-[#8C7A65] hover:text-[#1C1C1C] transition-colors uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Articles
                    </Link>

                    <button
                        onClick={() => setIsFocusMode(!isFocusMode)}
                        className="inline-flex items-center gap-2 text-sm text-[#8C7A65] hover:text-[#1C1C1C] transition-colors uppercase tracking-widest bg-[#ECDDC4]/50 px-4 py-2 rounded-full"
                    >
                        {isFocusMode ? (
                            <>
                                <Minimize2 className="w-4 h-4" /> Standard View
                            </>
                        ) : (
                            <>
                                <Maximize2 className="w-4 h-4" /> Focus Mode
                            </>
                        )}
                    </button>
                </div>

                {/* Mobile Table of Contents (Visible only on small screens) */}
                <div className="lg:hidden mb-12">
                    <MobileTableOfContents content={blog.content} />
                </div>

                {/* Main Grid Layout */}
                <div className={`grid gap-12 transition-all duration-500 ease-in-out ${isFocusMode ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 lg:grid-cols-12'
                    }`}>

                    {/* LEFT COLUMN: ToC & Tools (Hidden in Focus Mode) */}
                    {!isFocusMode && (
                        <aside className="lg:col-span-3 hidden lg:block space-y-12 h-fit sticky top-32">
                            <TableOfContents content={blog.content} />
                        </aside>
                    )}

                    {/* CENTER COLUMN: Content */}
                    <main className={isFocusMode ? 'w-full' : 'lg:col-span-6'}>
                        {isFocusMode && (
                            <div className="mb-10 text-center">
                                <h1 className="text-3xl md:text-5xl font-heading font-medium text-[#1C1C1C] leading-tight mb-4">
                                    {blog.title}
                                </h1>
                            </div>
                        )}

                        {/* Article Content */}
                        <article className="prose prose-lg prose-headings:font-heading prose-headings:font-normal prose-p:font-sans prose-p:text-[#4A4A4A] prose-p:leading-relaxed max-w-none">

                            <BlogRenderer data={blog.content} />
                        </article>

                        {/* Dedicated Blog FAQ Section */}
                        {blog.faq && blog.faq.length > 0 && (
                            <BlogFaq faqs={blog.faq} />
                        )}
                    </main>

                    {/* RIGHT COLUMN: Author (Hidden in Focus Mode) */}
                    {!isFocusMode && (
                        <aside className="lg:col-span-3 hidden lg:block h-fit sticky top-32">
                            <AuthorSidebar author={blog.author} />
                        </aside>
                    )}
                </div>



                {/* Mobile Author Section (Visible only on small screens) */}
                <div className="lg:hidden flex flex-col gap-12">
                    <AuthorSidebar author={blog.author} />
                </div>



                {/* Bottom Featured Section (Reused) */}
                {!isFocusMode && latestPost && featuredPosts && (
                    <div className="mt-32 pt-16 border-t border-[#8C7A65]/20">
                        <h2 className="text-3xl font-serif text-[#1C1C1C] mb-12 text-center">More to Explore</h2>
                        <BlogFeaturedSection latestPost={latestPost} featuredPosts={featuredPosts} />
                    </div>
                )}

            </div>
        </div>
    );
}
