import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://teamo.ng'),
  title: "TeaMo IT Solutions | Professional Tech Support & Web Services in Lagos",
  description: "Expert IT solutions, web development, and tech support services in Lagos. Family-driven tech excellence with a focus on trust, innovation, and reliable service.",
  keywords: "tech support lagos, IT services nigeria, web development lagos, website management lagos, hosting nigeria, workstation setup lagos",
  authors: [{ name: "TeaMo IT Solutions" }],
  openGraph: {
    title: "TeaMo IT Solutions | Professional Tech Support & Web Services",
    description: "Expert IT solutions and tech support services in Lagos. Trusted by businesses and individuals.",
    type: "website",
    locale: "en_NG",
    siteName: "TeaMo IT Solutions",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaMo IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeaMo IT Solutions | Professional Tech Support & Web Services',
    description: 'Expert IT solutions and tech support services in Lagos. Trusted by businesses and individuals.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
