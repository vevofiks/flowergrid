'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PracticesSection from './PracticesSection';

gsap.registerPlugin(ScrollTrigger);

const practices = [
  {
    "id": "mind",
    "title": "Mind",
    "image": `${process.env.NEXT_PUBLIC_IMGURL}home/mind.jpg`
  },
  {
    "id": "body",
    "title": "Body",
    "image": `${process.env.NEXT_PUBLIC_IMGURL}home/body.jpg`
  },
  {
    "id": "spirit",
    "title": "Spirit",
    "image": `${process.env.NEXT_PUBLIC_IMGURL}home/spirit.jpg`
  }
];



export default function TransformationService() {
  const containerRef = useRef<HTMLDivElement>(null);

  const leftTextRef = useRef<HTMLSpanElement>(null);
  const oLetterRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);

  const pillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const womanRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const stretchWidth = isMobile ? 120 : 180;
      const pushDist = isMobile ? 40 : 90;
      const womanPush = isMobile ? 150 : 400;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000%",
          scrub: 1,
          pin: true,
        },
      });

      const positionPill = () => {
        if (!oLetterRef.current || !containerRef.current || !pillRef.current) return;
        const oRect = oLetterRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const oLeft = oRect.left - containerRect.left;
        const oTop = oRect.top - containerRect.top;

        gsap.set(pillRef.current, {
          left: oLeft + oRect.width / 2,
          top: oTop + oRect.height / 2,
          xPercent: -50,
          yPercent: -33,
          width: oRect.width * 0.9,
          height: oRect.height * 0.45,
          borderRadius: '50%',
          opacity: 0,
        });
      };

      positionPill();
      window.addEventListener("resize", positionPill);

      tl.set([textRef.current, womanRef.current, leafRef.current], { opacity: 1 });

      tl.to(oLetterRef.current, { opacity: 0, duration: 0.1 }, 0.5);
      tl.to(pillRef.current, { opacity: 1, duration: 0.1 }, 0.5);

      tl.to(pillRef.current, {
        x: isMobile ? 60 : 0,
        width: stretchWidth,
        height: '50px',
        borderRadius: '100px',
        borderWidth: '0px',
        duration: 1.5,
        ease: "power2.inOut"
      }, 1);

      tl.to(leftTextRef.current, {
        x: isMobile ? 0 : -pushDist,
        duration: 1.5,
        ease: "power2.inOut"
      }, 1);
      tl.to(rightTextRef.current, {
        x: isMobile ? 100 : pushDist,
        opacity: isMobile ? 0 : 1,
        duration: 1.5,
        ease: "power2.inOut"
      }, 1);
      tl.to(womanRef.current, { x: womanPush, opacity: 0.5, duration: 1.5, ease: "power2.inOut" }, 1);

      // Expand pill to full width/height
      tl.to(pillRef.current, {
        left: '50%',
        top: '50%',
        x: 0,
        xPercent: -50,
        yPercent: -50,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        borderWidth: '0px',
        duration: 2,
        ease: "power2.inOut",
      }, 3);

      tl.to(textRef.current, {
        opacity: 0,
        duration: 1,
        pointerEvents: "none"
      }, 3.2);

      tl.to(womanRef.current, {
        opacity: 0,
        duration: 0.5,
      }, 3.5);

      tl.to(leafRef.current, {
        opacity: 0,
        duration: 0.5,
      }, 3.5);

      // Show practices section
      tl.to(".practices-wrapper", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 1,
        ease: "power2.inOut"
      }, 4.5);

      return () => {
        window.removeEventListener("resize", positionPill);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-[#F3EAD8]"
        style={{
          backgroundImage: `url('/home/service-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div ref={leafRef} className="absolute top-10 -left-1 md:top-8 md:-left-2 z-10">
          <Image
            src={`/home/service-leaf.png`}
            alt="Leaf"
            width={80}
            height={80}
            className="w-20 h-20 md:w-40 md:h-35 opacity-60"
          />
        </div>

        <div className="relative w-full h-full flex items-center justify-center py-20">

          <div
            ref={textRef}
            className="absolute left-4 md:left-8 lg:left-25 top-1/2 md:top-[450px] -translate-y-1/2 z-30 md:z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[8rem] font-extrabold tracking-wide leading-tight text-[#535D4E]! font-heading whitespace-nowrap">
              <span className="block mb-2">Where</span>
              <span className="mb-2 flex items-center">
                <span ref={leftTextRef} className="inline-block relative">Transf</span>
                <span ref={oLetterRef} className="inline-block opacity-100">o</span>
                <span ref={rightTextRef} className="inline-block relative">rmation</span>
              </span>
              <span className="block">Begins</span>
            </h2>
          </div>

          <div
            ref={womanRef}
            className="absolute bottom-50 -right-9 md:right-10 lg:right-20 md:-bottom-40 -translate-y-1/2 z-10"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMGURL}home/women-line-art.png`}
              alt="Woman"
              width={400}
              height={400}
              className="w-[300px] h-[300px] md:w-64 md:h-80 lg:w-[450px] lg:h-[450px] object-contain opacity-80"
            />
          </div>

          <div
            ref={pillRef}
            className="absolute overflow-hidden bg-[#F3EAD8] border-5 md:border-19 border-[#535D4E] z-20 flex items-center justify-center"
            style={{ opacity: 0 }}
          >
          </div>

          <div className="practices-wrapper absolute inset-0 z-30 flex items-center justify-center opacity-0 pointer-events-none mx-auto my-auto">
            <PracticesSection practices={practices} />
          </div>
        </div>
      </div>
    </>
  );
}