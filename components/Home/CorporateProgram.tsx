"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Be a leader of you own life",
    desc: "Empower your leaders to inspire and guide teams with confidence, empathy, and clarity. Our workshops develop decision-making, resilience, and emotional intelligence to foster high-performing, motivated, and collaborative leaders.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 a.png`
  },
  {
    id: 2,
    title: "Communication Skills Training",
    desc: "Enhance team collaboration and workplace clarity through practical communication strategies. Participants learn to listen actively, articulate ideas effectively, and resolve conflicts, improving productivity, engagement, and overall team cohesion.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 b.png`
  },
  {
    id: 3,
    title: "Wellbeing Programmes",
    desc: "Support staff and students to achieve mental, emotional, and physical balance. Our holistic approach integrates relaxation, stress management, and wellness practices to boost energy, focus, and sustained performance.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 c.png`
  },
  {
    id: 4,
    title: "Mental Health Awareness",
    desc: "Provide teams and students with practical tools to recognise, manage, and reduce stress and anxiety. These sessions promote resilience, emotional stability, and a supportive, psychologically safe environment.",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 d.png`
  }
];

export default function CorporateProgram() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[135vh] bg-[#4E351A] flex items-center justify-center px-4 py-4 md:px-10 lg:px-20 overflow-hidden">

      <div className="w-full max-w-7xl h-full max-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">


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

          <div className="mt-6 lg:mt-10 flex justify-end">
            <Link href="/holistic-wellness-programme" className="group flex items-center gap-3 px-6 py-2 md:px-8 md:py-3 rounded-full border border-[#D6CFC2]/30 text-[#F3EAD8] text-xs md:text-sm uppercase tracking-widest hover:bg-[#F3EAD8] hover:text-[#4E351A] transition-all duration-300">
              Explore Corporate Programmes
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}