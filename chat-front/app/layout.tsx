import type { Metadata } from "next";
import { Head } from "next/document"; // Добавляем next/document
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Chat",
  description: "Generated by Yevhen Ilnytskyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}