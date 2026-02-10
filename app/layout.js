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
  title: "Marcelo Maia — Web Developer",
  description:
    "Marcelo Maia is a web developer focused on building fast, well-structured, content-driven web applications. Specializing in Next.js, React, and Payload CMS, with an emphasis on performance, maintainability, and editor-friendly experiences.",
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
