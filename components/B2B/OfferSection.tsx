"use client";

import React, { useState } from "react";
import Image from "next/image";

const workshops = [
  {
    id: 1,
    title: "Leadership and Emotional Intelligence Coaching",
    desc: "Empower leaders to manage with empathy and self-awareness. We help managers understand their own drivers to build psychological safety and trust within their teams.",
    image: "/b2b/1.jpg" // Ensure these paths are correct or use your env variable
  },
  {
    id: 2,
    title: "Mindfulness and Stress Resilience Training",
    desc: "Practical tools to help employees manage high-pressure environments. We teach nervous system regulation and focus techniques to reduce burnout.",
    image: "/b2b/2.jpg"
  },
  {
    id: 3,
    title: "Trauma-Informed Workplace Wellbeing Workshops",
    desc: "Create a supportive environment. We guide organisations on how to support staff through personal crises and societal stress without overstepping professional boundaries.",
    image: "/b2b/3.jpg"
  },
  {
    id: 4,
    title: "Communication and Relationship Coaching",
    desc: "Resolve conflict and silence silos. Using NLP and transactional analysis, we improve how teams listen, speak, and collaborate for smoother workflows.",
    image: "/b2b/4.jpg"
  },
  {
    id: 5,
    title: "Team Cohesion and Cultural Alignment",
    desc: "Move beyond basic team building. We facilitate deep work to align your team’s personal values with the organisation’s mission, fostering genuine loyalty.",
    image: "/b2b/5.jpg"
  },
  {
    id: 6,
    title: "Corporate Wellness Retreats and Immersive Sessions",
    desc: "Immersive off-site or on-site sessions designed to reset collective energy, combining strategic planning with holistic restoration.",
    image: "/b2b/6.jpg"
  }
];

export default function OfferSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-auto bg-[#4E351A] px-4 py-20 md:px-10 lg:px-20">

      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-white! text-4xl md:text-5xl font-heading font-normal tracking-wide">
          What We Offer
        </h1>
        <p className="text-white! text-lg font-sans font-light tracking-wide mt-4 max-w-2xl opacity-90">
          Our corporate and educational programmes address both individual growth and team dynamics.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left Column: Image (Sticky on Desktop) */}
        {/* 'lg:sticky lg:top-32' makes the image stay in view while you scroll the text */}
        <div className="relative w-full h-[40vh] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-1 lg:sticky lg:top-32">
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
              {/* Optional: Gradient overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

        {/* Right Column: Text List (Scrollable) */}
        <div className="flex flex-col w-full order-2 lg:order-2">
          {workshops.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`group border-b border-[#8C7A65] cursor-pointer transition-all duration-300 ${index === 0 ? "border-t" : ""
                }`}
            >
              <div className={`py-6 flex items-center justify-between transition-all duration-300 ${activeIndex === index ? "opacity-100" : "opacity-60 group-hover:opacity-90"
                }`}>
                <div className="flex items-start gap-6">
                  <span className="text-white! text-sm font-sans tracking-widest opacity-60 mt-1">
                    0{item.id}
                  </span>
                  <h3 className="text-white! text-xl md:text-2xl font-heading font-light tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 pb-8"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-12 pr-4">
                    <div className="text-white/90 text-base md:text-lg leading-relaxed font-sans font-light">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}