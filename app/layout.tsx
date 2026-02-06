import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Home/Navbar";
import Preloader from "@/components/Preloader";
import { LoadingProvider } from "@/contexts/LoadingContext";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",
  description: "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <LoadingProvider>
          <Preloader />
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
