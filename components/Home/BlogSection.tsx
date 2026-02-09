"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlogType {
  _id: string;
  title: string;
  slug: string;
  tldr: any;
  content: any;
  createdAt: string;
  image?: string;
}

const extractTextFromEditorJS = (editorData: any, wordLimit: number = 30): string => {
  if (!editorData) return "";

  try {
    if (typeof editorData === 'string') return editorData;

    if (editorData.blocks && Array.isArray(editorData.blocks)) {
      const textBlocks = editorData.blocks
        .filter((block: any) => block.type === 'paragraph' || block.type === 'header')
        .map((block: any) => block.data?.text || '')
        .join(' ');

      const words = textBlocks.split(' ').filter((word: string) => word.length > 0);
      if (words.length <= wordLimit) return textBlocks;
      return words.slice(0, wordLimit).join(' ') + '...';
    }

    return "";
  } catch (error) {
    console.error("Error extracting text from Editor.js:", error);
    return "";
  }
};

const extractCoverImage = (editorData: any): string | null => {
  if (!editorData) return null;

  try {
    if (editorData.blocks && Array.isArray(editorData.blocks)) {
      const imageBlock = editorData.blocks.find((block: any) => block.type === 'image');
      if (imageBlock && imageBlock.data?.file?.url) {
        return imageBlock.data.file.url;
      }
    }
    return null;
  } catch (error) {
    console.error("Error extracting cover image:", error);
    return null;
  }
};

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog?limit=3");
        const data = await res.json();

        if (data.success) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);



  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F3EAD8] flex flex-col py-5 px-6 md:px-12 lg:px-20"
    >

      {/* Header */}
      <div
        ref={headerRef}
        className="flex-none flex items-center justify-center gap-3 md:gap-4 mb-7"
      >
        <div className="relative w-6 h-6 md:w-20 md:h-20">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMGURL}home/leaf.png`}
            alt="Leaf"
            fill
            className="object-contain opacity-80"
          />
        </div>
        <h2 className="text-[#1C1C1C] text-3xl md:text-5xl lg:text-[4rem] font-heading font-light tracking-wide leading-none">
          Blog Articles
        </h2>
      </div>

      <div className="w-full max-w-[1600px] mx-auto">
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >

          {loading && (
            <div className="col-span-full text-center py-20 text-[#8C7A65]">
              Loading blogs...
            </div>
          )}

          {!loading && blogs.map((blog) => {
            const coverImage = extractCoverImage(blog.content) || `${process.env.NEXT_PUBLIC_IMGURL}home/H8 a.png`;
            const tldrText = extractTextFromEditorJS(blog.tldr, 30);

            return (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug}`}
                className="w-full h-full flex flex-col bg-[#ECDDC4]/40 border border-[#8C7A65]/10 rounded-3xl overflow-hidden hover:bg-[#ECDDC4] transition-colors duration-500 group cursor-pointer"
              >

                {/* Image */}
                <div className="relative w-full h-56 md:h-64 lg:h-72 shrink-0 overflow-hidden bg-[#E6D7C3]">
                  <Image
                    src={coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#F3EAD8]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#1C1C1C] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6 md:p-8">

                  <h3 className="text-[#1C1C1C] text-xl lg:text-2xl font-heading font-normal leading-tight group-hover:text-[#8C7A65] transition-colors line-clamp-2 mb-3 md:mb-4">
                    {blog.title}
                  </h3>

                  <p className="text-[#4A4A4A] text-sm font-sans leading-relaxed flex-1 mb-6">
                    {tldrText}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#8C7A65]/20 flex justify-end items-center">
                    <span className="text-[#1C1C1C] text-xs font-bold uppercase tracking-widest hover:text-[#8C7A65] transition-colors flex items-center gap-2">
                      Read Article
                      <div className="w-8 h-8 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center group-hover:bg-[#1C1C1C] group-hover:text-[#F3EAD8] transition-all">
                        ↗
                      </div>
                    </span>
                  </div>

                </div>
              </Link>
            );
          })}

        </div>
      </div>

    </section>
  );
}
