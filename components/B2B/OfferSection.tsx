"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Leadership and Emotional Intelligence Coaching",
    desc: "Empower leaders to manage with empathy and self-awareness. We help managers understand their own drivers to build psychological safety and trust within their teams.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}b2b/1.jpg`
  },
  {
    id: 2,
    title: "Mindfulness and Stress Resilience Training",
    desc: "Practical tools to help employees manage high-pressure environments. We teach nervous system regulation and focus techniques to reduce burnout.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}b2b/2.jpg`
  },
  {
    id: 3,
    title: "Trauma-Informed Workplace Wellbeing Workshops",
    desc: "Create a supportive environment. We guide organizations on how to support staff through personal crises and societal stress without overstepping professional boundaries.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}b2b/3.jpg`
  },
  {
    id: 4,
    title: "Communication and Relationship Coaching",
    desc: "Resolve conflict and silence silos. Using NLP and transactional analysis, we improve how teams listen, speak, and collaborate for smoother workflows.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}b2b/4.jpg`
  },
  {
    id: 5,
    title: "Team Cohesion and Cultural Alignment",
    desc: "Move beyond basic team building. We facilitate deep work to align your team’s personal values with the organization’s mission, fostering genuine loyalty.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}b2b/5.jpg`
  },
  {
    id: 6,
    title: "Corporate Wellness Retreats and Immersive Sessions",
    desc: "Immersive off-site or on-site sessions designed to reset collective energy, combining strategic planning with holistic restoration.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}b2b/6.jpg`
  }
];

export default function OfferSection() {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="relative w-full h-auto min-h-screen lg:h-[130vh] bg-[#4E351A] px-4 py-20 md:px-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12 mt-21">
        <h1 className="text-white! text-5xl font-heading font-normal tracking-wide">What We Offer</h1>
        <p className="text-white! text-lg font-sans font-light! tracking-wide mt-2">Our corporate and educational programmes address both individual growth and team dynamics.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto h-auto lg:h-[calc(100%-120px)] lg:max-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">


        <div className="relative w-full h-[40vh] lg:h-full lg:max-h-[98vh] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-0">
          {workshops.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center h-full order-2 lg:order-0">
          <div className="flex flex-col w-full border-[#8C7A65]">
            {workshops.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="group border-b border-[#8C7A65] cursor-pointer transition-all duration-300"
              >
                <div className={`py-4 lg:py-5 flex items-center justify-between transition-all duration-300 ${activeIndex === index ? "opacity-100" : "opacity-60 group-hover:opacity-80"}`}>
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-white text-xs md:text-sm font-sans tracking-widest opacity-60">
                      0{item.id}
                    </span>
                    <h3 className="text-white! text-lg md:text-2xl font-heading font-light tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 pb-4"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-10 md:pl-12 pr-2 md:pr-4">
                      <div className="bg-[#271B0D] p-4 md:p-6 rounded-xl border border-white/5">
                        <p className="text-white! text-xs md:text-base leading-relaxed font-sans opacity-90 line-clamp-3 md:line-clamp-none">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}