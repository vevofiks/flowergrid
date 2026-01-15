import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Home/Navbar";
import Preloader from "@/components/Preloader";
import { LoadingProvider } from "@/contexts/LoadingContext";

export const metadata: Metadata = {
  title: "Flower Grid",
  description: "Flower Grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <LoadingProvider>
          <Preloader />
          <SmoothScroll />
          <Navbar />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
