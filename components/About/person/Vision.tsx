'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from('.vision-animate', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#F3E5CB] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="vision-animate flex items-start mb-16 flex-wrap">

          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-3xl font-heading text-[#171717] leading-tight tracking-wide">
            A Vision for Conscious Leadership
          </h2>

          <Image
            src={`${process.env.NEXT_PUBLIC_IMGURL}home/connection-logo.png`}
            alt="Flowergrid Logo"
            width={100}
            height={100}
            className="object-contain opacity-80 "
          />
        </div>

        {/* Two Column Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">

          <div className="vision-animate space-y-6">
            <p className="text-[#5B5B5B] text-base md:text-lg leading-relaxed font-light">
              My vision is to inspire leadership that values empathy, awareness, and purpose. I want to see workplaces and communities where wellbeing is part of success, not separate from it.
            </p>
          </div>

          <div className="vision-animate space-y-6">
            <p className="text-[#5B5B5B] text-base md:text-lg leading-relaxed font-light">
              Through Flowergrid and my coaching work, I help people lead with confidence, clarity and compassion. True leadership begins from within, and my goal is to help more people discover that strength.
            </p>
          </div>

        </div>
        {/* Button */}
        <div className="vision-animate flex justify-center">
          <button className="px-10 py-4 bg-primary text-white rounded-full font-medium text-base md:text-lg hover:bg-primary/90 transition-colors">
            Discover The Flowergrid Philosophy
          </button>
        </div>

      </div>
    </section>
  );
}
