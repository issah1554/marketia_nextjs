import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketia | Decision Support System",
  description:
    "A market analysis decision support dashboard for entrepreneurs and business owners.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
