import {
  Space_Grotesk,
  Source_Sans_3,
  Spline_Sans,
  Sedan,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

// Setup font Google-nya
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
});
const sedan = Sedan({
  variable: "--font-sedan",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Raihan Mulyana | Portfolio",
  description: "Frontend Developer & UI/UX Designer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${sourceSans3.variable} ${splineSans.variable} ${sedan.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
