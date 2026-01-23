'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollingTextRevealProps {
  phrases: string[];
}

export default function ScrollingTextReveal({ phrases }: ScrollingTextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Get all the individual text phrases (spans) inside the container
    const textElements = containerRef.current?.children;

    if (!textElements || textElements.length === 0) return;

    // 4. The Animation Definition
    gsap.fromTo(textElements,
      {
        // Initial State (Before scrolling into view)
        y: 50,       // Pushed down by 50px
        opacity: 0,  // Completely invisible
      },
      {
        // Final State (After scrolling into view)
        y: 0,        // Back to its original position
        opacity: 1,  // Fully visible
        duration: 1, // Animation takes 1 second
        ease: "power3.out", // A smooth, natural-feeling easing

        // 5. The Stagger Effect
        stagger: 0.4, // Wait 0.3s between each phrase starting its animation
        delay: 0.5,

        // 6. The ScrollTrigger Configuration
        scrollTrigger: {
          trigger: containerRef.current, // Watch this container
          start: "top 80%", // Start when the top of the container is at 80% of the viewport height
          end: "bottom 20%", // (Optional) Where the animation "ends" its active zone
          toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
          // markers: true, // Uncomment this line to see debug markers on your screen!
        }
      }
    );
  }, { scope: containerRef }); // Scope ensures selectors only find elements inside this component

  return (
    <h1
      ref={containerRef}
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-full font-heading 
      p-10 max-w-3xl flex flex-wrap gap-x-[0.3em]
      leading-tight tracking-wide"  
    >
      {phrases.map((phrase, index) => (
        <span key={index} className="inline-block">
          {phrase}
          {index !== phrases.length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
}