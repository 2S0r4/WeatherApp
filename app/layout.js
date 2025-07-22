import { Schibsted_Grotesk, Azeret_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const grotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const Azeret = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Weather App",
  description: "A weather application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${grotesk.variable} ${Azeret.variable} antialiased h-screen w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
