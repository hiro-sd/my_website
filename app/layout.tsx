import type { Metadata } from "next";
import { Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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

// TODO: Please update the title and description with your personal information
export const metadata: Metadata = {
  title: "Portfolio Template",
  description: "A modern portfolio template for developers and designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
      <body className={`${jakarta.variable} ${notoJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
