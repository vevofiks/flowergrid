"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "../Home/HeroTestimonials";

interface MovingTestimonialsProps {
    testimonials: Testimonial[];
}

export default function MovingTestimonials({ testimonials }: MovingTestimonialsProps) {
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="w-full overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    },
                }}
                style={{
                    width: "fit-content",
                }}
            >
                {duplicatedTestimonials.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="w-[350px] md:w-[350px] h-[420px] md:h-[420px] shrink-0 mx-6 p-8 bg-[#E6D7C3] rounded-3xl flex flex-col"
                    >
                        <p className="text-[#4E351A] text-base md:text-lg leading-relaxed font-sans grow overflow-hidden">
                            "{item.quote}"
                        </p>

                        <div className="mt-auto pt-6">
                            <div className="h-px w-full bg-[#BFA894] mb-6"></div>

                            <div className="flex items-center">
                                {item.image && (
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={item.image}
                                            alt={item.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-[#4E351A] font-heading font-medium text-lg">
                                        — {item.author}
                                    </h4>
                                    <div className="flex text-[#BFA894]">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <div key={i} className="mr-1">
                                                <Star className="w-4 h-4 fill-current text-yellow-600" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}