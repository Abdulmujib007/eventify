// 'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecule/Navbar";
import Footer from "@/components/molecule/Footer";
import { AuthProvider } from "../../context/AuthContext";
import AuthGuard from "@/components/organism/AuthGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eventify Web App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col `}
      >
        <AuthProvider>
          <AuthGuard>
            <Navbar />
            <main className="flex flex-col flex-grow overflow-y-auto main-style">
              {children}

              <Footer />
            </main>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
