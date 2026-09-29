import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Hafsa Arsalan | Badass Brands For The Weird & Wonderful',
  description: 'Designing badass brands for the weird and wonderful. Brand identity design, logos, mentorship, courses, and tools.',
  icons: {
    icon: '/images/FDC-SHAKA-LOGO.png',
    apple: '/images/FDC-SHAKA-LOGO.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/FDC-SHAKA-LOGO.png" />
      </head>
      <body>
        <Header />
        <main id="content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
