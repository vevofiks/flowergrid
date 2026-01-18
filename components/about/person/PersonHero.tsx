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

      <div className="mx-auto flex flex-col min-h-screen max-w-5xl items-center justify-center md:justify-start px-6 md:px-12
          md:flex-col md:h-[800px] sm:h-[550px]
      ">

        <div
          ref={textRef}
          className="
          relative z-20 mx-auto
          max-w-3xl
          md:pt-16
          px-8 sm:px-20 md:px-16 
          text-center
          flex flex-col justify-center
        "
        >
          <h1 className="
          text-3xl sm:text-4xl md:text-3xl lg:text-5xl
          font-normal text-black
          md:mr-5 
          md:mt-16 sm:text-center
        ">
            {text}
          </h1>
        </div>

        <div
          ref={lampRef}
          className="
            absolute top-0 left-0 sm:left-4 md:left-8 lg:left-12
            z-10
            md:mr-40 lg:mr-48
            w-[200px] md:w-[240px] lg:w-[300px] xl:w-[320px]
          "
        >
          <Image src="/about/lamp.png" alt="Lamp" width={360} height={200} className="object-contain" />
        </div>



        <div
          ref={imageRef}
          className="
              absolute bottom-0 left-1/2 z-10
              h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh]
              w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-xl
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
          className="absolute bottom-0 left-0 w-full h-32
            sm:h-24 md:h-32
            bg-gradient-to-r from-[#ECDDC6] to-[#af8849]"
        />

        <div
          className="
            absolute bottom-0 right-6 sm:right-10 md:right-0 lg:right-24
            sm:mr-0
            z-20
            w-[180px] sm:w-[260px] md:w-[270px] lg:w-[400px]

          "
        >
          <Image src="/about/tree.png" alt="Plant" width={400} height={400} />
        </div>

        <div
          className="
            absolute bottom-0 left-0
            z-10
            w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[440px]
            -mb-8 sm:-mb-10 md:-mb-12
          "
        >
          <Image
            src="/about/tablewithplant.png"
            alt="Table"
            width={420}
            height={200}
            className="object-contain"
          />

        </div>
      </div>
    </section>
  );
}
