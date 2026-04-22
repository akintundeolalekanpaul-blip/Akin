import type { Metadata } from 'next';
import './globals.css';

const churchName = 'IJERO BAPTIST CHURCH';
const siteUrl = 'https://example.com';
const ogImage =
  'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1400&q=80';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${churchName} | Lagos, Nigeria`,
  description:
    'Welcome to Ijero Baptist Church, Lagos. Find service times, location, watch live, get updates, and give online.',
  openGraph: {
    title: `${churchName} | Lagos, Nigeria`,
    description:
      'A place to belong, believe, become. Join us in person or online every week.',
    url: siteUrl,
    siteName: churchName,
    locale: 'en_NG',
    type: 'website',
    images: [{ url: ogImage, width: 1400, height: 933, alt: churchName }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
