import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Darshan Babariya | Full Stack Developer",
  description:
    "Portfolio of Darshan Babariya, a Full Stack Developer specializing in Next.js, MERN stack, and modern web applications.",

  keywords: [
    "Darshan Babariya",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
  ],

  authors: [{ name: "Darshan Babariya" }],

  openGraph: {
    title: "Darshan Babariya | Full Stack Developer",
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
    title: "Darshan Babariya | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js and MERN stack.",
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
      <body className={`${inter.variable} font-sans`}>
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
