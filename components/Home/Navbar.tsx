"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLunaHovered, setIsLunaHovered] = useState(false);
  const container = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);


  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      })
      .from(".nav-item", {
        y: 50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      }, "-=0.2");
  }, { scope: container });

  const toggleMenu = () => {
    if (!tl.current) return;
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <header ref={container} className="fixed top-0 left-0 w-full z-50 px-10 py-4 flex justify-between items-center text-white">

      <Link href="/" className="z-50 relative w-20 h-20">
        <Image
          src="/Logo/Flowergrid-logo.png"
          alt="Luna Logo"
          width={58}
          height={58}
          className="object-contain"
          priority
        />
      </Link>

      <div className="z-50 relative flex items-center gap-4 md:gap-6">
        <button className="hidden sm:flex relative items-center gap-3 mr-2 pl-4 pr-12 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <span className="text-sm font-sans tracking-wide">Chat with Luna</span>
          <div
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-14 h-13 rounded-full flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsLunaHovered(true)}
            onMouseLeave={() => setIsLunaHovered(false)}
          >
            <Image
              src={isLunaHovered ? "/Logo/Luna eyes open.png" : "/Logo/Header Luna.png"}
              alt="Luna Logo"
              width={60}
              height={60}
              className="object-contain transition-opacity duration-200"
              priority
            />
          </div>
        </button>
        <button className="hover:opacity-70 transition-opacity" aria-label="Search">
          <Search size={24} strokeWidth={1.5} />
        </button>

        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:opacity-70 transition-opacity"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#1a1a1a] text-[#F3E5CB] flex flex-col justify-center items-center -translate-y-full will-change-transform"
      >
        <nav className="flex flex-col gap-4 text-center">
          {navLinks.map((link, index) => (
            <div key={index} className="nav-item overflow-hidden">
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="font-heading text-5xl md:text-7xl hover:text-[#A7683A] transition-colors duration-300 block"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}