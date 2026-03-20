import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: {
    default: "Vishal L.R | AI Engineer & Full-Stack Developer",
    template: "%s | Vishal L.R",
  },
  description:
    "Portfolio of Vishal L.R, AI Engineer & Full-Stack Developer. Explore projects, skills, and hackathon achievements.",
  keywords: [
    "Vishal L.R",
    "AI",
    "Data Science",
    "Portfolio",
    "Machine Learning",
    "Full-Stack Development",
  ],
  authors: [{ name: "Vishal L.R" }],
  openGraph: {
    title: "Vishal L.R | AI Engineer & Full-Stack Developer",
    description: "Portfolio of Vishal L.R, AI Engineer & Full-Stack Developer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface font-sans text-text-primary">
        <Navbar />
        <div className="flex-1 pt-[73px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
