import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/views/Footer";
import Chat from "@/components/ui/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tobiloba Ibraheem - Frontend Engineer",
  description: "Portfolio of Tobiloba Ibraheem, a frontend engineer specializing in React, Next.js, and modern web technologies.",
  keywords: "frontend developer, React developer, Next.js, web development, portfolio",
  authors: [{ name: "Tobiloba Ibraheem" }],
  creator: "Tobiloba Ibraheem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tobiloba-ibraheem.vercel.app",
    title: "Tobiloba Ibraheem - Frontend Engineer",
    description: "Portfolio of Tobiloba Ibraheem, a frontend engineer specializing in React, Next.js, and modern web technologies.",
    siteName: "Tobiloba Ibraheem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobiloba Ibraheem - Frontend Engineer",
    description: "Portfolio of Tobiloba Ibraheem, a frontend engineer specializing in React, Next.js, and modern web technologies.",
    creator: "@Im_Tobilobah",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FloatingNav />
        {children}
        <Footer />
        <Chat />
        <ToastContainer />
      </body>
    </html>
  );
}
