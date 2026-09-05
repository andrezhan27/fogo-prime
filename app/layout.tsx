import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fogo-prime-lisboa.zhan-liu128.chatgpt.site'),
  title: 'Fogo Prime | Rodízio Brasileiro em Lisboa',
  description:
    'Descubra o Fogo Prime, uma experiência premium de rodízio brasileiro em Lisboa. Carnes selecionadas, ambiente elegante e verdadeiro sabor do fogo.',
  keywords: ['rodízio brasileiro Lisboa', 'Fogo Prime', 'restaurante brasileiro', 'picanha Lisboa'],
  openGraph: {
    title: 'Fogo Prime | Rodízio Brasileiro em Lisboa',
    description: 'Carnes selecionadas, ambiente elegante e verdadeiro sabor do fogo em Lisboa.',
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={nunitoSans.variable}>
        {children}
      </body>
    </html>
  );
}
