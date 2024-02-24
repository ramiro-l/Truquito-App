import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import "../styles/globals.css";
import { title, description } from "@/data/content.json";

const font = Grandstander({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className + " text-primary"}>{children}</body>
    </html>
  );
}
