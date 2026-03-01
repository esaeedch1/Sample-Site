import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CutiXa Adore - Love Your Skin",
  description: "Experience premium skincare with CutiXa Adore. Love Your Skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfitFont.variable}>
        {children}
      </body>
    </html>
  );
}
