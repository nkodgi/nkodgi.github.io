import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_BASE_PATH || 'https://nkodgi.github.io';

export const metadata: Metadata = {
  title: 'Natasha Kodgi | Portfolio',
  description: 'Natasha Kodgi is a Biomedical Engineer specializing in women\'s health, data, and human-centered design.',
  keywords: ['Natasha Kodgi', 'Biomedical Engineer', 'Women\'s Health', 'Data Analytics', 'Portfolio'],
  openGraph: {
    title: 'Natasha Kodgi | Portfolio',
    description: 'A Biomedical Engineer passionate about building data-driven tools for women\'s health.',
    url: siteUrl,
    siteName: 'Natasha Kodgi Portfolio',
    images: [
      {
        url: `${siteUrl}/natasha.jpg`,
        width: 400,
        height: 400,
        alt: 'Natasha Kodgi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natasha Kodgi | Portfolio',
    description: 'A Biomedical Engineer passionate about building data-driven tools for women\'s health.',
    images: [`${siteUrl}/natasha.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} !scroll-smooth`} suppressHydrationWarning>
       <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
