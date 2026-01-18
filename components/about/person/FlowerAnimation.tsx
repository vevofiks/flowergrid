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
        start: "top 75%", // Start animation when top of flower hits 75% of viewport
        end: "bottom 75%",
        toggleActions: "play none none reverse",
      }
    });

    // 1. SETUP: Hide all paths initially
    const paths = svgRef.current?.querySelectorAll('path');
    paths?.forEach((path) => {
      const length = path.getTotalLength();
      // The "Stroke Dash" trick: make a dash as long as the line, then hide it
      gsap.set(path, { 
        strokeDasharray: length, 
        strokeDashoffset: length,
        visibility: "visible"
      });
    });

    // 2. ANIMATION: "Thread Awakening" Sequence
    
    // Step A: Grow the Stems (Bottom -> Up)
    tl.to('.stem', {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.2, // Draw them slightly apart
    })
    
    // Step B: Unfurl the Leaves (Center -> Out)
    .to('.leaf', {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power1.out",
      stagger: 0.1
    }, "-=1.0") // Start while stems are still finishing
    
    // Step C: Bloom the Flowers (Center -> Out)
    .to('.flower', {
      strokeDashoffset: 0,
      duration: 2.5, // Flowers take longer to draw complex details
      ease: "circ.out",
      stagger: 0.1
    }, "-=0.5");

  }, { scope: svgRef });

  return (
    <div className="relative w-full h-full flex items-end justify-center pointer-events-none">
      <svg 
        ref={svgRef}
        viewBox="0 0 500 700" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        // 'vector-effect' ensures lines stay thin and crisp even if scaled up to 4K
        className="w-full h-auto max-h-[85vh] drop-shadow-sm"
        style={{ overflow: 'visible' }}
      >
        {/* --- GROUP 1: STEMS --- */}
        <g className="stroke-[#1a4122] stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round">
            {/* Tall Right Stem */}
            <path className="stem" d="M250,700 C250,600 280,450 320,300 C340,220 350,180 360,150" />
            {/* Middle Stem */}
            <path className="stem" d="M250,700 C240,550 200,400 180,250 C170,180 180,120 190,100" />
            {/* Small Lower Left Stem */}
            <path className="stem" d="M250,700 C230,600 150,500 120,450" />
        </g>

        {/* --- GROUP 2: LEAVES --- */}
        <g className="stroke-[#1a4122] stroke-[1] fill-none" strokeLinecap="round" strokeLinejoin="round">
             {/* Right Stem Leaves */}
             <path className="leaf" d="M300,400 Q350,380 380,350" />
             <path className="leaf" d="M310,350 Q260,340 250,300" />
             
             {/* Middle Stem Leaves */}
             <path className="leaf" d="M200,350 Q150,320 120,300" />
             <path className="leaf" d="M190,280 Q230,260 240,220" />

             {/* Base Leaves */}
             <path className="leaf" d="M250,650 Q300,620 320,580" />
             <path className="leaf" d="M250,650 Q200,620 180,580" />
        </g>

        {/* --- GROUP 3: FLOWERS (Detailed Poppy/Anemone Shapes) --- */}
        <g className="stroke-[#1a4122] stroke-[1.2] fill-none" strokeLinecap="round" strokeLinejoin="round">
            {/* Right Flower (Open Side View) */}
            <path className="flower" d="M360,150 C330,140 320,100 350,80 C380,60 420,70 430,100 C440,130 400,160 360,150" />
            <path className="flower" d="M360,150 C370,130 390,120 410,130" /> {/* Inner detail */}
            
            {/* Middle Flower (Facing Forward) */}
            <path className="flower" d="M190,100 C150,80 140,40 180,20 C220,0 260,20 250,60 C240,90 220,110 190,100" />
            <path className="flower" d="M190,60 C200,50 220,50 230,60" /> {/* Center detail */}
            
            {/* Left Bud */}
            <path className="flower" d="M120,450 C100,430 90,460 110,480 C130,500 140,470 120,450" />
        </g>
      </svg>
    </div>
  );
}