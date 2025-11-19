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

// const robotoSerif = Roboto_Serif({
//   variable: "--font-roboto-serif",
//   weight: ["400"],
//   subsets: ["latin"]
// })

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"]
// })
export const metadata: Metadata = {
  title: "CV Andreas Hansen",
  description: "CV Andreas Hansen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
