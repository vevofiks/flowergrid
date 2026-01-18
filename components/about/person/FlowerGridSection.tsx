'use client';

import Image from 'next/image';
import FlowerAnimation from './FlowerAnimation';
import BlurTextReveal from '../../UI/BlurTextReveal';

export default function FlowerGridSection() {
    const content = "I'm proud to be part of Flower Grid, where a team of 15 skilled practitioners provides integrated support for mind, body, and spirit. Together, we offer coaching, counselling, nutrition guidance, exercise plans, Reiki, spiritual direction, and medical support.";

    return (
        <section className="min-h-screen flex items-center justify-center py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Text Content */}
                <div className="order-2 lg:order-1">
                    <BlurTextReveal text={content} />
                </div>

                {/* RIGHT: Flower Animation */}
                <div className="order-1 px-20 lg:order-2 h-[500px] lg:h-[600px] flex items-center justify-center">
                    <FlowerAnimation/>
                </div>

            </div>
        </section>
    );
}