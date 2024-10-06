// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
// Export metadata
export const metadata: Metadata = {
  title: "Talent Trove",
  description: "Modern talent management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
