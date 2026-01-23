'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function FlowerAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    // Master Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 75%",
        end: "bottom 75%",
        toggleActions: "play none none reverse",
      }
    });

    // 1. SETUP: Hide all paths initially using the stroke-dash trick
    const paths = svgRef.current?.querySelectorAll('path');
    paths?.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length,
        visibility: "visible",
        opacity: 1
      });
    });

    // 2. ANIMATION SEQUENCE
    // Matches the visual flow of your 4.png reference
    
    // A. The Stem (Bottom to Top)
    tl.to('.stem', {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
    })
    
    // B. The Leaf (Attached to the right side)
    .to('.leaf', {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power1.out",
    }, "-=1.2") // Start drawing leaf before stem finishes
    
    // C. The Flower Head (Complex petals)
    .to('.flower', {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "circ.out",
      stagger: 0.2 // Draw the outlines first, then details
    }, "-=0.8");

  }, { scope: svgRef });

  return (
    <div className="relative w-full h-full flex items-end justify-center pointer-events-none">
      {/* ViewBox 0 0 300 700 is tuned to the tall, slender aspect ratio of your image (4.png).
         The paths below are manually traced to match that specific poppy shape.
      */}
      <svg 
        ref={svgRef}
        viewBox="0 0 300 700" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[85vh] drop-shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* Common Style for all lines to match the reference look */}
        <g stroke="#4A5D4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

          {/* 1. THE STEM 
             Matches the S-curve: Starts bottom right, curves left, then up to the center.
          */}
          <path 
            className="stem" 
            d="M180,700 C170,600 140,450 150,300 C152,280 155,250 155,230" 
          />

          {/* 2. THE LEAF 
             Located on the right side.
             Shape: Curves out from stem, forms a pointed tip, loops back.
          */}
          <path 
            className="leaf" 
            d="M152,420 Q220,380 240,320 C250,290 230,280 220,310 C200,360 170,390 152,420" 
          />

          {/* 3. THE FLOWER HEAD 
             Composed of 3 distinct overlapping curves to create the "bowl" shape.
          */}
          
          {/* Outer Bowl (Left to Right) */}
          <path 
            className="flower" 
            d="M90,160 C70,200 130,250 155,230 C180,250 250,200 230,150" 
          />
          
          {/* Top Edge / Back Petals (Wavy line connecting top) */}
          <path 
            className="flower" 
            d="M90,160 C90,120 130,100 160,110 C190,100 230,120 230,150" 
          />
          
          {/* Inner Petal Fold (The distinctive line inside the bloom) */}
          <path 
            className="flower" 
            d="M120,130 C140,180 200,180 210,140" 
          />

        </g>
      </svg>
    </div>
  );
}