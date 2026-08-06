import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Permanent_Marker } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Maya Kiernan",
    template: "%s | Maya Kiernan",
  },
  description: "Portfolio of Maya Kiernan — researcher, innovator, and maker.",
  metadataBase: new URL("https://mayakiernan.com"),
  openGraph: {
    title: "Maya Kiernan",
    description: "Portfolio of Maya Kiernan — researcher, innovator, and maker.",
    url: "https://mayakiernan.com",
    siteName: "Maya Kiernan",
    images: [{ url: "/onk/main-image.jpg", width: 1200, height: 630, alt: "Maya Kiernan Portfolio" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${permanentMarker.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-black">{children}</body>
    </html>
  );
}
