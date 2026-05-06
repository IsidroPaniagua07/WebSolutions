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
  title: 'NVRealtorWeb — Professional Websites for Las Vegas Realtors',
  description:
    'Custom MLS-powered websites exclusively for Realtors in the Greater Las Vegas Valley. We design, host, and maintain everything so you can focus on closing deals.',
  keywords:
    'Las Vegas realtor website, IDX MLS website Las Vegas, real estate web design Nevada, Henderson realtor website, Summerlin real estate website, GLVAR IDX integration',
  openGraph: {
    title: 'NVRealtorWeb — Professional Websites for Las Vegas Realtors',
    description:
      'Custom MLS-powered websites exclusively for Realtors in the Greater Las Vegas Valley. Design, hosting, and maintenance — all in one.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NVRealtorWeb',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVRealtorWeb — Professional Websites for Las Vegas Realtors',
    description:
      'Custom MLS-powered websites exclusively for Realtors in the Greater Las Vegas Valley.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
