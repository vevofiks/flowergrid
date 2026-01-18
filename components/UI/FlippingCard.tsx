'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface StepData {
    title: string;
    image: string;
    description: string;
}

export default function FlippingCard({ data }: { data: StepData }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const { contextSafe } = useGSAP({ scope: cardRef });

    const flipCard = contextSafe((shouldFlip: boolean) => {
        gsap.to(cardRef.current, {
            rotationY: shouldFlip ? 180 : 0,
            duration: 0.8,
            ease: "power2.out",
        });
    });

    const handleMouseEnter = contextSafe(() => {
        // Only trigger on non-touch devices
        if (!('ontouchstart' in window)) {
            setIsFlipped(true);
            flipCard(true);
        }
    });

    const handleMouseLeave = contextSafe(() => {
        // Only trigger on non-touch devices
        if (!('ontouchstart' in window)) {
            setIsFlipped(false);
            flipCard(false);
        }
    });

    const handleClick = contextSafe(() => {
        // Toggle flip state on click/tap (for mobile/tablet)
        const newFlipState = !isFlipped;
        setIsFlipped(newFlipState);
        flipCard(newFlipState);
    });

    return (
        <div
            className="group relative w-full max-w-[500px] mx-auto h-[180px] sm:h-[190px] md:h-[200px] [perspective:1000px] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* WRAPPER: 
               - [transform-style:preserve-3d]: Crucial for 3D children 
            */}
            <div
                ref={cardRef}
                className="w-full h-full relative [transform-style:preserve-3d] shadow-lg rounded-2xl sm:rounded-3xl"
            >

                {/* --- FRONT SIDE --- 
                   - [backface-visibility:hidden]: Hides this side when flipped
                */}
                <div className="absolute inset-0 w-full h-full 
                  [backface-visibility:hidden] rounded-2xl sm:rounded-3xl overflow-hidden bg-white"
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Title */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading !text-white font-medium drop-shadow-md text-center">
                            {data.title}
                        </h3>
                    </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#C0A374] p-4 sm:p-6 flex flex-col justify-center items-center text-center"
                >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-normal leading-relaxed !text-white">
                        {data.description}
                    </p>
                </div>

            </div>
        </div>
    );
}