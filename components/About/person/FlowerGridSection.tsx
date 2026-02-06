'use client';

import Image from 'next/image';
import FlowerSVG from './FlowerSVG';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import FlowerSvg2 from './FlowerSvg2';
import BlurTextReveal from '../../ui/BlurTextReveal';

interface FlowerGridSectionProps {
    text: string;
}

export default function FlowerGridSection({ text }: FlowerGridSectionProps) {
    const svgRef = useRef<HTMLDivElement>(null);

      const pathname = usePathname();
      const slug = pathname.split('/').pop();
      const isPerson2 = slug === 'person2';

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!svgRef.current) return;

        const allPaths = Array.from(svgRef.current.querySelectorAll<SVGPathElement>('path.draw-path')).filter(p => p instanceof SVGPathElement);
        if (allPaths.length === 0) return;

        // Prefer an explicit main path marker, fallback to the first path
        const mainPath = svgRef.current.querySelector<SVGPathElement>('path.draw-path.main-path') ?? allPaths[0];
        const detailPaths = allPaths.filter(p => p !== mainPath);

        allPaths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            path.style.opacity = '1';
        });

        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: svgRef.current,
                start: "top 65%", 
                end: "bottom center",
                scrub: 1, 
            }
        });

        masterTl.to(mainPath, {
            strokeDashoffset: 0,
            duration: 10,
            ease: "power4.in" 
        });
        masterTl.to(detailPaths, {
            strokeDashoffset: 0,
            duration: 2.5, 
            ease: "expo.out",
            stagger: {
                amount: 0.2,
                from: "random" 
            }
        }, "-=0.6");

        return () => {
            masterTl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <BlurTextReveal text={text} />
                </div>

                <div className="order-1 lg:order-2 h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center p-4 md:p-10 lg:px-20">
                    <div ref={svgRef} className="relative w-full h-full">
                        {isPerson2 ? <FlowerSvg2 /> : <FlowerSVG />}
                    </div>
                </div>
            </div>
        </section>
    );
}