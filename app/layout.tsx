import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://waitlist.codinit.dev"),
  title: "Waitlist | CodinIT.dev",
  description:
    "Join the waitlist for CodinIT.dev, a open-source platform that builds you your next startup idea with AI.",
  openGraph: {
    siteName: "Join The Waitlist | CodinIT.dev",
    images: [
      {
        url: "/opengraph.png",
        type: "image/png",
        width: 1280,
        height: 832,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/twitter-image.png",
        type: "image/png",
        width: 1280,
        height: 832,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
