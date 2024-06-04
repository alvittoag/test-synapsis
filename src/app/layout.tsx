import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Container from "@/components/ui/Container";
import { Toaster } from "@/components/ui/toaster";
import { RecoilRoot } from "recoil";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Test Syanapsis Alvitto",
  description: "Challange Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <Container>
          <Navbar />
          {children}
        </Container>

        <Toaster />
      </body>
    </html>
  );
}
