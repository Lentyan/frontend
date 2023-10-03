import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Login from './login/page';
import { ReduxProviders } from '@/redux/provider';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>
          <ReduxProviders>
            {children}
          </ReduxProviders>
        </main>
        <Footer />
        <Login />
      </body>
    </html>
  );
}
