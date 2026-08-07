import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heinminphyo.dev"),

  title: {
    default: "Hein Min Phyo | Senior Java Backend Developer",
    template: "%s | Hein Min Phyo",
  },

  description:
    "Senior Java Backend Developer with 5+ years experience in Spring Boot, Microservices, AI-assisted development, and enterprise web applications.",

  keywords: [
    "Hein Min Phyo",
    "Java",
    "Spring Boot",
    "Backend Developer",
    "Microservices",
    "AI-Assisted Development",
    "Next.js",
    "Portfolio",
    "Myanmar Developer",
  ],

  authors: [
    {
      name: "Hein Min Phyo",
    },
  ],

  creator: "Hein Min Phyo",

  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },

  openGraph: {
    title: "Hein Min Phyo",

    description:
      "Senior Java Backend Developer & AI-Assisted Full Stack Developer Portfolio",

    type: "website",

    locale: "en_US",

    siteName: "Hein Min Phyo Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hein Min Phyo",

    description:
      "Senior Java Backend Developer & AI-Assisted Full Stack Developer",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}