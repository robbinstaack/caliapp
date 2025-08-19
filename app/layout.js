import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for Product Team Workshop
export const metadata = {
  title: "Product Workshop - Web Development Training",
  description:
    "Comprehensive workshop guide for product teams learning web development. Includes setup instructions, agenda, and step-by-step tutorials for modern web development.",
  keywords:
    "workshop, web development, training, react, nextjs, javascript, product team",
  author: "Product Workshop Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
