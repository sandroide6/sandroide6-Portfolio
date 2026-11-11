import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/lib/content';

const geist = Geist({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-geist-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(profile.seo.siteUrl),
  title: profile.seo.title,
  description: profile.seo.description,
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: profile.seo.siteUrl,
    siteName: profile.brand,
    locale: 'es_CO',
    type: 'website',
    images: [{ url: '/sandroide6-Portfolio/og.jpg', width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: '#151515',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
