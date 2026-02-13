"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function B2bHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
      },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`/b2b/hero.jpg`}
          alt="Wellness session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        className="relative z-10 h-full max-w-[90vw] mx-auto flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-220">
          <motion.h1
            variants={itemVariants}
            // FIXED: Used leading-[1.15] (115%) for a consistent heading tightness across all screen sizes
            className="text-white! text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.15] mb-6"
          >
            Transform Your Organisation with Corporate Wellbeing programmes &
            Leadership Coaching.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            // FIXED: Used leading-[1.6] (160%) for body text. 
            // This creates a standard "Golden Ratio" relationship with the heading line-height.
            className="text-white/90! text-base md:text-lg font-light! leading-[1.6] tracking-wide mb-10 max-w-2xl"
          >
            Flowergrid helps businesses, universities, and institutions build
            resilient, emotionally intelligent teams through tailored coaching
            and evidence-based corporate wellbeing programmes.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {/* FIXED: Both buttons now use 'text-lg' and explicit leading-none to ensure identical height alignment */}
            <button className="bg-[#C19A6B] hover:bg-[#A8865A] text-white font-medium text-lg leading-none py-5 px-8 max-w-full md:max-w-[20rem] rounded-full transition-colors duration-300">
              Book a Discovery Session
            </button>
            
            {/* FIXED: Changed text-md (invalid) to text-lg (valid) so it matches the button above exactly */}
            <button className="border text-white hover:bg-[#C19A6B]/10 font-medium text-lg leading-none py-5 px-8 max-w-full md:max-w-120 rounded-full transition-colors duration-300">
              Download programme Brochure
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}