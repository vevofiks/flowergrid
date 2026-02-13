import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Home/Navbar";
import Preloader from "@/components/Preloader";
import { LoadingProvider } from "@/contexts/LoadingContext";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",
  description: "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isAdminRoute = pathname.startsWith("/admin") || pathname.startsWith("/blogs/editor");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <LoadingProvider>
          {!isAdminRoute && <Preloader />}
          {!isAdminRoute && <SmoothScroll />}
          {!isAdminRoute && <Navbar />}
          {children}
          {!isAdminRoute && <Footer />}
          {!isAdminRoute && <ScrollToTop />}
        </LoadingProvider>
      </body>
    </html>
  );
}
