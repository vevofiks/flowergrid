import React from 'react';
import BlogListingSidebar from './BlogListingSidebar';
import BlogGrid from './BlogGrid';
import BlogHero from './BlogHero';
import BlogFeaturedSection from './BlogFeaturedSection';

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

interface BlogLayoutProps {
    blogs: BlogPost[];
}

export default function BlogLayout({ blogs }: BlogLayoutProps) {
    const latestPost = blogs.length > 0 ? blogs[0] : null;

    const featuredPosts = blogs.length > 1 ? blogs.slice(1, 4) : [];
    const gridPosts = blogs.length > 4 ? blogs.slice(4) : [];

    const topPosts = blogs.slice(0, 5);

    return (
        <div className="min-h-screen bg-[#F3EAD8] pb-20">
            {/* Hero Section - Full Width */}
            <BlogHero />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-20">
                {/* Featured Section */}
                <BlogFeaturedSection latestPost={latestPost} featuredPosts={featuredPosts} />

                <div className="flex flex-col lg:flex-row gap-16 mt-16">
                    {/* Left Sidebar - Fixed Width on Desktop */}
                    <aside className="w-full lg:w-[320px] flex-shrink-0">
                        <div className="sticky top-24">
                            <BlogListingSidebar topPosts={topPosts} />
                        </div>
                    </aside>

                    {/* Right Main Content - Flexible Width */}
                    <main className="flex-grow min-w-0">
                        <BlogGrid posts={gridPosts} />
                    </main>
                </div>
            </div>
        </div>
    );
}
