'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const serviceCardData = [
    {
        title: "Personal & Professional Growth Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s5.jpg`,
        desc: "Build confidence, clarity, and purpose in every aspect of life."

    },
    {
        title: "Leadership & Soft Skills Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s4.jpg`,
        desc: "Enhance emotional intelligence, leadership, and communication for success."
    },
    {
        title: "Neuro-Linguistic Programming",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s3.jpg`,
        desc: "Tailored plans to optimise nutrition, metabolism, and energy."
    },
    {
        title: "Soul Reflection & Transformation Work",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s2.jpg`,
        desc: "Dive deep into self-awareness, ego work, and soul growth."
    },
    {
        title: "Reiki Healing",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s1.jpg`,
        desc: "Channel universal energy to clear blockages and renew your emotional state."
    },
    {
        title: "Hypnotherapy",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person2/ps3.jpg`,
        desc: "Access your subconscious to overcome blocks and instill confidence."
    },
    {
        title: "Nuero-Linguistic Programming (NLP)",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s3.jpg`,
        desc: "Rewire patterns of thought and behaviour to achieve positive change."
    },
    {
        title: "Anxiety & Stress Management Techniques",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person2/ps1.jpg`,
        desc: "Learn evidence-based tools to calm the mind and regulate emotions."
    },
    {
        title: "Soul Reflection & Transformation Work",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s2.jpg`,
        desc: "Dive deep into self-awareness, ego work, and soul growth."
    },
    {
        title: "Relationship Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc1.jpg`,
        desc: "Strengthen communication, compassion, and connection in your relationships."
    },
    {
        title: "Conscious Living Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc2.jpg`,
        desc: "Align your thoughts and habits with your soul’s purpose."
    },
    {
        title: "Psychological Therapy",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc3.jpg`,
        desc: "Receive compassionate support to process emotions and heal from within."
    },
    {
        title: "Doctor Consultations",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc4.jpg`,
        desc: "Access our network of integrative practitioners for personalised health insights."
    },
    {
        title: "Medical Checks, Treatments & Aesthetics",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc5.jpg`,
        desc: "Comprehensive assessments and aesthetic services guided by healthcare professionals."
    },
    {
        title: "Nutritional Consulting",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc6.jpg`,
        desc: "Tailored plans to optimise nutrition, metabolism, and energy."
    },
    {
        title: "Integrative Health & Fitness Plans",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc7.jpg`,
        desc: "Custom wellness programme combining fitness, nutrition, and mindfulness."
    },
    {
        title: "Meditation, Mindfulness & Breathing",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc8.jpg`,
        desc: "Restore presence and balance through guided stillness."
    },
    {
        title: "Colour Therapy / Auricular Acupuncture",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc9.jpg`,
        desc: "Experience subtle energy realignment for mind–body rejuvenation."
    }
]

// ... serviceCardData remains the same ...

const ServiceCards: React.FC = () => {
    // Track which specific card is open (null means all closed)
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleTouch = (index: number) => {
        // Toggle: if same index is clicked, close it. Otherwise, open new one.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-5xl md:text-5xl lg:text-[76px] text-text-heading font-heading mb-12 md:mb-16 tracking-wide font-normal uppercase">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {serviceCardData.map((item, index) => {
                        const isThisOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleTouch(index)}
                                // Mouse events for desktop hover
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className="group relative h-[420px] md:h-[550px] lg:h-[500px] w-full overflow-hidden rounded-[2rem] cursor-pointer touch-manipulation"
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={`object-cover transition-transform duration-700 ease-out 
                                            ${isThisOpen ? 'scale-105' : 'scale-100'}`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                        priority={index < 3}
                                    />
                                </div>

                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 transition-all duration-300 bg-gradient-to-t 
                                    ${isThisOpen 
                                        ? 'from-black/95 via-black/40 to-transparent' 
                                        : 'from-black/90 via-black/30 to-transparent'}`} 
                                />

                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start justify-end h-full z-10">
                                    <h3 className="text-2xl md:text-3xl lg:text-[32px] !text-white font-heading font-normal leading-[1.2] mb-3 w-[90%] transition-all duration-300">
                                        {item.title}
                                    </h3>

                                    {item.desc && (
                                        <p className={`text-sm md:text-base lg:text-lg !text-white/90 font-light leading-relaxed w-[90%] transition-all duration-500 ease-out overflow-hidden
                                            ${isThisOpen 
                                                ? 'max-h-40 opacity-100 mb-6' 
                                                : 'max-h-0 opacity-0 mb-0'
                                            }`}
                                        >
                                            {item.desc}
                                        </p>
                                    )}
                                    
                                    <div className={`md:hidden text-white/50 text-xs uppercase tracking-widest transition-opacity duration-300 ${isThisOpen ? 'opacity-0' : 'opacity-100'}`}>
                                        Tap to learn more
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;