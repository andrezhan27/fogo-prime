import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fogo-prime-lisboa.zhan-liu128.chatgpt.site'),
  alternates: {
    canonical: '/',
  },
  title: 'Fogo Prime | Rodízio Brasileiro em Lisboa',
  description:
    'Descubra o Fogo Prime, uma experiência premium de rodízio brasileiro em Lisboa. Carnes selecionadas, ambiente elegante e verdadeiro sabor do fogo.',
  keywords: [
    'rodízio brasileiro Lisboa',
    'Fogo Prime',
    'restaurante brasileiro',
    'picanha Lisboa',
  ],
  openGraph: {
    title: 'Fogo Prime | Rodízio Brasileiro em Lisboa',
    description:
      'Carnes selecionadas, ambiente elegante e verdadeiro sabor do fogo em Lisboa.',
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: 'en_GB',
    url: '/',
    siteName: 'Fogo Prime',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
