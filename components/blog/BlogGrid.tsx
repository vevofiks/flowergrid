import React from 'react';
import BlogCard, { BlogPost } from './BlogCard';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
    if (posts.length === 0) {
        return (
            <div className="w-full py-20 text-center text-[#8C7A65]">
                <p>No more articles found.</p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
            ))}
        </div>
    );
}
