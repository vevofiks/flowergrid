"use client";

import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });


        tl.from(imageWrapperRef.current, {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });


        tl.from([titleRef.current, textRef.current, btnRef.current], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=1.2");

    }, { scope: containerRef });

    return (
      <section
  ref={containerRef}
  className="relative w-full bg-[#F3EAD8] py-6 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* TEXT COLUMN */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

      <h1
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-xl"
      >
        The Vision Behind <br className="hidden md:block" />
        Flowergrid
      </h1>

      <p
        ref={textRef}
        className="text-[#4A4A4A] text-sm sm:text-base md:text-lg leading-relaxed max-w-md md:max-w-lg mb-8"
      >
        Flowergrid exists to guide individuals and organisations towards holistic wellbeing through mind, body, and spirit integration. We provide personalised programs that foster growth, resilience, and conscious living.
      </p>

      {/* <Link href="/vision">
        <button
          ref={btnRef}
          className="bg-primary text-white text-xs md:text-sm uppercase tracking-wider font-medium rounded-full px-8 py-3 md:px-10 md:py-4 hover:bg-[#8F7A52] transition-colors duration-300 shadow-md"
        >
          Discover Our Vision
        </button>
      </Link> */}

    </div>

    {/* IMAGE COLUMN */}
    <div
      ref={imageWrapperRef}
      className="relative w-full flex justify-center md:justify-end order-1 md:order-2"
    >
      <div className="relative w-[80%] sm:w-[70%] md:w-[90%] lg:w-full max-w-lg aspect-square md:aspect-[4/5]">

        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}home/H vision flower.png`}
          alt="Vision Flower"
          fill
          className="object-contain md:object-right"
          priority
        />

      </div>
    </div>

  </div>
</section>

    )
}

export default Vision