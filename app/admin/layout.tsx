import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "FlowerGrid Admin",
    description: "Admin Dashboard",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
