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
                            captionPlaceholder: '',
                        },
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
    }, [isMounted, holder]);

    return (
        <div
            id={holder}
            className={`prose prose-lg prose-p:font-serif prose-headings:font-serif prose-headings:font-bold prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:italic max-w-full ${config?.className || ''}`}
        >
            <style jsx global>{`
                #${holder} h1 {
                    font-size: 2.25rem; /* text-4xl */
                    line-height: 2.5rem;
                }
                @media (min-width: 768px) {
                    #${holder} h1 {
                        font-size: 3rem; /* md:text-5xl */
                        line-height: 1;
                    }
                }

                #${holder} h2 {
                    font-size: 1.875rem; /* text-3xl */
                    line-height: 2.25rem;
                }
                @media (min-width: 768px) {
                    #${holder} h2 {
                        font-size: 2.25rem; /* md:text-4xl */
                        line-height: 2.5rem;
                    }
                }

                #${holder} h3 {
                    font-size: 1.5rem; /* text-2xl */
                    line-height: 2rem;
                }
                @media (min-width: 768px) {
                    #${holder} h3 {
                        font-size: 1.875rem; /* md:text-3xl */
                        line-height: 2.25rem;
                    }
                }

                #${holder} h4, #${holder} h5, #${holder} h6 {
                    font-size: 1.25rem; /* text-xl */
                    line-height: 1.75rem;
                }
                @media (min-width: 768px) {
                    #${holder} h4, #${holder} h5, #${holder} h6 {
                        font-size: 1.5rem; /* md:text-2xl */
                        line-height: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Editor;
