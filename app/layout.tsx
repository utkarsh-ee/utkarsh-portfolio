import type { Metadata } from "next";
import "./globals.css";

const title = "Utkarsh — Electronic Systems";
const description =
  "Utkarsh — Electronic Systems engineering student building embedded control systems, instrumentation, and physical hardware.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Utkarsh — Electronic Systems",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
