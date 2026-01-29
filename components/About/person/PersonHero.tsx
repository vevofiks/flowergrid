'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface IntroProps {
  imageSrc: string;
  text: string;
}

export default function PersonHero({ imageSrc, text }: IntroProps) {
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
        delay: 1.8,
      }
    );

    // IMAGE ANIMATION
    gsap.fromTo(
      imageRef.current,
      {
        y: 120,
        opacity: 0,
        scale: 0.95,
        delay: 1.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 1.5,
      }
    );

    gsap.fromTo(
      lampRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.95,
        delay: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        delay: 1.5,
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden
                  bg-gradient-to-r from-[#ECDDC6] to-[#a27f45]"
    >

      <div className="mx-auto flex flex-col min-h-screen max-w-7xl items-center justify-center md:justify-start px-4 sm:px-6 md:px-8 lg:px-12
          md:flex-col md:h-[800px] sm:max-h-[650px] lg:max-h-[800px]
      ">

        <div
          ref={textRef}
          className="
          relative z-20 mx-auto
          max-w-4xl
          md:pt-12 lg:pt-16
          px-4 sm:px-8 md:px-24 lg:px-24 lg:pr-24
          text-center
          flex flex-col justify-center
        "
        >
          <h1 className="
          text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl
          font-normal text-black
          leading-tight sm:leading-tight md:leading-snug lg:leading-snug
          md:mb-12 lg:mb-20 "
            style={{ marginBottom: '75px' }}
          >
            {text}
          </h1>
        </div>

        <div
          ref={lampRef}
          className="
            absolute top-0 left-0 sm:left-2 md:left-6 lg:left-10 xl:left-12
            z-10
            w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px]
          "
        >
          <Image src={`/about/lamp.png`} alt="Lamp" width={360} height={200} className="object-contain w-full h-auto" />
        </div>

        <div
          ref={imageRef}
          className="
              absolute bottom-0 left-1/2 z-10
              h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh]
              w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[560px]
              -translate-x-1/2
            "
        >
          <Image
            src={imageSrc}
            alt="trainer img"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-24
            sm:h-28 md:h-32 lg:h-36
            bg-gradient-to-r from-[#ECDDC6] to-[#af8849]"
        />

        <div
          className="
            absolute bottom-0 right-4 sm:right-8 md:right-6 lg:right-16 xl:right-24
            z-20
            w-[160px] sm:w-[220px] md:w-[260px] lg:w-[340px] xl:w-[400px]
          "
        >
          <Image src={`/about/tree.png`} alt="Plant" width={400} height={400} className="w-full h-auto" />
        </div>

        <div
          className="
            absolute bottom-0 left-0
            z-10
            w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[420px]
            -mb-6 sm:-mb-8 md:-mb-10 lg:-mb-12
          "
        >
          <Image
            src={`/about/tablewithplant.png`}
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
