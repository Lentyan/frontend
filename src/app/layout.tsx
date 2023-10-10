import './globals.scss';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { ReduxProviders } from '@/redux/provider';
export const metadata: Metadata = {
  title: 'Lenta',
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
      </body>
    </html>
  );
}