import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan Donayre | BSIT Student & Aspiring Developer",
  description:
    "Personal portfolio of Ryan Donayre, a 4th-year BSIT student at PUP Quezon City passionate about web development, systems analysis, and technology.",
  keywords: [
    "Ryan Donayre",
    "BSIT",
    "PUP",
    "Portfolio",
    "Web Developer",
    "IT Student",
    "Philippines",
  ],
  authors: [{ name: "Ryan Donayre" }],
  openGraph: {
    title: "Ryan Donayre | BSIT Student & Aspiring Developer",
    description:
      "Personal portfolio of Ryan Donayre, a 4th-year BSIT student at PUP Quezon City.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
