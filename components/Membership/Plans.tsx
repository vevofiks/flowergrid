"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const plans = [
  {
    price: "£350",
    title: "Self Discovery",
    subtitle: "(Foundational program – 6 Weeks)",
    purpose:
      "To help individuals reconnect with themselves, understand their current health and emotional state, and build the foundation for inner and outer wellbeing.",
    included: [
      "Advanced 1:1 Coaching & NLP Sessions – mindset shifts, reframing and habit integration",
      "Hypnotherapy / Rapid Transformational Therapy (RTT) – addressing subconscious blocks",
      "Emotional Wellness & Psychological Therapy – supporting integration of deeper healing",
      "Mindfulness & Breathwork Coaching – sustaining mental clarity and focus",
      "Energy Healing & Reiki – enhancing alignment and emotional flow",
      "Relationship Coaching – strengthening communication and emotional intelligence",
      "Nutrition & Lifestyle Plan – optimising diet, sleep, and daily vitality",
      "Group Workshops / FlowerGrid Hub Access – community growth and peer connection",
    ],
    outcome:
      "You leave with greater clarity, balance, and a personalised self-care roadmap for your next phase.",
  },
  {
    price: "£600",
    title: "Self Alignment",
    subtitle: "(Intermediate program – 12 Weeks)",
    purpose:
      "To align the body, mind, and spirit by integrating learned practices into a structured daily routine, supported by coaching and holistic therapies.",
    included: [
      "Advanced 1:1 Coaching & NLP Sessions – mindset shifts, reframing and habit integration",
      "Hypnotherapy / Rapid Transformational Therapy (RTT) – addressing subconscious blocks",
      "Emotional Wellness & Psychological Therapy – supporting integration of deeper healing",
      "Mindfulness & Breathwork Coaching – sustaining mental clarity and focus",
      "Energy Healing & Reiki – enhancing alignment and emotional flow",
      "Relationship Coaching – strengthening communication and emotional intelligence",
      "Nutrition & Lifestyle Plan – optimising diet, sleep, and daily vitality",
      "Group Workshops / FlowerGrid Hub Access – community growth and peer connection",
    ],
    outcome:
      "You cultivate balanced energy, improved focus, and an aligned life that supports emotional and physical longevity.",
  },
  {
    price: "£900",
    title: "Self Mastery",
    subtitle: "(Advanced program – 16-20 Weeks)",
    purpose:
      "To sustain long-term wellbeing, integrate longevity science, and embody holistic mastery through personalised transformation and advanced wellness strategies.",
    included: [
      "Personalised 1:1 Coaching & Mentorship - long-term growth and accountability",
      "Holistic Longevity Health Plan - integrating nutrition, lifestyle, and medical/aesthetic wellness",
      "Energy Healing Series & Reiki Master Sessions - advanced energetic renewal",
      "Mindfulness & Meditation Mastery - deep mental resilience and focus training",
      "Advanced Hypnotherapy / RTT - reprogramming limiting beliefs",
      "Psychological Therapy & Emotional Mastery Coaching - long-term emotional stability",
      "Medical & Aesthetic Healthcare - rejuvenation, bio-aligned treatments (optional add-ons)",
      "Access to Retreats & Wellness Events - immersive experiences and continued transformation",
      "Community Membership & Continuous Support - accountability and expert insights",
    ],
    outcome:
      "You embody vitality, clarity, and conscious longevity, mastering the art of balanced living and sustained transformation.",
  },
];

const PlanCard = ({ plan }: { plan: (typeof plans)[0] }) => {
  return (
    <div className="plan-card relative bg-[#4E351A] text-[#F3EAD8] rounded-3xl overflow-visible flex flex-col h-full mt-20">

      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-34 h-34 rounded-full bg-[#F3EAD8] flex items-center justify-center border-[6px] border-[#4E351A] z-10">
        <span className="text-3xl font-heading font-normal text-[#1C1C1C]">
          {plan.price}
        </span>
      </div>


      <div className="p-8 pt-20 flex flex-col gap-6 grow">

        <div className="text-center">
          <h3 className="text-white! text-2xl font-heading font-normal">{plan.title}</h3>
          <p className="text-white! text-sm font-sans italic opacity-80">{plan.subtitle}</p>
        </div>


        <div>
          <h4 className="text-white! text-lg font-heading font-normal mb-2">Purpose</h4>
          <p className="text-white! text-sm font-sans leading-relaxed opacity-90">
            {plan.purpose}
          </p>
        </div>


        <div className="grow">
          <h4 className="text-white! text-lg font-heading font-normal mb-4">
            What's Included:
          </h4>
          <ul className="flex flex-col gap-3">
            {plan.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={18} className="text-[#C19A6B] shrink-0 mt-0.5" />
                <span className="text-sm font-sans leading-relaxed opacity-90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-px bg-[#C19A6B]" />


        <div>
          <h4 className="text-white! text-lg font-heading font-normal mb-2">Outcome</h4>
          <p className="text-white! text-sm font-sans leading-relaxed opacity-90">
            {plan.outcome}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Plans() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });


    tl.from(headerRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    if (cardsRef.current) {
      tl.from(
        cardsRef.current.children,
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-12 lg:px-20 mb-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal mb-6">
            Flowergrid Longevity & Transformation programs
          </h2>
          <p className="text-base md:text-lg font-sans">
            Through this journey, FlowerGrid helps you reconnect, heal, and grow into the most aligned, empowered version of yourself.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-8 lg:gap-10 items-stretch"
        >
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}