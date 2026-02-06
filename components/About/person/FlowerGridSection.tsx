'use client';

import Image from 'next/image';
import BlurTextReveal from '../../UI/BlurTextReveal';

interface FlowerGridSectionProps {
    text: string;
    img: string;
}

export default function FlowerGridSection({ text, img}: FlowerGridSectionProps) {
    const content = "I'm proud to be part of Flowergrid, where a team of 15 skilled practitioners provides integrated support for mind, body, and spirit. Together, we offer coaching, counselling, nutrition guidance, exercise plans, Reiki, spiritual direction, and medical support.";

    return (
        <section className="min-h-screen flex items-center justify-center py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="order-2 lg:order-1">
                    <BlurTextReveal text={text} />
                </div>

                <div className="order-1 lg:order-2 h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center p-4 md:p-10 lg:px-20">
                    <div className="relative w-full h-full">
                        <Image
                            src={img}
                            alt="Flowergrid"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}