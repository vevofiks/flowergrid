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

    // Animate Text (Left)
    tl.from('.vision-text', {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Animate Image (Right)
    tl.from('.vision-image', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#F3E5CB] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="flex flex-col gap-8">
            <h2 className="vision-text text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-[#171717] leading-tight">
              A Vision for Conscious Leadership
            </h2>

            <div className="flex flex-col gap-6 text-lg lg:text-2xl leading-relaxed text-[#5B5B5B] font-light">
              <p className="vision-text">
                My vision is to inspire leadership that values empathy, awareness and purpose. I want to see workplaces and communities where wellbeing is part of success, not separate from it.
              </p>
              <p className="vision-text">
                Through Flower Grid and my coaching work, I help people lead with confidence, clarity and compassion. True leadership begins from within, and my goal is to help more people discover that strength.
              </p>
            </div>
          </div>

          <div className="vision-image relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMGURL}about/person2/vision.jpg`}
              alt="A Vision for Conscious Leadership"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}