'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface IntroProps {
  imageSrc: string;
  text: string;
  imageClassName?: string;
}

export default function PersonHero({ imageSrc, text, imageClassName }: IntroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lampRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // TEXT ANIMATION
    gsap.fromTo(
      textRef.current,
      {
        y: -70,
        opacity: 0,
      },
      {
        y: -20,
        opacity: 1,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.4,
      }
    );

    // IMAGE ANIMATION
    gsap.fromTo(
      imageRef.current,
      {
        y: 120,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    gsap.fromTo(
      lampRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 0.6,
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[850px] w-full overflow-hidden
                  bg-linear-to-r from-[#ECDDC6] to-[#a27f45]"
    >

      <div className="mx-auto flex flex-col min-h-screen max-w-7xl items-center justify-center md:justify-start px-4 sm:px-6 md:px-8 lg:px-12
          md:flex-col md:h-[850px] lg:max-h-[850px]
      ">

        <div
          ref={textRef}
          className="
          relative z-20 mx-auto
          max-w-6xl
          pt-8 md:pt-20 lg:pt-22
          px-4 sm:px-6 md:px-12 lg:px-24 lg:pr-24
          text-center
          flex flex-col justify-start
        "
        >
          <h1 className="
          text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl
          font-normal text-black
          leading-tight sm:leading-tight md:leading-snug lg:leading-snug
          md:px-20 lg:mt-8 mb-8 sm:mb-12 md:mb-16 md:ml-4"
          >
            {text}
          </h1>
        </div>

        <div
          ref={lampRef}
          className="
            absolute top-0 left-0 sm:left-2 md:left-0 lg:left-10 xl:left-12
            z-10
            w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px]
          "
        >
          <Image src={`${process.env.NEXT_PUBLIC_IMGURL}about/lamp.png`} alt="Lamp" width={360} height={200} className="object-contain w-full h-auto" />
        </div>

        <div
          ref={imageRef}
          className="absolute -bottom-10 left-1/2 z-10 h-full w-full -translate-x-1/2">
          <Image
            src={imageSrc}
            alt="trainer img"
            width={450}
            height={450}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom ${imageClassName || "w-[250px] sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[350px]"}`}
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-8 md:h-32 lg:h-36 bg-linear-to-r from-[#ECDDC6] to-[#af8849]" />

        <div
          className="
            absolute bottom-0 right-0 sm:right-0 md:right-6 lg:right-16 xl:right-24
            z-20
            w-[160px] sm:w-[220px] md:w-[260px] lg:w-[340px] xl:w-[400px]
          "
          style={{
            marginLeft: "34px"
          }}
        >
          <Image src={`${process.env.NEXT_PUBLIC_IMGURL}about/tree.png`} alt="Plant" width={400} height={400} className="w-full h-auto" />

        </div>

        <div
          className="
            absolute bottom-0 left-0
            z-10
            w-[180px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[420px]
            -mb-6 sm:-mb-8 md:-mb-10 lg:-mb-12
          "
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMGURL}about/tablewithplant.png`}
            alt="Table"
            width={420}
            height={200}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}