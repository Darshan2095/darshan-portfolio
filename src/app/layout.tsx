import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://darshanbabariya.dev"),
  title: "Darshan Babariya | Full Stack Engineer & Next.js Developer",
  description:
    "Portfolio of Darshan Babariya, Full Stack Engineer & Computer Engineering Student @ VGEC specializing in Next.js, MERN stack, and AI web applications.",

  keywords: [
    "Darshan Babariya",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "VGEC",
    "HireAI",
    "RentEase",
  ],

  authors: [{ name: "Darshan Babariya" }],

  openGraph: {
    title: "Darshan Babariya | Full Stack Engineer",
    description:
      "Explore projects, skills, and experience of Darshan Babariya — Full Stack Developer specializing in Next.js and MERN.",
    url: "https://darshanbabariya.dev",
    siteName: "Darshan Babariya Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Darshan Babariya | Full Stack Engineer",
    description:
      "Full Stack Developer specializing in Next.js, MERN stack, and modern web apps.",
    images: ["/og-image.png"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
