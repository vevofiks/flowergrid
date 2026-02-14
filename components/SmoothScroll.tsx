"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        // Check if iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        // On iOS, native momentum scrolling is often better/more stable
        // We can either disable it or configure it very conservatively
        const lenis = new Lenis({
            duration: isIOS ? 1.0 : 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}
