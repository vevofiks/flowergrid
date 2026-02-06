import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
    _id: string;
    title: string;
    slug: string;
    createdAt: string;
}

interface BlogListingSidebarProps {
    topPosts: BlogPost[];
}

const CATEGORIES = [
    { name: 'Holistic Wellness', image: 'https://images.unsplash.com/photo-1544367563-ed285e990027?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Mindfulness & Meditation', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Healing Therapies', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Emotional Wellbeing', image: 'https://images.unsplash.com/photo-1499209971180-415802d28f09?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Nutrition & Lifestyle', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Eco-conscious Living', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Workplace Wellness', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop' },
];

export default function BlogListingSidebar({ topPosts }: BlogListingSidebarProps) {
    return (
        <aside className="space-y-12">
            {/* Categories Section */}
            <div>
                <h3 className="text-xl font-medium text-[#1C1C1C] mb-6 font-serif">Categories</h3>
                <div className="space-y-3">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.name}
                            href={`#`} // Placeholder until categories are implemented
                            className="group relative block h-16 rounded-xl overflow-hidden cursor-pointer w-full max-w-[300px]"
                        >
                            {/* Background Image */}
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6 transition-opacity duration-300 group-hover:bg-black/50">
                                <span className="text-white text-sm font-medium tracking-wide drop-shadow-md">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Top Posts Section */}
            <div>
                <h3 className="text-xl font-medium text-[#1C1C1C] mb-6 font-serif">Top Posts</h3>
                <ol className="space-y-6 list-decimal list-outside ml-4 text-[#8C7A65] font-serif font-bold text-lg">
                    {topPosts.slice(0, 5).map((post, index) => (
                        <li key={post._id} className="pl-2">
                            <div className="flex flex-col gap-1 -mt-1.5">
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="text-base font-medium text-[#1C1C1C] font-sans hover:text-[#8C7A65] transition-colors leading-snug"
                                >
                                    {post.title}
                                </Link>
                                <span className="text-xs text-[#8C7A65]/80 font-sans tracking-wider uppercase font-normal">
                                    3 min read • {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </aside>
    );
}
