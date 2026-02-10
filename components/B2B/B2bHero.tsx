"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function B2bHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        buttonGroupRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src={`/b2b/hero.jpg`}
          alt="Wellness session"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>


      <div className="relative z-10 h-full max-w-[90vw] mx-auto flex flex-col justify-center">
        <div className="max-w-220">
          <h1
            ref={headingRef}
            className="text-white! text-4xl md:text-6xl lg:text-[50px] font-heading font-normal leading-tight mb-6"
          >
            Transform Your Organisation with Corporate Wellbeing programs & Leadership Coaching.
          </h1>
          <p
            ref={textRef}
            className="text-white/90! text-[14px] md:text-lg font-light! leading-snug tracking-wide mb-10 max-w-2xl"
          >
            Flowergrid helps businesses, universities, and institutions build resilient, emotionally intelligent teams through tailored coaching and evidence-based corporate wellbeing programs.

          </p>


          <div ref={buttonGroupRef} className="flex flex-col gap-4">
            <button className="bg-[#C19A6B] hover:bg-[#A8865A] text-white font-medium text-lg py-4 px-8  max-w-full md:max-w-[20rem] rounded-full transition-colors duration-300">
              Book a Discovery Session
            </button>
            <button className="border text-white hover:bg-[#C19A6B]/10 font-medium text-md md:text-lg py-4 px-8 max-w-full md:max-w-120 rounded-full transition-colors duration-300">
              Download program Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}