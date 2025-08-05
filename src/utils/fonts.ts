import { Urbanist, Figtree } from 'next/font/google';

export const figtree = Figtree({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});

export const urbanist = Urbanist({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});
