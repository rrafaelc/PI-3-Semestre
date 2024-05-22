import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Respire bem',
  description: 'Projeto PI 3 Semestre Fatec Itapira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <link rel="icon" href="/images/logo.png" />
        <Header />
        {children}
      </body>
    </html>
  );
}
