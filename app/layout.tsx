import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['600', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'NV Web Solutions — Professional Web Design & Hosting in Las Vegas',
  description:
    'Custom website design, managed hosting, and ongoing maintenance for businesses in the Greater Las Vegas area. We build it, host it, and keep it running.',
  keywords:
    'Las Vegas web design, web hosting Las Vegas, website maintenance Las Vegas, small business website Nevada, Las Vegas web developer',
  openGraph: {
    title: 'NV Web Solutions — Professional Web Design & Hosting in Las Vegas',
    description:
      'Custom website design, managed hosting, and ongoing maintenance for Las Vegas businesses. We handle everything so you can focus on running your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NV Web Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NV Web Solutions — Professional Web Design & Hosting in Las Vegas',
    description: 'Custom website design, managed hosting, and ongoing maintenance for Las Vegas businesses.',
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
