'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

type JourneyItem =
    | { type: 'card'; number: string; title: string; description: string }
    | { type: 'flower'; image: string; alt: string };

interface JourneySectionProps {
    title: string;
    description: string;
    items: JourneyItem[];
}
export default function JourneySection({ title, description, items }: JourneySectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isPerson2 = pathname === '/about/person2';


    useGSAP(() => {
        gsap.fromTo('.journey-item',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section className="py-24"> 
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading text-[#171717] mb-4">
                        {title}
                    </h2>
                    <p className="text-[#5B5B5B] max-w-2xl mx-auto font-light">
                        {description}
                    </p>
                </div>

        
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {items.map((item, index) => (
                        <div key={index} className="journey-item flex justify-center items-center w-full h-full">

                            {item.type === 'card' ? (
                                <div className="w-full max-w-[280px] aspect-[3/4] border-2 border-[#C4A484] rounded-2xl p-3 flex flex-col">
                                    <div className="w-full h-full !bg-[#E5CCA1] rounded-xl flex flex-col items-center justify-center p-6 text-center shadow-sm">

                                        <span className="text-4xl font-heading text-[#171717] mb-4">
                                            {item.number}
                                        </span>

                                        <h3 className="text-xl font-bold text-[#171717] mb-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm md:text-base leading-relaxed text-[#5B5B5B]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (

                                <div className="w-full max-w-[250px] aspect-[3/4] flex items-center justify-center relative">
                                    <div className="relative w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                                        <Image
                                            src={item.image || "/assets/flower-placeholder.svg"}
                                            alt={item.alt}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                <p className='text-center font-xl mt-12 p-10 text-[#5B5B5B] max-w-2xl mx-auto font-light' >

                   {
                    isPerson2 && (
                        
                     "I believe education and fairness are the foundation of progress. My aim is always to help people grow in ways that benefit both themselves and those around them." 
                    )
                   }
                </p>

            </div>
        </section>
    );
}