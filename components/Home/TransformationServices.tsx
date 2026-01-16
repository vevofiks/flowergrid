'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Life & Transformation Coaching",
    desc: "Unlock your potential through tailored one-to-one coaching. Our approach blends practical mindset tools with self-reflection and accountability to help you navigate change, build confidence, and create meaningful direction in your life.",
    img: "/Home/H3b.png",
    btnText: "Explore Coaching",
    btnLink: "/coaching"
  },
  {
    id: 2,
    title: "Mental Health & Emotional Wellbeing",
    desc: "Find calm and clarity with professional support for stress, anxiety, and emotional balance. We use evidence-based techniques such as NLP, hypnotherapy, and mindfulness to help you develop resilience and a stronger connection to your inner self.",
    img: "/Home/H3c.png",
    btnText: "Learn About Mental Wellbeing",
    btnLink: "/mental-wellbeing"
  },
  {
    id: 3,
    title: "Physical Health & Aesthetic Wellness",
    desc: "Achieve vitality inside and out through programmes that unite medical expertise with holistic care. From nutritional guidance and body treatments to lifestyle coaching, we help you look and feel your best while supporting long-term health.",
    img: "/Home/H3d.png",
    btnText: "Discover Health Programmes",
    btnLink: "/health-programmes"
  },
  {
    id: 4,
    title: "Workshops & Corporate Programmes",
    desc: "Bring conscious living and wellbeing into your workplace or community. Our interactive workshops cover leadership, communication, stress management, and resilience training to promote healthier teams and more connected environments.",
    img: "/Home/H3e.png",
    btnText: "Learn About Workshops",
    btnLink: "/workshops"
  }
];

export default function TransformationService() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Text Refs
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
          end: "+=700%",
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
        width: stretchWidth,
        height: '50px',
        borderRadius: '100px',
        borderWidth: '0px',
        duration: 1.5,
        ease: "power2.inOut"
      }, 1);

      tl.to(leftTextRef.current, { x: -pushDist, duration: 1.5, ease: "power2.inOut" }, 1);
      tl.to(rightTextRef.current, { x: pushDist, duration: 1.5, ease: "power2.inOut" }, 1);
      tl.to(womanRef.current, { x: womanPush, opacity: 0.5, duration: 1.5, ease: "power2.inOut" }, 1);
      tl.to(".pill-preview-image", { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 1.5);


      tl.to(pillRef.current, {
        left: '50%',
        top: isMobile ? '35%' : '30%',
        xPercent: -50,
        yPercent: -50,
        width: isMobile ? "90vw" : "550px",
        height: isMobile ? "250px" : "320px",
        borderRadius: "160px",
        duration: 2,
        ease: "power2.inOut",
      }, 3);

      tl.to(textRef.current, {
        opacity: 0,
        duration: 1,
        pointerEvents: "none"
      }, 3.2);

      tl.to(".pill-preview-image", { opacity: 0, duration: 0.5 }, 4.5);
      tl.to(".service-image-0", { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 4.8);

      tl.to(".service-content-0", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }, 5);


      services.slice(1).forEach((_, index) => {
        const i = index + 1;
        const baseTime = 7 + (i - 1) * 3;

        tl.to(`.service-image-${i - 1}`, { opacity: 0, scale: 0.95, duration: 1 }, baseTime);
        tl.to(`.service-content-${i - 1}`, { opacity: 0, y: -20, duration: 0.8 }, baseTime);

        tl.fromTo(`.service-image-${i}`,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
          baseTime + 0.5
        );
        tl.fromTo(`.service-content-${i}`,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          baseTime + 0.8
        );
      });

      return () => {
        window.removeEventListener("resize", positionPill);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#F3EAD8]"
      style={{
        backgroundImage: "url('/Home/service-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div ref={leafRef} className="absolute top-10 -left-1 md:top-8 md:-left-2 z-10">
        <Image
          src="/Home/service-leaf.png"
          alt="Leaf"
          width={80}
          height={80}
          className="w-20 h-20 md:w-40 md:h-35 opacity-60"
        />
      </div>

      <div className="relative w-full h-full flex items-center justify-center">

        <div
          ref={textRef}
          className="absolute left-4 md:left-8 lg:left-25 top-1/2 md:top-[450px] -translate-y-1/2 z-10"
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
          className="absolute -bottom-10 right-3 md:right-16 lg:right-29 md:-bottom-40 -translate-y-1/2 z-10"
        >
          <Image
            src="/Home/women-line-art.png"
            alt="Woman"
            width={400}
            height={400}
            className="w-[300px] h-[300px] md:w-64 md:h-80 lg:w-[450px] lg:h-[450px] object-contain opacity-80"
          />
        </div>

        <div
          ref={pillRef}
          className="absolute overflow-hidden bg-transparent border-5 md:border-19 border-[#535D4E] z-20 flex items-center justify-center"
          style={{ opacity: 0 }}
        >
          <div className="pill-preview-image absolute inset-0 opacity-0 scale-90">
            <Image
              src="/Home/H3a.png"
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>

          {services.map((service, idx) => (
            <div
              key={`img-${service.id}`}
              className={`service-image-${idx} absolute inset-0 opacity-0 scale-110`}
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="absolute w-full max-w-6xl text-center z-30 px-4 md:px-6 top-[53%] md:top-[55%]">
          {services.map((service, idx) => (
            <div
              key={`content-${service.id}`}
              className={`service-content-${idx} absolute top-0 left-0 w-full flex flex-col items-center opacity-0 translate-y-10`}
            >
              <h3 className="text-2xl md:text-5xl text-[#3A4033] mb-3 md:mb-6 font-playfair! font-bold">
                {service.title}
              </h3>

              <p className="text-sm md:text-xl leading-relaxed text-[#5C6154] mb-6 md:mb-10 max-w-md md:max-w-3xl mx-auto font-sans font-medium">
                {service.desc}
              </p>

              <Link href={service.btnLink} className="px-8 py-3 md:px-10 md:py-4 border border-[#8C9283] rounded-full text-xs md:text-base tracking-widest uppercase hover:bg-primary hover:text-[#F3EAD8] transition-colors duration-300 font-semibold">
                {service.btnText}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}