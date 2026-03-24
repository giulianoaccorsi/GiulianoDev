import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giuliano Accorsi — Mobile Developer",
  description: "Mobile Developer crafting native iOS and cross-platform experiences",
  metadataBase: new URL("https://giuliano.work"),
  authors: [{ name: "Giuliano Accorsi" }],
  openGraph: {
    title: "Giuliano Accorsi — Mobile Developer",
    description: "Mobile Developer crafting native iOS and cross-platform experiences",
    url: "https://giuliano.work",
    siteName: "Giuliano Accorsi",
    type: "website",
  },
  icons: {
    icon: "/media/favicons/favicon.png",
    apple: "/media/favicons/apple-touch-icon.png",
  },
  manifest: "/media/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
