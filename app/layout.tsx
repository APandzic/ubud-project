import "./globals.css";
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { RoiProvider } from "./roi-context";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ubud ROI Calculator",
  description: "Build more rooms or invest in facilities?",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} flex min-h-screen bg-white`}>
        <RoiProvider>
          <Sidebar />
          <main className="flex-1 overflow-auto pt-14 md:pt-0">{children}</main>
        </RoiProvider>
      </body>
    </html>
  );
}
