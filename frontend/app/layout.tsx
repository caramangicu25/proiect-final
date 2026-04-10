import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FleetCore — Manage Your Fleet. Smarter.",
  description: "Professional fleet management platform for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
