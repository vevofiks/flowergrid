'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PersonBioProps {
  imageSrc: string;
  bio: string[];
  title: string;
}

export default function PersonBio({
  imageSrc,
  bio,
  title
}: PersonBioProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
      }
    });
    tl.fromTo('.bio-card',
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    )
      .fromTo('.bio-image',
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }, "<0.2")
      .fromTo('.bio-text',
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8
        }, "-=0.5");

    tl.fromTo('.bio-heading', {
      y: 20,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out"
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative w-full">

        <div className="relative w-full">

          <div className="bio-heading hidden md:flex md:justify-center mb-6 lg:mb-8 lg:ml-[36%]">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading text-heading font-medium">
              {title}
            </h2>
          </div>

          <div className="bio-heading flex justify-center md:hidden mb-8">
            <h2 className="text-4xl font-heading text-heading text-center">{title}</h2>
          </div>

          <div className="bio-card relative w-full bg-[#543A2C] rounded-[2.5rem] shadow-lg overflow-visible p-8 md:p-0">

            <div className="relative w-full flex flex-col md:flex-row md:items-end md:min-h-[500px] lg:min-h-[600px] lg:py-10">
              <div
                className="
                  bio-image
                  relative z-0
                  w-full max-w-sm mx-auto
                  mb-8
                  md:absolute md:left-0 md:bottom-0
                  md:mx-0 md:max-w-none
                  md:w-[45%] lg:w-[55%] xl:w-[55%]
                  md:mb-0
                  mr-18
                  md:-ml-8 lg:-mr-10 xl:-ml-10
                "
              >
                <Image
                  src={imageSrc}
                  alt="Profile"
                  width={800}
                  height={1000}
                  className="
                    w-full h-auto
                    object-contain
                    drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]
                  "
                  priority={false}
                />
              </div>

              <div className="relative z-10 w-full md:w-[55%] md:ml-auto">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 md:p-12 lg:p-16 xl:p-20">
                  {bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="bio-text text-lg md:text-xl lg:text-xl xl:text-xl font-normal leading-relaxed text-body !text-white"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}