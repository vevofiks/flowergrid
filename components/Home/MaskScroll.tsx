"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaskScroll = () => {
    const container = useRef(null);
    const maskRef = useRef(null);
    const bgImageRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=500%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            });

            tl.addLabel("start");

        tl.to(maskRef.current, {
            scale: 60,
            transformOrigin: "center center",
            ease: "power1.inOut",
            duration: 2,
            force3D: true,
        }, "start");

            tl.to(bgImageRef.current, {
                scale: 1.05,
                duration: 2,
                ease: "power1.inOut",
                force3D: true,
            }, "start");

            tl.addLabel("scene1", "-=0.5");

            const q = gsap.utils.selector(container);
            const texts = q(".reveal-text") as HTMLElement[];

            tl.to(bgImageRef.current, {
                xPercent: 3,
                yPercent: 3,
                scale: 1.1,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: true,
            }, "scene1");

            tl.fromTo(texts[0],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: true },
                "scene1"
            );

            tl.addLabel("scene2");
            tl.to(texts[0], { y: -30, opacity: 0, duration: 0.5, force3D: true }, "scene2");

            tl.to(bgImageRef.current, {
                xPercent: -3,
                yPercent: 3,
                scale: 1.15,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: true,
            }, "scene2");

            tl.fromTo(texts[1],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: true },
                "scene2+=0.2"
            );

            tl.addLabel("scene3");
            tl.to(texts[1], { y: -30, opacity: 0, duration: 0.5, force3D: true }, "scene3");

            tl.to(bgImageRef.current, {
                xPercent: 3,
                yPercent: 3,
                scale: 1.12,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: true,
            }, "scene3");

            tl.fromTo(texts[2],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: true },
                "scene3+=0.2"
            );

            tl.addLabel("scene4");
            tl.to(texts[2], { y: -30, opacity: 0, duration: 0.5, force3D: true }, "scene4");

            tl.to(bgImageRef.current, {
                xPercent: 2,
                yPercent: -3,
                scale: 1.15,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: true,
            }, "scene4");

            tl.fromTo(texts[3],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: true },
                "scene4+=0.2"
            );

            tl.addLabel("scene5");
            tl.to(texts[3], { y: -30, opacity: 0, duration: 0.5, force3D: true }, "scene5");

            tl.to(bgImageRef.current, {
                xPercent: 0,
                yPercent: 0,
                scale: 1.02,
                duration: 1.5,
                ease: "power1.inOut",
                force3D: true,
            }, "scene5");

            tl.fromTo(texts[4],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", force3D: true },
                "scene5+=0.2"
            );
        }, container);

        return () => ctx.revert();
    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative w-screen h-screen overflow-hidden bg-[#F3E5CB]"
        >
            <Image
                ref={bgImageRef}
                src={`${process.env.NEXT_PUBLIC_IMGURL}home/maskscrollfit.svg%2Bxml`}
                alt="BG"
                fill
                priority
                className='object-cover object-[50%_60%]'
                style={{ transformOrigin: "center center" }}
            />



            <div ref={maskRef} className="absolute inset-0 flex items-center justify-center pointer-events-none origin-center w-screen h-screen"
                style={{
                    willChange: "transform",
                    maskImage: `url('/home/flower.svg')`,
                    WebkitMaskImage: `url('/home/flower.svg')`,
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center center",
                    WebkitMaskPosition: "center center",
                    backgroundColor: "#F3E5CB"
                }}
            />

            <div ref={textRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">


                <h2 className="reveal-text absolute text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-5xl opacity-0 font-gilroy-black">
                    Aligning
                </h2>

                <h2 className="reveal-text absolute text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    Mind, Body and Spirit
                </h2>
                <h2 className="reveal-text absolute text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    for Balance
                </h2>
                <div className="reveal-text absolute flex flex-col items-center justify-center gap-6 opacity-0">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white! leading-[0.9] text-center max-w-7xl font-gilroy-black">
                        See How We Help You Transform
                    </h2>
                    <Link href="/holistic-wellness-services" className="explore-button pointer-events-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-primary border text-white rounded-full font-medium cursor-pointer hover:bg-primary/90 transition-colors">
                        Explore Our Services
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default MaskScroll;