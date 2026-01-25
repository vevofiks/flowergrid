"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    description: "Explore your goals, challenges, and personal needs with our experts. Your program is designed specifically around you.",
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
    description: "Continued guidance ensures new habits, skills, and energy alignment last well beyond the program.",
    position: "left"
  }
];

export default function CurvedPathAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
    
      if (pathRef.current) {
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
            scrub: 1,
          }
        });
      }

      
      stepsRef.current.forEach((step, index) => {
        if (step) {
          const dot = dotsRef.current[index];
          const content = step.querySelector('.step-content');

          if (dot) {
            gsap.fromTo(dot,
              {
                scale: 0,
                opacity: 0
              },
              {
                scale: 1,
                opacity: 1,
                scrollTrigger: {
                  trigger: step,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 1,
                }
              }
            );
          }

          gsap.fromTo(content,
            {
              opacity: 0,
              x: index % 2 === 0 ? -30 : 30
            },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: step,
                start: "top 75%",
                end: "top 45%",
                scrub: 1,
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-16 px-4 md:px-8 lg:px-16 bg-background overflow-hidden"
    >

      <div className="hidden lg:block">
        <Image
          src="/Programme/left-leaf.png"
          alt="leaf"
          className="absolute top-[23%] left-0 w-44"
          width={100}
          height={100}
        />
        <Image
          src="/Programme/right-leaf2.png"
          alt="leaf"
          className="absolute bottom-[10%] right-0 opacity-80 w-44"
          width={100}
          height={100}
        />
        <Image
          src="/Programme/right-leaf.png"
          alt="leaf"
          className="absolute top-[45%] right-0 w-38 rotate-45"
          width={100}
          height={100}
        />
        <Image
          src="/Programme/left-leaf2.png"
          alt="leaf"
          className="absolute top-[60%] left-1 w-38 opacity-60 "
          width={100}
          height={100}
        />
      </div>

      <div className="hidden md:block">

        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1200 2000"
        >
        
          <path
            ref={pathRef}
            d="M 300 40
               L 650 40
               Q 800 40 800 140
               Q 800 270 800 400
               L 800 430
               Q 800 550 650 550
               L 300 550
               Q 200 550 200 650
               Q 200 750 300 750
               L 650 750
               Q 750 750 750 850
               Q 750 950 750 1050
               L 750 1100
               Q 750 1200 650 1200
               L 300 1200
               Q 200 1200 200 1300
               Q 200 1400 300 1400"
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
          <div
            ref={(el) => { stepsRef.current[0] = el; }}
            className="absolute"
            style={{
              left: '5%',
              top: '0px',
              width: '320px'
            }}
          >
            <div className="step-content md:mt-18">
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-text-heading mb-4 leading-tight">
                {steps[0].title}
              </h3>
              <p className="text-base lg:text-lg text-text-body leading-relaxed">
                {steps[0].description}
              </p>
            </div>
          </div>


          <div
            ref={(el) => { stepsRef.current[1] = el; }}
            className="absolute"
            style={{
              right: '5%',
              top: '360px',
              width: '320px'
            }}
          >
            <div className="step-content flex flex-col md:items-start lg:items-end md:text-right md:ml-12 lg:text-right">
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-text-heading mb-4 leading-tight">
                {steps[1].title}
              </h3>
              <p className="text-base lg:text-lg text-text-body leading-relaxed">
                {steps[1].description}
              </p>
            </div>
          </div>


          <div
            ref={(el) => { stepsRef.current[2] = el; }}
            className="absolute"
            style={{
              left: '2%',
              top: '700px',
              width: '320px'
            }}
          >
            <div className="step-content md:mt-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-text-heading mb-4 leading-tight">
                {steps[2].title}
              </h3>
              <p className="text-base lg:text-lg text-text-body leading-relaxed">
                {steps[2].description}
              </p>
            </div>
          </div>

          <div
            ref={(el) => { stepsRef.current[3] = el; }}
            className="absolute"
            style={{
              right: '5%',
              top: '1030px',
              width: '320px'
            }}
          >
            <div className="step-content text-right">
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-text-heading mb-4 leading-tight">
                {steps[3].title}
              </h3>
              <p className="text-base lg:text-lg text-text-body leading-relaxed">
                {steps[3].description}
              </p>
            </div>
          </div>

          <div
            ref={(el) => { stepsRef.current[4] = el; }}
            className="absolute"
            style={{
              left: '5%',
              top: '1370px',
              width: '320px'
            }}
          >
            <div className="step-content md:mt-[-8rem] lg:mt-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-text-heading mb-4 leading-tight">
                {steps[4].title}
              </h3>
              <p className="text-base lg:text-lg text-text-body leading-relaxed">
                {steps[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden relative max-w-xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-30" />
        {steps.map((step, index) => (
          <div key={step.id} className="relative pl-12 mb-16">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[5px]" />
            <h3 className="text-xl font-heading font-semibold text-text-heading mb-3 leading-tight">
              {step.title}
            </h3>
            <p className="text-sm text-text-body leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}