import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
    title: "3G Consultants | Sri Lanka's Trusted Construction & Engineering Firm",
    description:
        "3G Consultants is a leading construction and engineering consulting firm in Sri Lanka, offering innovative, sustainable, and expert solutions for infrastructure development.",
    keywords: [
        "Sri Lanka construction",
        "engineering consulting Sri Lanka",
        "building contractors Sri Lanka",
        "infrastructure development",
        "civil engineering services",
        "project management",
        "construction consulting",
        "sustainable engineering",
        "3G Consultants"
    ],
    authors: [
        {
            name: "3G Consultants",
            url: "https://www.3gconsultants.lk/", // optional
        },
    ],
    creator: "3G Consultants",
    publisher: "3G Consultants",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "3G Consultants | Sri Lanka's Trusted Construction & Engineering Firm",
        description:
            "Delivering sustainable construction and engineering consulting services across Sri Lanka. Partner with 3G Consultants for your next big infrastructure project.",
        url: "https://www.3gconsultants.lk/", // replace with your actual domain
        siteName: "3G Consultants",
        images: [
            {
                url: "/3gLogo.png", // optional, add if you have Open Graph images
                width: 1200,
                height: 630,
                alt: "3G Consultants - Engineering Excellence in Sri Lanka",
            },
        ],
        locale: "en_LK",
        type: "website",
    },
};


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/3gLogo.png" />
      </head>
      <body
          className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
      <main className="flex-grow">{children}</main>
      </body>
      </html>
  );
}
