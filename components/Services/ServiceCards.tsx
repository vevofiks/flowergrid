import React from 'react';
import Image from 'next/image';
import { title } from 'process';

const serviceCardData = [
    {
        title: "Personal & Professional Growth Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s5.jpg`
    },
    {
        title: "Leadership & Soft Skills Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s4.jpg`,
    },
    {
        title: "Neuro-Linguistic Programming",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s3.jpg`,
    },
    {
        title: "Soul Reflection & Transformation Work",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s2.jpg`,
    },
    {
        title: "Reiki Healing",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s1.jpg`,
    },
    {
        title: "Hypnotherapy",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person2/ps3.jpg`,
    },
    {
        title: "Rapid Transformational Therapy (RTT)",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person2/ps2.png`,
    },
    {
        title: "Nuero-Linguistic Programming (NLP)",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s3.jpg`,
    },
    {
        title: "Anxiety & Stress Management Techniques",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person2/ps1.jpg`,
    },
    {
        title: "Soul Reflection & Transformation Work",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/s2.jpg`,
    },
    {
        title: "Relationship Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc1.jpg`,
    },
    {
        title: "Conscious Living Coaching",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc2.jpg`,
    },
    {
        title: "Psychological Therapy",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc3.jpg`,
    },
    {
        title: "Doctor Consultations",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc4.jpg`,
    },
    {
        title: "Medical Checks, Treatments & Aesthetics",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc5.jpg`,
    },
    {
        title: "Nutritional Consulting",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc6.jpg`,
    },
    {
        title: "Integrative Health & Fitness Plans",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc7.jpg`,
    },
    {
        title: "Meditation, Mindfulness & Breathing",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc8.jpg`,
    },
    {
        title: "Colour Therapy / Auricular Acupuncture",
        image: `${process.env.NEXT_PUBLIC_IMGURL}services/sc9.jpg`,
    }
]

const ServiceCards: React.FC = ( ) => {

    return (
        <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-5xl md:text-5xl lg:text-[76px] text-text-heading font-heading mb-12 md:mb-16 tracking-wide font-normal uppercase">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {serviceCardData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative h-[420px] md:h-[550px] lg:h-[500px] w-full overflow-hidden rounded-[2rem] cursor-pointer"
                        >
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    priority={index < 3}
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start justify-end h-full z-10">
                                <h3 className="text-2xl md:text-3xl lg:text-[32px] !text-white font-heading font-normal leading-[1.2] mb-8 lg:mb-10 w-[90%]">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;