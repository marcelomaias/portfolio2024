import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "300 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "300 900",
});

export const metadata = {
  title: "Marcelo Maia - Web development",
  description:
    "Marcelo Maia - Web Developer with a passion for building fast, user-friendly websites. Skilled in HTML, CSS, JavaScript, React, NextJS, Tailwind, and WordPress. Explore diverse web projects with a focus on performance and seamless user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
