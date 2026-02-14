"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Step {
  id: number;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const steps: Step[] = [
  {
    id: 1,
    title: "Initial Assessment & Consultation",
    description: "Explore your goals, challenges, and personal needs with our experts. Your programme is designed specifically around you.",
    position: "left"
  },
  {
    id: 2,
    title: "Expert-Led Personalised Sessions",
    description: "One-on-one or group sessions with our panel deliver practical strategies and deep guidance for real transformation.",
    position: "right"
  },
  {
    id: 3,
    title: "Access to Resources & Tools",
    description: "Exercises, guides, and digital tools reinforce learning and keep your progress on track between sessions.",
    position: "left"
  },
  {
    id: 4,
    title: "Regular Check-Ins & Progress Tracking",
    description: "Monitor improvements through assessments and biomarkers, with adjustments made to keep your journey moving forward.",
    position: "right"
  },
  {
    id: 5,
    title: "Ongoing Support for Sustainable Transformation",
    description: "Continued guidance ensures new habits, skills, and energy alignment last well beyond the programme.",
    position: "left"
  }
];

export default function CurvedPathAnimation() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileBeamRef = useRef<HTMLDivElement>(null);
  const mobileDotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileStepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    // Desktop curved path animation
    if (pathRef.current && !isMobile) {
      const pathLength = pathRef.current.getTotalLength();

      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        }
      });

      stepsRef.current.forEach((step, index) => {
        if (step) {
          const dot = dotsRef.current[index];
          const content = step.querySelector('.step-content');

          if (dot) {
            gsap.fromTo(dot,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                  trigger: step,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 0.5,
                }
              }
            );
          }

          if (content) {
            gsap.fromTo(content,
              { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
              {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: step,
                  start: "top 75%",
                  end: "top 45%",
                  scrub: 0.5,
                }
              }
            );
          }
        }
      });
    }

    // Mobile/Tablet animations
    if (isMobile && containerRef.current) {
      // Animate the vertical beam
      if (mobileBeamRef.current) {
        gsap.fromTo(
          mobileBeamRef.current,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.5,
            },
          }
        );
      }

      // Animate each step
      mobileStepsRef.current.forEach((stepElement, index) => {
        if (!stepElement) return;

        const dot = mobileDotsRef.current[index];
        const content = stepElement.querySelector('.mobile-content');

        // Animate dot scale and color
        if (dot) {
          gsap.fromTo(
            dot,
            {
              scale: 0.8,
              backgroundColor: "#F3E5CB",
              borderColor: "#9C7D4D",
            },
            {
              scale: 1.3,
              backgroundColor: "#9C7D4D",
              borderColor: "#F3E5CB",
              scrollTrigger: {
                trigger: stepElement,
                start: "top 70%",
                end: "top 30%",
                scrub: 0.5,
              },
            }
          );
        }

        // Animate content fade and slide
        if (content) {
          gsap.fromTo(
            content,
            {
              opacity: 0,
              x: 30
            },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: stepElement,
                start: "top 75%",
                end: "top 40%",
                scrub: 0.5,
              },
            }
          );
        }
      });
    }
  }, { scope: containerRef, dependencies: [isMounted] });

  return (
    <div
      ref={containerRef}
      className="relative py-16 px-4 md:px-8 lg:px-16 bg-background overflow-hidden"
    >
      {/* Decorative Leaves (Desktop) */}
      <div className="hidden lg:block">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}programme/left-leaf.png`}
          alt="leaf"
          className="absolute top-[23%] left-0 w-44"
          width={100}
          height={100}
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}programme/right-leaf2.png`}
          alt="leaf"
          className="absolute bottom-[10%] right-0 opacity-80 w-44"
          width={100}
          height={100}
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}programme/right-leaf.png`}
          alt="leaf"
          className="absolute top-[45%] right-0 w-38 rotate-45"
          width={100}
          height={100}
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}programme/left-leaf2.png`}
          alt="leaf"
          className="absolute top-[60%] left-1 w-38 opacity-60 "
          width={100}
          height={100}
        />
      </div>

      {/* Desktop Curved Path View */}
      <div className="hidden lg:block">
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1200 2000"
        >
          <path
            ref={pathRef}
            d="M 300 40 L 650 40 Q 800 40 800 140 Q 800 270 800 400 L 800 430 Q 800 550 650 550 L 300 550 Q 200 550 200 650 Q 200 750 300 750 L 650 750 Q 750 750 750 850 Q 750 950 750 1050 L 750 1100 Q 750 1200 650 1200 L 300 1200 Q 200 1200 200 1300 Q 200 1400 300 1400"
            stroke="#9C7D4D"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle ref={(el) => { dotsRef.current[0] = el; }} cx="300" cy="40" r="12" fill="#9C7D4D" stroke="#F3E5CB" strokeWidth="4" />
          <circle ref={(el) => { dotsRef.current[1] = el; }} cx="800" cy="430" r="12" fill="#9C7D4D" stroke="#F3E5CB" strokeWidth="4" />
          <circle ref={(el) => { dotsRef.current[2] = el; }} cx="200" cy="650" r="12" fill="#9C7D4D" stroke="#F3E5CB" strokeWidth="4" />
          <circle ref={(el) => { dotsRef.current[3] = el; }} cx="750" cy="1100" r="12" fill="#9C7D4D" stroke="#F3E5CB" strokeWidth="4" />
          <circle ref={(el) => { dotsRef.current[4] = el; }} cx="300" cy="1400" r="12" fill="#9C7D4D" stroke="#F3E5CB" strokeWidth="4" />
        </svg>

        <div className="relative mx-auto" style={{ maxWidth: '1400px', minHeight: '1800px' }}>
          {steps.map((step, index) => {
            const positions = [
              { left: '5%', top: '0px', mt: 'md:mt-20 sm:mt-12 lg:py-10' },
              { right: '5%', top: '360px', align: 'items-end text-right', mt: 'md:mt-20 lg:ml-4' },
              { left: '2%', top: '700px', mt: 'md:mt-12' },
              { right: '5%', top: '1030px', align: 'text-right', mt: 'md:mt-6 lg:ml-6' },
              { left: '5%', top: '1370px', mt: 'md:mt-[-8rem] lg:mt-4' }
            ];
            const pos = positions[index];
            return (
              <div
                key={step.id}
                ref={(el) => { stepsRef.current[index] = el; }}
                className="absolute"
                style={{
                  left: pos.left,
                  right: pos.right,
                  top: pos.top,
                  width: 'min(320px, 35vw)',
                  willChange: "opacity, transform"
                }}
              >
                <div className={`step-content ${pos.mt || ''} ${pos.align || ''}`}>
                  <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-text-heading mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-base lg:text-lg text-text-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet Vertical View */}
      <div className="lg:hidden relative max-w-3xl mx-auto">
        {/* Vertical line with beam - centered at 20px from left */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#9C7D4D]/20"
          style={{ left: '20px' }}
        >
          <div
            ref={mobileBeamRef}
            className="w-full h-full bg-[#9C7D4D] shadow-[0_0_15px_#9C7D4D] origin-top"
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => { mobileStepsRef.current[index] = el; }}
            className="relative flex items-start py-10 sm:py-12"
          >
            {/* Dot - positioned exactly on the line */}
            <div
              className="absolute shrink-0"
              style={{
                left: '20px',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div
                ref={(el) => { mobileDotsRef.current[index] = el; }}
                className="w-4 h-4 sm:w-5 sm:h-5 bg-[#F3E5CB] rounded-full border-2 sm:border-[3px] border-[#9C7D4D]"
              />
            </div>

            {/* Content - starts after the dot with proper spacing */}
            <div
              className="mobile-content w-full"
              style={{ paddingLeft: '48px' }}
            >
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-text-heading mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-text-body leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}