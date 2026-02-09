"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ArrowRight, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const navLinks = [
  { title: "Home", href: "/" },
  {
    title: "About",
    href: "/about",
    subLinks: [
      {
        title: "Samina Khan",
        href: "/about/person1",
        image: `${process.env.NEXT_PUBLIC_IMGURL}about/person1/saminahalf.png`,
      },
      {
        title: "Monira",
        href: "/about/person2",
        image: `/about/person2/1.png`,
      },
      {
        title: "Team",
        href: "/about/team",
        image: `/b2b/4.jpg`,
      },
    ],
  },
  { title: "Services", href: "/services" },
  { title: "Membership", href: "/membership" },
  {
    title: "Workshops",
    href: "/programs",
    subLinks: [
      {
        title: "Programs",
        href: "/programs",
      },
      {
        title: "Corporate Programs",
        href: "/programs/b2b",
        image: `/b2b/1.jpg`,
      },
    ],
  },
  { title: "Journals", href: "/blogs" },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLunaHovered, setIsLunaHovered] = useState(false);


  const [activeImage, setActiveImage] = useState<string | null>(null);

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const container = useRef<HTMLElement>(null);
  const menuRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isMenuOpenRef = useRef(isOpen);

  useEffect(() => {
    isMenuOpenRef.current = isOpen;
  }, [isOpen]);

  useGSAP(() => {

    tl.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power3.inOut",
      })

      .from(".nav-item", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      }, "-=0.3")

      .from(imageRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4");


    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (isMenuOpenRef.current) return;

        if (self.direction === -1) {
          gsap.to(container.current, {
            yPercent: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        } else if (self.direction === 1 && self.scroll() > 50) {
          gsap.to(container.current, {
            yPercent: -100,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        }
      },
    });
  }, { scope: container });

  const toggleMenu = () => {
    if (!tl.current) return;
    if (isOpen) {
      tl.current.reverse();

      setTimeout(() => {
        setActiveImage(null);
        setActiveSubmenu(null);
      }, 600);
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const handleLinkHover = (image?: string) => {
    if (image) {
      setActiveImage(image);
    }
  };

  const handleLinkLeave = () => {



  };


  const prevSubmenuRef = useRef<number | null>(null);

  useGSAP(() => {

    if (prevSubmenuRef.current !== null && activeSubmenu === null) {
      const closingIndex = prevSubmenuRef.current;

      gsap.to(`.submenu-${closingIndex} .sublink-item`, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "expo.in",
      });

      gsap.to(`.submenu-${closingIndex}`, {
        height: 0,
        opacity: 0,
        marginTop: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
      });
    }


    if (activeSubmenu !== null) {
      gsap.fromTo(
        `.submenu-${activeSubmenu}`,
        {
          height: 0,
          opacity: 0,
          marginTop: 0,
        },
        {
          height: "auto",
          opacity: 1,
          marginTop: 8,
          duration: 0.5,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        `.submenu-${activeSubmenu} .sublink-item`,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "expo.out",
        }
      );
    }

    prevSubmenuRef.current = activeSubmenu;
  }, [activeSubmenu]);

  return (
    <header
      ref={container}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center text-white bg-transparent transition-colors duration-300"
    >
      <Link href="/" className="z-50 relative w-16 h-16 md:w-20 md:h-20">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMGURL}logo/Flowergrid-logo.png`}
          alt="Luna Logo"
          width={58}
          height={58}
          className="object-contain"
          priority
        />
      </Link>

      <div className="z-50 relative flex items-center gap-3 md:gap-6">

        {/* Luna Chat Button */}
        <Link href="https://flowergrid.vercel.app/" target="_blank" className="flex relative items-center gap-3 mr-2 px-2 md:pl-4 md:pr-12 py-1 h-10 md:h-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <span className="hidden md:inline text-xs md:text-sm font-sans tracking-wide">Chat with Luna</span>
          <div
            className="relative md:absolute md:-right-3 md:top-1/2 md:-translate-y-1/2 w-8 h-8 md:w-14 md:h-13 rounded-full flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsLunaHovered(true)}
            onMouseLeave={() => setIsLunaHovered(false)}
          >
            <Image
              src={
                isLunaHovered
                  ? `/logo/Luna eyes open.png`
                  : `/logo/Header Luna.png`
              }
              alt="Luna Logo"
              width={60}
              height={60}
              className="object-contain transition-opacity duration-200"
              priority
            />
          </div>
        </Link >
        {/* Book Consultation Button */}
        <Link
          href="https://calendly.com/flowergridmarketing/30min?month=2026-02"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 md:px-6 md:py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-white"
        >
          <Calendar className="w-5 h-5 md:hidden" />
          <span className="hidden md:inline text-sm font-sans tracking-wide">Book Consultation</span>
        </Link>


        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:opacity-70 transition-opacity"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={28} strokeWidth={1.5} />
          ) : (
            <Menu size={28} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-[#1a1a1a] text-[#F3E5CB] flex flex-col lg:flex-row -translate-y-full will-change-transform overflow-y-auto lg:overflow-hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-full max-w-400 mx-auto flex flex-col lg:flex-row">

          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start px-6 sm:px-8 md:px-16 pt-24 pb-10 lg:py-0">
            <nav className="flex flex-col gap-4 sm:gap-5 lg:gap-4">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="nav-item lg:pl-40"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {

                      if (link.subLinks && link.subLinks.length > 0) {
                        e.preventDefault();
                        setActiveSubmenu(activeSubmenu === index ? null : index);
                      } else {
                        setActiveSubmenu(null);
                        toggleMenu();
                      }
                    }}
                    className="font-heading text-3xl sm:text-4xl md:text-5xl hover:text-[#A7683A] transition-colors duration-300 block w-fit"
                    onMouseEnter={() => setActiveImage(null)}
                  >
                    {link.title}
                  </Link>

                  {link.subLinks && activeSubmenu === index && (
                    <div className={`submenu-${index} flex flex-col gap-2 ml-2 md:ml-4 pl-4 md:pl-6 border-l-2 border-white/20 overflow-hidden`}>
                      {link.subLinks.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sub.href}
                          onClick={() => {
                            setActiveSubmenu(null);
                            toggleMenu();
                          }}
                          onMouseEnter={() => handleLinkHover(sub.image)}
                          onMouseLeave={handleLinkLeave}
                          className="sublink-item group flex items-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl text-white/60 hover:text-[#F3E5CB] transition-colors duration-300 w-fit"
                        >
                          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                          </span>
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative p-20">
            <div
              ref={imageRef}
              className="relative w-full h-150 rounded-xl overflow-hidden"
            >
              {!activeImage && (
                <div className="absolute inset-0 flex items-center justify-center text-white/5 font-heading text-9xl uppercase select-none">
                  Menu
                </div>
              )}

              {activeImage && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={activeImage}
                    alt="Menu Preview"
                    fill
                    className="object-contain transition-all duration-500 ease-in-out rounded-3xl"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}