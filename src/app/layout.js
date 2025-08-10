import Navbar from '@/components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'DreamWeavers LLC',
  description: 'Professional software development services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white text-black ${montserrat.variable} font-sans`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <Navbar />
        {/* Add padding-top to account for fixed navbar */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}