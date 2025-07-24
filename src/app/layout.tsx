import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Your Name - Data Engineer Portfolio",
  description: "Professional Data Engineer specializing in building scalable data pipelines, cloud infrastructure, and analytics solutions. Expert in Python, SQL, Apache Spark, AWS, and modern data stack technologies.",
  keywords: "Data Engineer, Data Pipeline, ETL, Apache Spark, AWS, Python, SQL, Big Data, Analytics, Cloud Computing",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Your Name - Data Engineer Portfolio",
    description: "Professional Data Engineer specializing in building scalable data pipelines and analytics solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Data Engineer Portfolio",
    description: "Professional Data Engineer specializing in building scalable data pipelines and analytics solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
