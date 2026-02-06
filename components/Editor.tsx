'use client';

import React, { useEffect, useRef, useState } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';

import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import ImageTool from '@editorjs/image';

interface EditorProps {
    data?: OutputData;
    onChange: (data: OutputData) => void;
    holder: string;
    config?: {
        tools?: any;
        placeholder?: string;
        minHeight?: number;
        className?: string;
    };
}

const Editor: React.FC<EditorProps> = ({ data, onChange, holder, config }) => {
    const ref = useRef<EditorJS | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: config?.tools || {
                    header: {
                        class: Header as any,
                        inlineToolbar: true,
                        config: {
                            levels: [1, 2, 3, 4, 5, 6],
                            defaultLevel: 2
                        }
                    },
                    list: {
                        class: List as any,
                        inlineToolbar: true,
                    },
                    paragraph: {
                        class: Paragraph as any,
                        inlineToolbar: true,
                    },
                    quote: {
                        class: Quote as any,
                        inlineToolbar: true,
                    },
                    image: {
                        class: ImageTool as any,
                        config: {
                            endpoints: {
                                byFile: '/api/upload',
                                byUrl: '/api/upload',
                            },
                            // Disable caption input
                            captionPlaceholder: '',
                        },
                        // Disable caption feature completely
                        features: {
                            caption: false,
                        }
                    },
                },
                data: data,
                minHeight: config?.minHeight || 300,
                async onChange(api, event) {
                    const content = await api.saver.save();
                    onChange(content);
                },
                placeholder: config?.placeholder || 'Let`s write an awesome story!',
            });
            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
                ref.current = null;
            }
        };
    }, [isMounted, holder]); // Re-init if holder changes

    return (
        <div
            id={holder}
            className={`prose prose-lg prose-p:font-serif prose-headings:font-serif prose-headings:font-bold prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:italic max-w-full ${config?.className || ''}`}
        />
    );
};

export default Editor;
