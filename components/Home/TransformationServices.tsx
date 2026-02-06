'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
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

const services = [
  {
    id: 1,
    title: "Life & Transformation Coaching",
    desc: "Unlock your potential with personalized life and transformation coaching for emotional wellbeing. Our approach blends practical mindset tools with self-reflection and accountability to help you navigate change, build confidence, and create meaningful direction in your life.",
    img: `${process.env.NEXT_PUBLIC_IMGURL}home/t1.png`,
    btnText: "Explore Coaching",
    btnLink: "/services"
  },
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
      tl.to(".pill-preview-image", { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 1.5);


      tl.to(pillRef.current, {
        left: '50%',
        top: isMobile ? '35%' : '30%',
        x: 0,
        xPercent: -50,
        yPercent: -50,
        width: isMobile ? "90vw" : "550px",
        height: isMobile ? "160px" : "200px",
        borderRadius: "200px",
        duration: 2,
        ease: "power2.inOut",
      }, 3);

      tl.to(textRef.current, {
        opacity: 0,
        duration: 1,
        pointerEvents: "none"
      }, 3.2);

      tl.to(".pill-preview-image", { autoAlpha: 0, duration: 0.5 }, 4.5);
      tl.to(".service-image-0", { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 4.8);
      tl.to(".service-content-0", { autoAlpha: 1, y: 0, duration: 1.2, ease: "power2.out" }, 5);

      services.slice(1).forEach((_, index) => {
        const i = index + 1;
        const baseTime = 7 + (i - 1) * 3;

        tl.to(`.service-image-${i - 1}`, { autoAlpha: 0, scale: 0.95, duration: 1 }, baseTime);
        tl.to(`.service-content-${i - 1}`, { autoAlpha: 0, y: -20, duration: 0.8 }, baseTime);

        // Using .to instead of .fromTo for better scroll-back behavior
        tl.to(`.service-image-${i}`, { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power2.out" }, baseTime + 0.5);
        tl.to(`.service-content-${i}`, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power2.out" }, baseTime + 0.8);
      });

      // Animate PracticesSection after the last service
      const lastServiceTime = services.length > 1 ? 7 + (services.length - 2) * 3 + 2 : 7;
      tl.to(`.service-image-${services.length - 1}`, { autoAlpha: 0, scale: 0.95, duration: 1 }, lastServiceTime);
      tl.to(`.service-content-${services.length - 1}`, { autoAlpha: 0, y: -20, duration: 0.8 }, lastServiceTime);
      tl.to(".practices-section-content", {
        autoAlpha: 1,
        y: 0,
        scale: isMobile ? 0.35 : 0.6,
        duration: 1.5,
        ease: "power2.out"
      }, lastServiceTime + 1);

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
        className="relative w-full h-screen overflow-hidden bg-[#F3EAD8] "
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
            className="absolute overflow-hidden bg-transparent border-5 md:border-19 border-[#535D4E] z-20 flex items-center justify-center"
            style={{ opacity: 0 }}
          >
            <div className="pill-preview-image absolute inset-0 opacity-0 scale-90">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMGURL}home/t1.png`}
                alt="Preview"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {services.map((service, idx) => (
              <div
                key={`img-${service.id}`}
                className={`service-image-${idx} absolute inset-0 opacity-0 scale-100`}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            ))}
          </div>

          <div className="absolute w-full max-w-6xl text-center z-30 px-4 md:px-6 top-[51%] md:top-[48%]">
            {services.map((service, idx) => (
              <div
                key={`content-${service.id}`}
                className={`service-content-${idx} absolute top-0 left-0 w-full flex flex-col items-center opacity-0 invisible translate-y-10`}
              >
                <h3 className="text-2xl md:text-5xl text-[#3A4033] mb-3 md:mb-4 font-playfair! font-bold">
                  {service.title}
                </h3>

                <p className="text-sm md:text-xl px-5 md:px-0 leading-relaxed text-[#5C6154] mb-6 md:mb-8 max-w-md md:max-w-3xl mx-auto font-sans font-medium">
                  {service.desc}
                </p>

                <Link href={service.btnLink} className="w-auto md:w-auto px-8 py-3 md:px-10 md:py-4 border border-[#8C9283] rounded-full text-xs md:text-base tracking-widest uppercase bg-transparent hover:bg-primary! hover:border-primary! hover:text-[#F3EAD8]! transition-colors duration-300 font-semibold mb-8">
                  {service.btnText}
                </Link>
              </div>
            ))}

            <div className="practices-section-content absolute top-[-18rem] md:top-[-20rem] left-0 right-0 w-full opacity-0 invisible translate-y-10 scale-95 origin-top">
              <PracticesSection practices={practices} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}