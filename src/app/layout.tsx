import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://betweentime.app'),
  title: 'worldclock - 세계시계 앱',
  description: '전 세계 시간대를 실시간으로 비교하세요. 위치 기반 자동 설정, 즐겨찾기 관리, 완벽한 프라이버시 보호.',
  keywords: ['세계시계', '시간대 변환', 'world clock', 'timezone', '시차 계산', 'worldclock', '타임존'],
  authors: [{ name: 'iroon66' }],
  creator: 'iroon66',
  publisher: 'iroon66',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'worldclock - 세계시계 앱',
    description: '전 세계 시간대를 실시간으로 비교하세요',
    url: 'https://betweentime.app',
    siteName: 'worldclock',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'worldclock - 세계시계 앱',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'worldclock - 세계시계 앱',
    description: '전 세계 시간대를 실시간으로 비교하세요',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}