import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className={`${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
