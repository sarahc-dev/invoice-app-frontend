import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/Header";
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
    <html lang="en" suppressHydrationWarning>
      <body className={spartan.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
