import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice App",
  description: "An invoice management application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spartan.className} min-h-screen`}>{children}</body>
    </html>
  );
}
