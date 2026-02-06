'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { extractTldrText } from '@/lib/utils';

interface Blog {
    _id: string;
    title: string;
    slug: string;
    author?: string | { _id: string; name: string; bio?: string; avatar?: string };
    tldr?: any;
    createdAt: string;
}

export default function AdminBlogList() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blog');
            const data = await res.json();
            if (data.success) {
                setBlogs(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch blogs', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog?')) return;

        try {
            const res = await fetch(`/api/blog/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success) {
                setBlogs(blogs.filter((b) => b._id !== id));
            } else {
                alert('Failed to delete: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('Delete error', error);
            alert('Error deleting blog');
        }
    };

    if (loading) return <div className="p-8 text-center">Loading blogs...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
                    <Link
                        href="/blogs/editor"
                        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        + Create New Post
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Title / TLDR</th>
                                <th className="px-6 py-4 font-semibold">Author</th>
                                <th className="px-6 py-4 font-semibold">Created</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {blogs.map((blog) => (
                                <tr key={blog._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-gray-900 mb-1">{blog.title}</div>
                                        <div className="text-sm text-gray-500 line-clamp-1">{extractTldrText(blog.tldr)}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {(() => {
                                            if (!blog.author) return '—';
                                            if (typeof blog.author === 'object') return blog.author.name;
                                            return blog.author;
                                        })()}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-3">
                                        <Link
                                            href={`/blogs/editor?id=${blog._id}`}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(blog._id)}
                                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {blogs.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                                        No blogs found. Create one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
