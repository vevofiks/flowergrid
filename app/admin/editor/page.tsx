'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { OutputData } from '@editorjs/editorjs';

const Editor = dynamic(() => import('@/components/Editor'), {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
});

function EditorPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [author, setAuthor] = useState('');
    const [tldr, setTldr] = useState('');
    const [content, setContent] = useState<OutputData>({
        time: new Date().getTime(),
        blocks: [],
        version: '2.8.1',
    });
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(!!id);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (!id && !slug) {
            setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
        }
    };

    useEffect(() => {
        if (id) {
            setFetching(true);
            fetch(`/api/blog/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setTitle(data.data.title);
                        setSlug(data.data.slug);
                        setAuthor(data.data.author || '');
                        setTldr(data.data.tldr || '');
                        setContent(data.data.content);
                    } else {
                        alert('Failed to load blog');
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert('Error loading blog');
                })
                .finally(() => {
                    setFetching(false);
                    setIsLoaded(true);
                });
        } else {
            const savedDraft = localStorage.getItem('blog-draft');
            if (savedDraft) {
                try {
                    const parsed = JSON.parse(savedDraft);
                    setTitle(parsed.title || '');
                    setSlug(parsed.slug || '');
                    setAuthor(parsed.author || '');
                    setTldr(parsed.tldr || '');
                    if (parsed.content) setContent(parsed.content);
                } catch (e) {
                    console.error('Failed to load draft', e);
                }
            }
            setIsLoaded(true);
        }
    }, [id]);

    useEffect(() => {
        if (!id && isLoaded) {
            const draft = { title, slug, author, tldr, content };
            localStorage.setItem('blog-draft', JSON.stringify(draft));
        }
    }, [title, slug, author, tldr, content, id, isLoaded]);

    const handleSave = async () => {
        if (!title || !slug || !tldr) {
            alert('Title, Slug, and TLDR are required');
            return;
        }

        setLoading(true);
        try {
            const payload = {
                title,
                slug,
                author,
                tldr,
                content,
            };

            let res;
            if (id) {
                res = await fetch(`/api/blog/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
            } else {
                // Create new
                res = await fetch('/api/blog', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
            }

            const data = await res.json();
            if (data.success) {
                alert('Blog saved successfully!');
                if (!id) {
                    localStorage.removeItem('blog-draft');
                    // Optional: redirect to edit mode or clear form
                    // router.push(`/blogs/editor?id=${data.data._id}`);
                }
            } else {
                alert('Failed to save: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving.');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-8 text-center text-gray-500">Loading editor...</div>;

    return (
        <div className="min-h-screen bg-white">
            {/* Top Save Bar */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b px-8 py-3 flex justify-between items-center max-w-5xl mx-auto">
                <div className="text-sm text-gray-400">
                    {id ? 'Editing Post' : 'Drafting New Post (Autosaved locally)'}
                </div>
                <div className="flex items-center gap-4">
                    {/* Author Input in Header or Top */}
                    <input
                        type="text"
                        placeholder="Author Name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="text-sm border-b border-transparent hover:border-gray-300 focus:border-gray-500 outline-none text-right placeholder-gray-300"
                    />
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-all"
                    >
                        {loading ? 'Saving...' : 'Publish'}
                    </button>
                </div>
            </div>

            <div className="max-w-[700px] mx-auto px-4 py-12">
                {/* Title Input as H1 */}
                <textarea
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full text-5xl font-serif font-bold placeholder-gray-300 border-none outline-none resize-none overflow-hidden bg-transparent mb-4 leading-tight text-gray-900"
                    rows={1}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                    }}
                />

                {/* Slug / Meta Input */}
                <div className="group mb-6 flex items-center gap-2 text-gray-400 text-sm">
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="bg-transparent border-b border-transparent group-hover:border-gray-100 outline-none w-full font-mono text-gray-400 focus:border-gray-200 focus:text-gray-500 transition-all text-xs"
                        placeholder="url-slug"
                    />
                </div>

                {/* TLDR Input */}
                <div className="mb-8">
                    <textarea
                        placeholder="TL;DR (Short summary for previews...)"
                        value={tldr}
                        onChange={(e) => setTldr(e.target.value)}
                        className="w-full text-lg font-serif italic text-gray-600 placeholder-gray-300 border-l-4 border-gray-200 pl-4 py-2 outline-none resize-none bg-transparent"
                        rows={2}
                    />
                </div>

                {/* Editor Canvas */}
                <div className="min-h-[500px] font-serif">
                    <Editor
                        key={id ? 'edit' : 'create'}
                        holder="editorjs-container"
                        onChange={(data) => setContent(data)}
                        data={content}
                    />
                </div>
            </div>
        </div>
    );
}

export default function EditorPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditorPageContent />
        </Suspense>
    )
}
