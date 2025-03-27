import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/views/Footer";
import ChatFeature from "@/components/ui/Chat";
import Head from "next/head";

const geistSans = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Tobiloba Ibraheem | Frontend Engineer",
  description:
    "Explore the portfolio of Tobiloba Ibraheem, a frontend engineer specializing in crafting elegant, user-friendly web solutions.",
  openGraph: {
    title: "Tobiloba Ibraheem | Frontend Engineer",
    description: "A dedicated frontend engineer👨🏽‍💻 with a knack for transforming complex challenges into elegant, user-friendly solutions.",
    url: "https://tobiloba-ibraheem-site.vercel.app/",
    siteName: "Tobiloba Ibraheem Portfolio",
    images: [
      {
        url: "/assets/img192.png",
        width: 1200,
        height: 630,
        alt: "Tobiloba Ibraheem Portfolio",
      },
    ],
    locale: ["en_US","en_NG"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
        <link rel="canonical" href={metadata.openGraph.url} />
      </Head>
      <body className={`${geistSans.variable} ${jetBrainsMono.variable} antialiased`}>
        <FloatingNav />
        <ToastContainer position="bottom-center" autoClose={4000} hideProgressBar={false} closeOnClick transition={Slide} theme="dark" />
        {children}
        <ChatFeature />
        <Footer />
      </body>
    </html>
  );
}
