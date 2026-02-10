import React from 'react';
import { OutputData } from '@editorjs/editorjs';

interface BlogRendererProps {
    data: OutputData;
}

const BlogRenderer: React.FC<BlogRendererProps> = ({ data }) => {
    if (!data || !data.blocks) {
        return null;
    }

    return (
        <div className="prose prose-lg prose-p:font-serif prose-headings:font-serif prose-headings:font-bold max-w-175 mx-auto text-gray-800">
            {data.blocks.map((block) => {
                switch (block.type) {
                    case 'header':
                        const Tag = `h${block.data.level}` as keyof React.JSX.IntrinsicElements;
                        const id = block.data.text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                        // Define classes based on level
                        let headingClasses = "font-heading font-medium text-[#1C1C1C] my-6 scroll-mt-32";
                        if (block.data.level === 1) {
                            headingClasses += " text-4xl md:text-5xl"; // Increased
                        } else if (block.data.level === 2) {
                            headingClasses += " text-3xl md:text-4xl"; // Increased
                        } else if (block.data.level === 3) {
                            headingClasses += " text-2xl md:text-3xl"; // Increased
                        } else {
                            headingClasses += " text-xl md:text-2xl"; // Increased
                        }

                        return (
                            <Tag key={block.id} id={id} className={headingClasses}>
                                {block.data.text}
                            </Tag>
                        );
                    case 'paragraph':
                        return (
                            <p
                                key={block.id}
                                className="mb-4"
                                dangerouslySetInnerHTML={{ __html: block.data.text }}
                            ></p>
                        );
                    case 'list':
                        const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
                        return (
                            <ListTag key={block.id} className="list-disc pl-5 mb-4 font-sans text-[#4A4A4A] leading-relaxed">
                                {block.data.items.map((item: string | any, index: number) => {
                                    const content = typeof item === 'string' ? item : item.content || item.text || '';
                                    return (
                                        <li key={index} dangerouslySetInnerHTML={{ __html: content }}></li>
                                    );
                                })}
                            </ListTag>
                        );
                    case 'quote':
                        return (
                            <blockquote
                                key={block.id}
                                className="border-l-4 border-gray-500 pl-4 italic my-4"
                            >
                                <p dangerouslySetInnerHTML={{ __html: block.data.text }} />
                                {block.data.caption && (
                                    <cite className="block text-sm mt-2">
                                        - {block.data.caption}
                                    </cite>
                                )}
                            </blockquote>
                        );
                    case 'image':
                        return (
                            <figure key={block.id} className="my-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={block.data.file.url}
                                    alt={block.data.caption || 'Blog Image'}
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                                {/* Caption removed as requested */}
                            </figure>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlogRenderer;
