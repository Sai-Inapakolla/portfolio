import type { Metadata } from "next";
import { Comfortaa, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const displayFont = Comfortaa({
  variable: "--font-display",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const monoFont = DM_Mono({
  variable: "--font-mono",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description:
    "Full-stack developer and creative engineer. Building the future with code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
