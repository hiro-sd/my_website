import type { Metadata } from "next";
import { Bungee_Outline, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const bungeeOutline = Bungee_Outline({
  subsets: ["latin"],
  variable: "--font-display-outline",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hirotoyoshida.vercel.app"),
  title: {
    default: "Hiroto Yoshida",
    template: "%s | Hiroto Yoshida",
  },
  description:
    "Personal website of Hiroto Yoshida.",
  authors: [{ name: "Hiroto Yoshida" }],
  creator: "Hiroto Yoshida",
  keywords: [
    "Hiroto Yoshida",
    "吉田寛人",
    "University of Tokyo",
    "Acoustic Levitation",
    "Human-Computer Interaction",
    "User Interfaces",
    "Portfolio",
  ],
  openGraph: {
    title: "Hiroto Yoshida",
    description:
      "Personal website of Hiroto Yoshida.",
    url: "https://hirotoyoshida.vercel.app",
    siteName: "Hiroto Yoshida",
    images: [
      {
        url: "/20250323.JPG",
        width: 1200,
        height: 630,
        alt: "Hiroto Yoshida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiroto Yoshida",
    description:
      "Personal website of Hiroto Yoshida.",
    images: ["/20250323.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.scrollTo(0, 0);
            }
          `
        }} />
      </head>
      <body className={`${jakarta.variable} ${notoJP.variable} ${bungeeOutline.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
