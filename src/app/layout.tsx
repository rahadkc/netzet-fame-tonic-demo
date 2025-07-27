import type { Metadata } from 'next';
import { urbanist, figtree } from '@/utils/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'FameSonic - Monetize Your Social Media Influence',
  description:
    "Unlock the secrets to earning money through social media with FameSonic's expert guidance. Start your profitable creator journey today!",
  icons: {
    icon: 'favicon/favicon.ico',
    apple: 'favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: 'favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: 'favicon/favicon-16x16.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
