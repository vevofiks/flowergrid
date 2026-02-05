'use client'

import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface CardData {
    title: string
    description: string
}

const WorkSpecifications = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const cards: CardData[] = [
        {
            title: "Scientific credibility,",
            description: "inspired by Jungian psychology and personality insights"
        },
        {
            title: "Spiritual depth,",
            description: "through energy work, mindfulness and coaching"
        },
        {
            title: "Educational empowerment,",
            description: "to help people build long-term self-understanding"
        }
    ];

    useGSAP(() => {
        const textElements = textRef.current?.children;
        if (textElements) {
            gsap.fromTo(
                textElements,
                {
                    y: -50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        const cardElements = cardsRef.current?.children;
        if (cardElements) {
            gsap.fromTo(
                cardElements,
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, { scope: sectionRef });

    return (
        <div ref={sectionRef}
            className='w-full py-12 sm:py-16 md:py-20 flex justify-center overflow-hidden'
        >
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start">
                <div ref={textRef}
                    className='flex flex-col gap-6 sm:gap-8 text-[#4A4A4A]'
                >
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-[#2C2C2C] leading-tight'>
                        Co-Founding<br />
                        Flower Grid
                    </h1>

                    <p className='sm:text-lg lg:text-2xl leading-relaxed'>
                        Flower Grid was created from a shared vision with Samina Khan to unite science and spirituality in one space.
                        Our platform, known as The Intelligent Soul's Wellness Platform, helps people explore personal growth through both structured learning and intuitive guidance.
                    </p>

                    <p className='sm:text-lg !text-black lg:text-2xl font-normal'>
                        We bring together:
                    </p>

                    <p className='sm:text-lg lg:text-2xl leading-relaxed'>
                        FlowerGrid is for anyone who wants to live consciously, align their inner and outer worlds, and grow with <br />Integrity.
                    </p>
                </div>

                <div ref={cardsRef} className='flex flex-col gap-6 lg:gap-5'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className='border-2 border-[#8B7355] rounded-2xl p-3'
                        >
                            <div className='w-full h-full !bg-[#E5CCA1] rounded-xl flex flex-col gap-3 p-6 sm:p-8'>
                                <div className='flex justify-center mb-2'>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMGURL}home/leaf.png`}
                                        alt={card.title}
                                        width={40}
                                        height={40}
                                    />
                                </div>

                                <h3 className='text-xl sm:text-2xl font-heading text-center text-[#2C2C2C]'>
                                    {card.title}
                                </h3>

                                <p className='text-xl text-center text-[#4A4A4A] leading-relaxed'>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkSpecifications