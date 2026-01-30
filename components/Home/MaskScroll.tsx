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
            scale: 100,
            transformOrigin: "center center",
            ease: "power1.inOut",
            duration: 2,
            force3D: true,
        }, "start");

        tl.to(bgImageRef.current, {
            scale: 1.5,
            duration: 2,
            ease: "power1.inOut"
        }, "start");

        tl.addLabel("scene1", "-=0.5");

        const q = gsap.utils.selector(container);
        const texts = q(".reveal-text") as HTMLElement[];

        tl.to(bgImageRef.current, {
            xPercent: 35,
            yPercent: 35,
            scale: 2,
            duration: 1.5,
            ease: "power1.inOut"
        }, "scene1");

        tl.fromTo(texts[0],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "scene1"
        );

        tl.addLabel("scene2");
        tl.to(texts[0], { y: -50, opacity: 0, duration: 0.5 }, "scene2");

        tl.to(bgImageRef.current, {
            xPercent: -35,
            yPercent: 35,
            scale: 2,
            duration: 1.5,
            ease: "power1.inOut"
        }, "scene2");

        tl.fromTo(texts[1],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "scene2+=0.2"
        );

        tl.addLabel("scene3");
        tl.to(texts[1], { y: -50, opacity: 0, duration: 0.5 }, "scene3");

        tl.to(bgImageRef.current, {
            xPercent: 35,
            yPercent: 35,
            scale: 1.8,
            duration: 1.5,
            ease: "power1.inOut"
        }, "scene3");

        tl.fromTo(texts[2],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "scene3+=0.2"
        );

        tl.addLabel("scene4");
        tl.to(texts[2], { y: -50, opacity: 0, duration: 0.5 }, "scene4");

        tl.to(bgImageRef.current, {
            xPercent: 35,
            yPercent: -35,
            scale: 2,
            duration: 1.5,
            ease: "power1.inOut"
        }, "scene4");

        tl.fromTo(texts[3],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "scene4+=0.2"
        );

        tl.addLabel("scene5");
        tl.to(texts[3], { y: -50, opacity: 0, duration: 0.5 }, "scene5");

        tl.to(bgImageRef.current, {
            xPercent: 0,
            yPercent: 0,
            scale: 1.09,
            duration: 1.5,
            ease: "power1.inOut"
        }, "scene5");

        tl.fromTo(texts[4],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "scene5+=0.2"
        );

    }, { scope: container });

    return (
        <section ref={container} className='relative w-full h-screen overflow-hidden bg-[#F3E5CB]'>

            <div className="absolute inset-0 w-full h-full">
                <div ref={bgImageRef} className="w-full h-full will-change-transform">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMGURL}home/penn.svg`}
                        alt="BG"
                        fill
                        className='object-cover'
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>

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


                <h2 className="reveal-text absolute text-5xl md:text-8xl lg:text-9xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    The Flowergrid philosophy is rooted in balance and integrative wellness.
                </h2>

                <h2 className="reveal-text absolute text-5xl md:text-8xl lg:text-9xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    We believe lasting change comes from nurturing every part of your being
                </h2>
                <h2 className="reveal-text absolute text-5xl md:text-8xl lg:text-9xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    mental, physical, and spiritual
                </h2>
                <h2 className="reveal-text absolute text-5xl md:text-8xl lg:text-9xl font-bold text-white! leading-[0.9] text-center max-w-7xl opacity-0 font-gilroy-black">
                    so that your energy, purpose, and peace are perfectly aligned.
                </h2>

                <div className="reveal-text absolute flex flex-col items-center justify-center gap-6 opacity-0">
                    <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white! leading-[0.9] text-center max-w-7xl font-gilroy-black">
                        See How We Help You Transform
                    </h2>
                    <Link href="/services" className="explore-button pointer-events-auto px-8 py-4 bg-primary border text-white rounded-full font-medium cursor-pointer hover:bg-primary/90 transition-colors">
                        Explore Our Services
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default MaskScroll;