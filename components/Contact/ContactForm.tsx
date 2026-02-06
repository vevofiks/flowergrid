"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(imageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    if (contentRef.current) {
      tl.from(contentRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.5");
    }

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col md:flex-row bg-[#F3EAD8]"
    >

      <div
        ref={imageRef}
        className="relative w-full md:w-1/2 h-[25vh] md:h-auto md:min-h-screen shrink-0"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}contact/form-img.png`}
          alt="Hands holding a crystal"
          fill
          className="object-cover md:object-contain rounded-4xl drop-shadow m-4"
          priority
        />
      </div>
      <div className="w-full md:w-1/2 h-full bg-[#F3EAD8] flex flex-col justify-center">
        <div
          ref={contentRef}
          className="w-full flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20"
        >
          <h1 className="text-[#2D3F28] text-2xl md:text-4xl lg:text-5xl font-heading font-normal mb-2 md:mb-4">
            Connect with Flowergrid
          </h1>

          <p className="text-[#4A4A4A] text-xs md:text-base font-sans mb-4 md:mb-8 max-w-lg leading-snug">
            Get in touch to receive holistic guidance for mind, body, and spirit wellbeing and personal growth.
          </p>


          <form className="w-full max-w-lg flex flex-col gap-3 md:gap-4">


            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full bg-[#DCCEA1]/60 border border-transparent focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300"
              />
            </div>


            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full bg-[#DCCEA1]/60 border border-transparent focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300"
              />
            </div>


            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full bg-[#DCCEA1]/60 border border-transparent focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300"
              />
            </div>


            <div className="flex flex-col gap-1">
              <label htmlFor="country" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  className="w-full bg-[#DCCEA1]/60 border border-transparent focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm outline-none appearance-none transition-all duration-300 cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="IN">India</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#1C1C1C]/60">
                  <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>


            <button
              type="submit"
              className="mt-2 w-full bg-[#9C8255] hover:bg-[#856E46] text-white font-medium text-sm md:text-base py-3 rounded-lg transition-colors duration-300 shadow-md"
            >
              Book a Discovery Session
            </button>

          </form>
        </div>
      </div>

    </section>
  )
}