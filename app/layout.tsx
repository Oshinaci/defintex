import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Defintex",
    template: "%s | Defintex",
  },
  description:
    "Defintex is a decentralized value exchange protocol that transforms time, skills, and services into trusted on-chain assets.",
  keywords: [
    "Defintex",
    "Web3",
    "Blockchain",
    "Ethereum",
    "Layer 2",
    "DeFi",
    "Time Credit",
    "AI Matching",
  ],
  authors: [{ name: "Defintex Team" }],
  creator: "Defintex",
  metadataBase: new URL("https://defintex.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
