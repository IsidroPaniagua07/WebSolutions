import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['600', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Webaton Web Solutions — Professional Web Design & Hosting',
  description:
    'Custom website design, managed hosting, and ongoing maintenance for businesses worldwide. We build it, host it, and keep it running.',
  keywords:
    'web design, web hosting, website maintenance, small business website, custom web development, managed hosting',
  openGraph: {
    title: 'Webaton Web Solutions — Professional Web Design & Hosting',
    description:
      'Custom website design, managed hosting, and ongoing maintenance for businesses worldwide. We handle everything so you can focus on running your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Webaton Web Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webaton Web Solutions — Professional Web Design & Hosting',
    description: 'Custom website design, managed hosting, and ongoing maintenance for businesses worldwide.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
