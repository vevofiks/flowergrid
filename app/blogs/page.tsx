import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';
import connectDB from '@/lib/db';
import '@/models/Author';
import Blog from '@/models/Blog';

async function getBlogs() {
    try {
        await connectDB();
        const blogs = await Blog.find({}).populate('author').sort({ createdAt: -1 }).lean();
        return blogs.map(blog => ({
            ...blog,
            _id: blog._id.toString(),
            author: blog.author && typeof blog.author === 'object' && 'name' in blog.author ? {
                name: (blog.author as any).name,
            } : null,
            createdAt: blog.createdAt.toISOString(),
            // Ensure other fields are serializable if needed, specifically generic `any` types for EditorJS content/tldr might need standardizing if not just JSON
        }));
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return [];
    }
}

export default async function BlogsPage() {
    const blogs = await getBlogs();
    return <BlogLayout blogs={blogs as any} />;
}
