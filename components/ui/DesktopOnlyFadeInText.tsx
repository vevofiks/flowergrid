"use client";

import React, { useState, useEffect } from "react";
import FadeInText from "@/components/Home/FadeInText";

export default function DesktopOnlyFadeInText() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) return null;

  return <FadeInText />;
}