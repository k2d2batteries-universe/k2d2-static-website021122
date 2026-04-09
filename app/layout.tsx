import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  title: "K2D2 Batteries & Motor Pumps — Chengalpattu | Best Price, Free Fitting",
  description:
    "K2D2 is Chengalpattu's #1 battery store. Car, inverter, solar, EV, industrial batteries & motor pumps. All top brands — Exide, Amaron, Luminous. Free fitting, home delivery, same-day service.",
  keywords: "battery shop chengalpattu, inverter battery chengalpattu, car battery, amaron battery, exide battery, motor pump, K2D2 batteries, UPS battery, solar battery",
  openGraph: {
    title: "K2D2 Batteries & Motor Pumps — Chengalpattu",
    description: "All kinds of batteries & motor pumps. Exide, Amaron, Luminous and more. Free fitting, home delivery. Call +91 72000 25072.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "K2D2 Batteries & Motor Pumps",
  "description": "Chengalpattu's #1 battery and motor pump store. All brands — Exide, Amaron, Luminous, Okaya, Microtek, SF Sonic. Free fitting, home delivery, best exchange rates.",
  "telephone": "+917200025072",
  "email": "k2d2.batteries@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chengalpattu",
    "postalCode": "603308",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.6921,
    "longitude": 79.9616
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Card",
  "areaServed": {
    "@type": "City",
    "name": "Chengalpattu"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Batteries & Motor Pumps",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Car & Bike Batteries" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Inverter & UPS Batteries" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Solar Batteries" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "E-Bike & E-Rickshaw Batteries" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Water Motor Pumps" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Industrial & VRLA Batteries" } }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash: read saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('k2d2-theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
        {/* JSON-LD Structured Data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${rajdhani.variable}`}>
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}
