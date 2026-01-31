import React from 'react';
import Image from 'next/image';

interface SupportItem {
    image: string;
    title: string;
}

interface SupportProps {
    data: SupportItem[];
}

const Support: React.FC<SupportProps> = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] text-text-heading font-heading mb-12 md:mb-16 tracking-wide font-normal">
                    How I Can Support You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="group relative h-[450px] md:h-[550px] lg:h-[600px] w-full overflow-hidden rounded-[2rem] cursor-pointer"
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

                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 flex flex-col items-start justify-end h-full z-10">
                                <h3 className="text-2xl md:text-3xl lg:text-[32px] !text-white font-heading font-normal leading-[1.2] mb-8 lg:mb-10 w-[90%]">
                                    {item.title}
                                </h3>

                                <button className="px-8 py-3 border border-white/60 rounded-full text-white text-sm uppercase tracking-widest hover:bg-[#A68653] hover:text-black hover:w-full hover:py-4 hover:scale-105 transition-all duration-300 backdrop-blur-[2px] hover:border-black!">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Support;