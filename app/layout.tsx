import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Architecture Portfolio | Design Excellence',
  description: 'Creating spaces that inspire, function beautifully, and stand the test of time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
