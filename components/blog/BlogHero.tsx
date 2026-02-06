import React from 'react';
import Image from 'next/image';
import '@/models/Author'

export default function BlogHero() {
    return (
        <div className="relative w-full h-[60vh] min-h-[600px] md:h-[60vh] overflow-hidden">
            <Image
                src={`${process.env.NEXT_PUBLIC_IMGURL}blog/bloghero.png`}
                alt="Holistic Wellness"
                fill
                className=""
                priority
            />
       

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-fulltext-white">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-sans font-light mb-6 tracking-wide !text-white">Blogs</h1>
                        <p className="text-lg md:text-xl font-sans font-light leading-relaxed opacity-90 !text-white">
                            Discover thoughtful insights, mindful practices, and expert guidance on holistic healing, emotional wellbeing, and conscious living.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
