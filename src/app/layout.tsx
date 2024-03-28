import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/app-header/app-header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Great service for foodies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Executing... layout.tsx");
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppHeader />
        <main className="p-4 mx-auto max-w-screen-lg">{children}</main>
      </body>
    </html>
  );
}
