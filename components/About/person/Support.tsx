'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SupportItem {
    image: string;
    title: string;
}

interface SupportProps {
    data: SupportItem[];
}

const Support: React.FC<SupportProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!data || data.length === 0) return null;

    const maxIndex = Math.max(0, data.length - visibleCards);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] text-text-heading font-heading mb-12 md:mb-16 tracking-wide font-normal">
                    How I Can Support You
                </h2>

                <div className="relative group/carousel">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-3 z-20 -ml-4 md:-ml-8 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-3 rounded-full bg-[#A68653] text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${currentIndex === 0 ? 'hidden' : 'block'
                                }`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-3 z-20 sm:right-3 -mr-4 md:-mr-8 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className={`p-3 rounded-full bg-[#A68653] text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${currentIndex === maxIndex ? 'hidden' : 'block'
                                }`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Carousel Viewport */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6 lg:gap-8"
                            animate={{
                                x: `calc(-${currentIndex} * ((100% - ${(visibleCards - 1) * (visibleCards >= 3 ? 32 : 24)}px) / ${visibleCards} + ${visibleCards >= 3 ? 32 : 24}px))`
                            }}
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        flex: `0 0 calc((100% - ${(visibleCards - 1) * (visibleCards >= 3 ? 32 : 24)}px) / ${visibleCards})`
                                    }}
                                    className="group relative h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-[2rem] cursor-pointer"
                                >
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index < 3}
                                            draggable={false}
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 flex flex-col items-start justify-end h-full z-10">
                                        <h3 className="text-2xl md:text-3xl lg:text-[32px] !text-white font-heading font-normal leading-[1.2] mb-8 lg:mb-10 w-[90%]">
                                            {item.title}
                                        </h3>

                                        <button className="px-8 py-3 border border-white/60 rounded-full text-white text-sm uppercase tracking-widest hover:bg-[#A68653] hover:text-black hover:w-full hover:py-4 hover:scale-105 transition-all duration-300 backdrop-blur-[2px] hover:border-black!">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;