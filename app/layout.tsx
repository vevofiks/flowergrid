import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Home/Navbar";
import Preloader from "@/components/Preloader";
import { LoadingProvider } from "@/contexts/LoadingContext";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const host = (await headersList).get("host") || "";

  const isUK = host.includes("flowergrid.co.uk");

  const baseUrl = isUK
    ? "https://flowergrid.co.uk"
    : "https://flowergriid.com";

  return {
    metadataBase: new URL(baseUrl),

    title:
      "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",

    description: isUK
      ? "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity in Croydon, UK."
      : "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity worldwide.",

    alternates: {
      canonical: baseUrl,
      languages: {
        "en": "https://flowergriid.com",
        "en-GB": "https://flowergrid.co.uk",
      },
    },

    openGraph: {
      title:
        "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",
      description: isUK
        ? "Holistic wellness and transformation coaching in Croydon, UK."
        : "Global holistic wellness and transformation coaching.",
      url: baseUrl,
      siteName: "Flowergrid",
      locale: isUK ? "en_GB" : "en_US",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}




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
