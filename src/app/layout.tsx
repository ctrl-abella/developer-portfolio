import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franz Christian Abella | Full-Stack Developer",
  description: "Portfolio of Franz Christian Abella, a full-stack developer specializing in web and mobile application development.",
  keywords: [
    "Franz Christian Abella",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Kotlin",
    "Jetpack Compose",
  ],
  openGraph: {
    title: "Franz Christian Abella | Full-Stack Developer",
    description:
      "Portfolio of Franz Christian Abella, a full-stack developer specializing in web and mobile application development.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        
        </body>
    </html>
  );
}
