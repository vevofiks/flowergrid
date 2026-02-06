'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import SuccessToast from '@/components/ui/SuccessToast';
import { Upload, X } from 'lucide-react';

interface Author {
    _id: string;
    name: string;
    bio?: string;
    avatar?: string;
    createdAt: string;
}

export default function AdminAuthorsPage() {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);
    const [formData, setFormData] = useState({ name: '', bio: '', avatar: '' });

    // Upload state
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Toast
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' as 'success' | 'error' });

    const fetchAuthors = async () => {
        try {
            const res = await fetch('/api/author');
            const data = await res.json();
            if (data.success) {
                setAuthors(data.data);
            }
        } catch (error) {
            console.error('Failed to fetch authors', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuthors();
    }, []);

    const handleCreate = () => {
        setEditingAuthor(null);
        setFormData({ name: '', bio: '', avatar: '' });
        setShowModal(true);
    };

    const handleEdit = (author: Author) => {
        setEditingAuthor(author);
        setFormData({
            name: author.name,
            bio: author.bio || '',
            avatar: author.avatar || ''
        });
        setShowModal(true);
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const data = new FormData();
        data.append('image', file);

        try {
            const res = await fetch('/api/upload?folder=authors', {
                method: 'POST',
                body: data,
            });
            const result = await res.json();

            if (result.success) {
                setFormData(prev => ({ ...prev, avatar: result.file.url }));
                setToast({ show: true, message: 'Image uploaded successfully!', type: 'success' });
            } else {
                setToast({ show: true, message: 'Upload failed: ' + result.error, type: 'error' });
            }
        } catch (error) {
            console.error('Upload error', error);
            setToast({ show: true, message: 'Upload failed', type: 'error' });
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        if (!formData.name.trim()) {
            setToast({ show: true, message: 'Name is required', type: 'error' });
            return;
        }

        try {
            const url = editingAuthor ? `/api/author/${editingAuthor._id}` : '/api/author';
            const method = editingAuthor ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                setShowModal(false);
                fetchAuthors();
                setToast({ show: true, message: editingAuthor ? 'Author updated!' : 'Author created!', type: 'success' });
            } else {
                setToast({ show: true, message: 'Failed: ' + data.error, type: 'error' });
            }
        } catch (error) {
            console.error('Save error', error);
            setToast({ show: true, message: 'Error saving author', type: 'error' });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this author?')) return;

        try {
            const res = await fetch(`/api/author/${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) {
                fetchAuthors();
                setToast({ show: true, message: 'Author deleted', type: 'success' });
            } else {
                setToast({ show: true, message: 'Failed to delete: ' + data.error, type: 'error' });
            }
        } catch (error) {
            console.error('Delete error', error);
            setToast({ show: true, message: 'Error deleting author', type: 'error' });
        }
    };

    if (loading) return <div className="p-8 text-center">Loading authors...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Author Management</h1>
                    <button
                        onClick={handleCreate}
                        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        + Create New Author
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Author</th>
                                <th className="px-6 py-4 font-semibold">Bio</th>
                                <th className="px-6 py-4 font-semibold">Created</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {authors.map((author) => (
                                <tr key={author._id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                                                {author.avatar ? (
                                                    <Image
                                                        src={author.avatar}
                                                        alt={author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold">
                                                        {author.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-semibold text-gray-900">{author.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 line-clamp-1">{author.bio || '—'}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(author.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-3">
                                        <button
                                            onClick={() => handleEdit(author)}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(author._id)}
                                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {authors.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400">
                                        No authors found. Create one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-2xl font-bold mb-6">
                            {editingAuthor ? 'Edit Author' : 'Create Author'}
                        </h2>

                        <div className="space-y-4">
                            {/* Avatar Upload */}
                            <div className="flex justify-center mb-6">
                                <div
                                    className="relative w-24 h-24 rounded-full bg-gray-100 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border-2 border-dashed border-gray-300 group"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {formData.avatar ? (
                                        <Image
                                            src={formData.avatar}
                                            alt="Preview"
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                                            <Upload className="w-6 h-6 mb-1" />
                                            <span className="text-[10px]">Upload</span>
                                        </div>
                                    )}
                                    {uploading && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs">
                                            Loading...
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileUpload}
                                    className="hidden"
                                    accept="image/*"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                    placeholder="Author name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bio
                                </label>
                                <textarea
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                    placeholder="Short bio..."
                                    rows={3}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-8">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={uploading}
                                className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <SuccessToast
                isOpen={toast.show}
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ ...toast, show: false })}
            />
        </div>
    );
}
