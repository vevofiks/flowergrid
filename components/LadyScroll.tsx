"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LadyScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const frameCount = 39;
    const currentFrameRef = useRef(0);
    const rafIdRef = useRef<number | null>(null);
    const lastFrameRef = useRef(-1);
    const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Text content matching the reference images
    const textSections = [
        { text: "Your health", frame: 8, index: 0 },
        { text: "is", frame: 16, index: 1 },
        { text: "holistically", frame: 20, index: 2 },
        { text: "in focus", frame: 32, index: 3 },
    ];

    // Optimized render function with RAF batching
    const render = useCallback((index: number) => {
        // Skip if same frame
        if (lastFrameRef.current === index) return;
        lastFrameRef.current = index;

        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!img || !canvas) return;

        const context = canvas.getContext("2d", {
            alpha: false, // Disable alpha for better performance
            desynchronized: true // Allow async rendering
        });
        if (!context) return;

        // Use RAF for smoother rendering
        if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = requestAnimationFrame(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate scaling to cover the canvas while maintaining aspect ratio
            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );

            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Debounced resize handler
        const setCanvasSize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-render current frame after resize
            if (imagesLoaded) {
                render(Math.round(currentFrameRef.current));
            }
        };

        const handleResize = () => {
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            resizeTimeoutRef.current = setTimeout(setCanvasSize, 150);
        };

        setCanvasSize();
        window.addEventListener("resize", handleResize);

        // Preload all images with optimized loading
        const loadImages = async () => {
            const imagePromises = [];
            for (let i = 3; i <= 41; i++) {
                const img = new Image();
                // Enable image decoding optimization
                img.decoding = "async";
                const frameNumber = i.toString().padStart(3, "0");
                img.src = `/yoga-frames/ezgif-frame-${frameNumber}.jpg`;

                const promise = new Promise<HTMLImageElement>((resolve, reject) => {
                    img.onload = () => {
                        setLoadingProgress((prev) => prev + (100 / frameCount));
                        resolve(img);
                    };
                    img.onerror = reject;
                });

                imagePromises.push(promise);
                imagesRef.current.push(img);
            }

            try {
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error("Error loading images:", error);
            }
        };

        loadImages();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (resizeTimeoutRef.current) {
                clearTimeout(resizeTimeoutRef.current);
            }
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [imagesLoaded, render]);

    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

        render(0);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5, // Reduced from 1 for smoother performance
                pin: canvasRef.current.parentElement,
                anticipatePin: 1, // Optimize pinning
                invalidateOnRefresh: true,
            },
        });

        tl.to(currentFrameRef, {
            current: frameCount - 1,
            ease: "none",
            onUpdate: () => {
                const frameIndex = Math.round(currentFrameRef.current);
                render(frameIndex);
            },
        });

        // Animate text sections with optimized settings
        textSections.forEach((section, index) => {
            const textElement = document.querySelector(
                `[data-text-index="${index}"]`
            ) as HTMLElement;

            if (textElement) {
                gsap.fromTo(
                    textElement,
                    {
                        y: 100,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: `${(section.frame / frameCount) * 100 - 10}% top`,
                            end: `${(section.frame / frameCount) * 100}% top`,
                            scrub: 0.5, // Reduced for smoother performance
                            invalidateOnRefresh: true,
                        },
                    }
                );

                gsap.to(textElement, {
                    y: -100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `${(section.frame / frameCount) * 100 + 10}% top`,
                        end: `${(section.frame / frameCount) * 100 + 20}% top`,
                        scrub: 0.5, // Reduced for smoother performance
                        invalidateOnRefresh: true,
                    },
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [imagesLoaded, render]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        willChange: "contents",
                        transform: "translate3d(0, 0, 0)", // GPU acceleration
                    }}
                />

                {/* Text Overlays */}
                {imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="relative w-full h-full">
                            {textSections.map((section) => (
                                <div
                                    key={section.index}
                                    data-text-index={section.index}
                                    className="absolute inset-0 flex items-center  justify-center"
                                    style={{
                                        alignItems: section.index === 0 ? "flex-end" : section.index === 1 ? "flex-start" : section.index === 2 ? "flex-start" : "center",
                                        marginBottom: section.index === 0 ? "7%" : section.index === 3 ? "25%" : "0%",
                                        marginTop: section.index === 1 ? "5%" : section.index === 2 ? (window.innerWidth < 1024 ? "25%" : "15%") : "0%",
                                        justifyContent: section.index === 0 ? "flex-end" : "flex-start",
                                        paddingRight: section.index === 0 ? "10%" : "0",
                                        paddingLeft: section.index === 0 ? "0" : "10%",
                                        willChange: "transform, opacity",
                                        transform: "translate3d(0, 0, 0)",
                                    }}
                                >
                                    <h2 className={`text-6xl sm:text-[80px] md:text-[120px] lg:text-[120px] ${section.index === 1 ? "sm:py-20" : ""} font-normal !text-background tracking-wide px-4 sm:px-0 italic`}>
                                        {section.text}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LadyScroll;
