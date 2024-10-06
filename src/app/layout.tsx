import type { Metadata } from "next";
import "./globals.css";
import Text from "@/components/Test/Text";
export const metadata: Metadata = {
  title: "Talent Trove",
  description: "Modern  talent management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}> {children}</body>
    </html>
  );
}
