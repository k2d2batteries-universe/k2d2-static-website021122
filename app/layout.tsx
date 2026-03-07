import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "K2D2 Batteries & Motor Pumps — Chengalpattu",
  description:
    "Chengalpattu's #1 battery store. All kinds of batteries — car, inverter, solar, EV — and motor pumps. Best prices, free fitting, home delivery.",
  keywords: "battery shop chengalpattu, inverter battery, car battery, motor pump, K2D2",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rajdhani.variable}`}>
        {children}
      </body>
    </html>
  );
}
