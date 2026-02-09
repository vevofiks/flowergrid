'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SupportItem {
  image: string;
  title: string;
}

interface SupportProps {
  data: SupportItem[];
}

const Support: React.FC<SupportProps> = ({ data }) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);
  const scrollAmountRef = useRef(0);
  const lastInteractionTime = useRef(0);

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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!scrollRef.current || data.length <= visibleCards) return;

    const scrollSpeed = 1.2;
    const container = scrollRef.current;

    const animate = (time: number) => {
      const singleSetWidth = container.scrollWidth / 2;

      // Resume scroll after 1 second of no interaction
      const shouldScroll = !isHovered.current && (time - lastInteractionTime.current > 1000);

      if (shouldScroll && singleSetWidth > 0) {
        scrollAmountRef.current += scrollSpeed;
        if (scrollAmountRef.current >= singleSetWidth) {
          scrollAmountRef.current = 0;
        }
        container.scrollLeft = scrollAmountRef.current;
      } else if (!shouldScroll) {
        // Keep scrollAmountRef in sync with manual scrolling
        scrollAmountRef.current = container.scrollLeft;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data.length, visibleCards]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    lastInteractionTime.current = performance.now();
    const container = scrollRef.current;
    const cardWidth = container.scrollWidth / (data.length * 2);
    const scrollOffset = direction === 'left' ? -cardWidth : cardWidth;

    container.scrollTo({
      left: container.scrollLeft + scrollOffset,
      behavior: 'smooth'
    });

    scrollAmountRef.current = container.scrollLeft + scrollOffset;
  };

  if (!data || data.length === 0) return null;

  return (
    <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] text-text-heading font-heading tracking-wide font-normal">
            How I Can Support You
          </h2>
        </div>

        {/* Carousel Wrapper with Side Buttons */}
        <div className="relative group/carousel px-4 md:px-0">
          {/* Navigation Controls - Left */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-2 lg:-left-20 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full border border-text-heading/20 bg-white/80 backdrop-blur-md text-text-heading hover:bg-[#A68653] hover:text-white transition-all duration-300 group flex items-center justify-center shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Navigation Controls - Right */}
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-2 lg:-right-20 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full border border-text-heading/20 bg-white/80 backdrop-blur-md text-text-heading hover:bg-[#A68653] hover:text-white transition-all duration-300 group flex items-center justify-center shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Auto‑scroll container */}
          <div
            ref={scrollRef}
            className="relative overflow-x-auto overflow-y-hidden pb-4 scrollbar-hidden"
            style={{
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            onMouseEnter={() => {
              isHovered.current = true;
            }}
            onMouseLeave={() => {
              isHovered.current = false;
              lastInteractionTime.current = performance.now();
            }}
            onTouchStart={() => {
              isHovered.current = true;
            }}
            onTouchEnd={() => {
              isHovered.current = false;
              lastInteractionTime.current = performance.now();
            }}
            onScroll={() => {
              // Sync scrollAmountRef when user scrolls manually
              if (isHovered.current) {
                lastInteractionTime.current = performance.now();
                scrollAmountRef.current = scrollRef.current?.scrollLeft || 0;
              }
            }}
          >
            <div
              className="flex gap-6 lg:gap-8"
              style={{
                flexWrap: 'nowrap',
              }}
            >
              {/* Render data twice for infinite loop effect */}
              {[...Array(2)].map((_, repeatIndex) =>
                data.map((item, index) => (
                  <motion.div
                    key={`${repeatIndex}-${index}`}
                    style={{
                      flex: `0 0 calc((100% - ${(visibleCards - 1) * (visibleCards >= 3 ? 32 : 24)}px) / ${visibleCards})`,
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
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
