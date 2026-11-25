import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Akram Guroo - Full Stack Developer",
  description: "Portfolio showcasing full-stack projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />

        <main className="flex-1">{children}</main>

        <footer className="bg-white text-gray-500 border-t border-gray-200 py-6 text-center text-sm">
          © {new Date().getFullYear()} Akram Guroo. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
