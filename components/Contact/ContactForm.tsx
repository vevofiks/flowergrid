"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", country: "", description: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = "Please select a country.";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      toast.error("Please check the fields and try again.");
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    const toastId = toast.loading("Booking your session...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", country: "", description: "" });
      setErrors({ name: "", email: "", phone: "", country: "", description: "" });

      toast.update(toastId, {
        render: "Discovery Session Booked Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 5000
      });

      setTimeout(() => setStatus("idle"), 5000);

    } catch (error) {
      console.error(error);
      setStatus("error");

      toast.update(toastId, {
        render: "Something went wrong. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000
      });
    }
  };

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
    <section ref={containerRef} className="w-full min-h-screen flex flex-col md:flex-row bg-[#F3EAD8]">


      <ToastContainer position="top-left" theme="colored" />

      <div ref={imageRef} className="relative w-full md:w-1/2 h-[25vh] md:h-auto md:min-h-screen shrink-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}contact/form-img.png`}
          alt="Hands holding a crystal"
          fill
          className="object-cover md:object-contain rounded-4xl drop-shadow m-4"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 h-full bg-[#F3EAD8] flex flex-col justify-center">
        <div ref={contentRef} className="w-full flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
          <h1 className="text-[#2D3F28] text-2xl md:text-4xl lg:text-5xl font-heading font-normal mb-2 md:mb-4">
            Connect with Flowergrid
          </h1>
          <p className="text-[#4A4A4A] text-xs md:text-base font-sans mb-4 md:mb-8 max-w-lg leading-snug">
            Get in touch to receive holistic guidance for mind, body, and spirit wellbeing and personal growth.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-3 md:gap-4">


            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                placeholder="Enter your full name"
                className={`w-full bg-[#DCCEA1]/60 border ${errors.name ? 'border-red-500' : 'border-transparent'} focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300`}
              />
              {errors.name && <span className="text-red-500 text-[10px] md:text-xs pl-1">{errors.name}</span>}
            </div>


            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="Enter your email"
                className={`w-full bg-[#DCCEA1]/60 border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300`}
              />
              {errors.email && <span className="text-red-500 text-[10px] md:text-xs pl-1">{errors.email}</span>}
            </div>


            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                placeholder="Enter your phone number"
                className={`w-full bg-[#DCCEA1]/60 border ${errors.phone ? 'border-red-500' : 'border-transparent'} focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300`}
              />
              {errors.phone && <span className="text-red-500 text-[10px] md:text-xs pl-1">{errors.phone}</span>}
            </div>


            <div className="flex flex-col gap-1">
              <label htmlFor="country" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">Country</label>
              <div className="relative">
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => {
                    setFormData({ ...formData, country: e.target.value });
                    if (errors.country) setErrors({ ...errors, country: "" });
                  }}
                  className={`w-full bg-[#DCCEA1]/60 border ${errors.country ? 'border-red-500' : 'border-transparent'} focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm outline-none appearance-none transition-all duration-300 cursor-pointer`}
                >
                  <option value="" disabled>Select your country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#1C1C1C]/60">
                  <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {errors.country && <span className="text-red-500 text-[10px] md:text-xs pl-1">{errors.country}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="text-[#1C1C1C] text-[10px] md:text-xs font-sans tracking-wide">Description</label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                  if (errors.description) setErrors({ ...errors, description: "" });
                }}
                placeholder="Enter your description"
                className={`w-full bg-[#DCCEA1]/60 border ${errors.description ? 'border-red-500' : 'border-transparent'} focus:border-[#8C7A65] focus:bg-[#DCCEA1]/80 rounded-lg px-3 py-2 md:px-4 md:py-3 text-[#1C1C1C] text-xs md:text-sm placeholder-[#1C1C1C]/50 outline-none transition-all duration-300`}
              />
              {errors.description && <span className="text-red-500 text-[10px] md:text-xs pl-1">{errors.description}</span>}
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`mt-2 w-full font-medium text-sm md:text-base py-3 rounded-lg transition-all duration-300 shadow-md ${status === "success"
                ? "bg-green-700 text-white cursor-default"
                : "bg-[#9C8255] hover:bg-[#856E46] text-white"
                }`}
            >
              {status === "loading" ? "Booking..." : status === "success" ? "Session Booked!" : "Book a Discovery Session"}
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}