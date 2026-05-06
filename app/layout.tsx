import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NVRealtorWeb — Premier Web Solutions for Las Vegas Realtors',
  description:
    'Professional websites with MLS integration for Realtors in the Greater Las Vegas area. Custom design, hosting, and full maintenance included.',
  keywords: 'Las Vegas realtor website, IDX MLS website Las Vegas, real estate web design Nevada',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
