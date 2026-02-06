'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { OutputData } from '@editorjs/editorjs';
import SuccessToast from '@/components/ui/SuccessToast';

// Dynamic imports for Editor tools
const Editor = dynamic(() => import('@/components/Editor'), { ssr: false });

// TLDR Tools Configuration
const TLDR_TOOLS = {
    header: {
        class: require('@editorjs/header'),
        inlineToolbar: true,
        config: {
            levels: [2, 3], // Only H2 and H3 for TLDR
            defaultLevel: 2
        }
    },
    paragraph: {
        class: require('@editorjs/paragraph'),
        inlineToolbar: true,
    },
    list: {
        class: require('@editorjs/list'),
        inlineToolbar: true,
    }
};

function EditorPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get('id');

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [authorId, setAuthorId] = useState('');

    // TLDR is now OutputData (JSON)
    const [tldr, setTldr] = useState<OutputData>({
        time: new Date().getTime(),
        blocks: [],
    });

    const [content, setContent] = useState<OutputData>({
        time: new Date().getTime(),
        blocks: [],
    });

    const [authors, setAuthors] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Toast state
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });

    // Fetch authors
    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const res = await fetch('/api/author');
                const data = await res.json();
                if (data.success) {
                    setAuthors(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch authors', error);
            }
        };
        fetchAuthors();
    }, []);

    // Load existing blog for editing
    useEffect(() => {
        if (id) {
            const fetchBlog = async () => {
                try {
                    const res = await fetch(`/api/blog/${id}`);
                    const data = await res.json();
                    if (data.success) {
                        setTitle(data.data.title);
                        setSlug(data.data.slug);
                        setAuthorId(data.data.author?._id || '');

                        // Handle TLDR: if string (legacy), convert to block; if object, use as is
                        if (typeof data.data.tldr === 'string') {
                            setTldr({
                                time: new Date().getTime(),
                                blocks: [{ type: 'paragraph', data: { text: data.data.tldr } }]
                            });
                        } else {
                            setTldr(data.data.tldr || { time: new Date().getTime(), blocks: [] });
                        }

                        setContent(data.data.content);
                    } else {
                        setToast({ show: true, message: 'Failed to load blog', type: 'error' });
                    }
                } catch (error) {
                    console.error('Error loading blog', error);
                } finally {
                    setIsLoaded(true);
                }
            };
            fetchBlog();
        } else {
            // Load draft from localStorage
            const savedDraft = localStorage.getItem('blog-draft');
            if (savedDraft) {
                try {
                    const parsed = JSON.parse(savedDraft);
                    setTitle(parsed.title || '');
                    setSlug(parsed.slug || '');
                    setAuthorId(parsed.authorId || '');
                    setTldr(parsed.tldr || { time: new Date().getTime(), blocks: [] });
                    if (parsed.content) setContent(parsed.content);
                } catch (e) {
                    console.error('Failed to load draft', e);
                }
            }
            setIsLoaded(true);
        }
    }, [id]);

    // Autosave to local storage
    useEffect(() => {
        if (!id && isLoaded) {
            const draft = { title, slug, authorId, tldr, content };
            localStorage.setItem('blog-draft', JSON.stringify(draft));
        }
    }, [title, slug, authorId, tldr, content, id, isLoaded]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (!id && !slug) {
            const autoSlug = newTitle
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-')
                .slice(0, 50);
            setSlug(autoSlug);
        }
    };

    const handleSave = async () => {
        if (!title || !slug || !tldr.blocks.length) {
            setToast({ show: true, message: 'Title, Slug, and TLDR are required', type: 'error' });
            return;
        }

        setLoading(true);

        try {
            const payload = {
                title,
                slug,
                author: authorId || undefined,
                tldr,
                content,
            };

            const url = id ? `/api/blog/${id}` : '/api/blog';
            const method = id ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                if (!id) {
                    localStorage.removeItem('blog-draft');
                }
                setToast({ show: true, message: id ? 'Blog updated successfully!' : 'Blog created successfully!', type: 'success' });
                setTimeout(() => {
                    router.push('/admin/blogs');
                }, 1500);
            } else {
                setToast({ show: true, message: 'Error: ' + data.error, type: 'error' });
            }
        } catch (error) {
            console.error('Save error:', error);
            setToast({ show: true, message: 'Failed to save blog', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Top Save Bar */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b px-8 py-3 flex justify-between items-center max-w-5xl mx-auto">
                <div className="text-sm text-gray-400">
                    {id ? 'Editing Post' : 'Drafting New Post'}
                </div>
                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-all"
                >
                    {loading ? 'Saving...' : 'Publish'}
                </button>
            </div>

            <div className="max-w-[700px] mx-auto px-4 py-12">
                {/* Title Input */}
                <textarea
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full text-5xl font-serif font-bold placeholder-gray-300 border-none outline-none resize-none overflow-hidden bg-transparent mb-4 leading-tight"
                    rows={1}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                    }}
                />

                {/* Slug Input */}
                <div className="group mb-6 flex items-center gap-2 text-gray-400 text-sm">
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="bg-transparent border-b border-transparent group-hover:border-gray-100 outline-none w-full font-mono text-gray-400 focus:border-gray-200 focus:text-gray-500 transition-all text-xs"
                        placeholder="url-slug"
                    />
                </div>

                {/* Author Dropdown */}
                <div className="mb-6">
                    <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
                        Author
                    </label>
                    <select
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    >
                        <option value="">Select Author (Optional)</option>
                        {authors.map((author) => (
                            <option key={author._id} value={author._id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* TLDR Editor */}
                <div className="mb-8">
                    <label className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
                        TL;DR (Required)
                    </label>
                    <div className="border-l-4 border-gray-200 pl-4 py-2 bg-gray-50/50 rounded-r-lg">
                        {isLoaded && (
                            <Editor
                                key={`tldr-${id || 'new'}`}
                                holder="tldr-editor-container"
                                onChange={(data) => setTldr(data)}
                                data={tldr}
                                config={{
                                    tools: TLDR_TOOLS,
                                    placeholder: 'Write a short summary...',
                                    minHeight: 100,
                                    className: 'text-base font-serif italic text-gray-700'
                                }}
                            />
                        )}
                    </div>
                </div>

                {/* Main Content Editor */}
                <div className="min-h-[500px] font-serif">
                    {isLoaded && (
                        <Editor
                            key={`content-${id || 'new'}`}
                            holder="editorjs-container"
                            onChange={(data) => setContent(data)}
                            data={content}
                        />
                    )}
                </div>
            </div>

            <SuccessToast
                isOpen={toast.show}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ ...toast, show: false })}
            />
        </div>
    );
}

export default function EditorPage() {
    return (
        <Suspense fallback={<div className="p-8 text-center">Loading editor...</div>}>
            <EditorPageContent />
        </Suspense>
    );
}
