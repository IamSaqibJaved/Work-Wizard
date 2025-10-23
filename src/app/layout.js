import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Work Wizard | Professional Software Development & Automation Services',
  description: 'Work Wizard offers intelligent automation, project management, and software development services for businesses and academics. Transform your workflow and achieve measurable results with our expert team.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png?v=4', sizes: '32x32' },
      { url: '/Logo.png?v=4', type: 'image/png', sizes: '16x16' }
    ],
    shortcut: '/favicon-32x32.png?v=4',
    apple: [
      { url: '/Logo.png?v=4', sizes: '180x180' }
    ],
  },
  keywords: [
    'software development', 'automation', 'project management', 'AI solutions', 'business consulting', 
    'academic research', 'web development', 'digital transformation', 'Work Wizard', 'DreamWeavers LLC',
    'custom software', 'business automation', 'academic support', 'data analysis', 'web applications',
    'mobile development', 'cloud solutions', 'AI integration', 'workflow optimization', 'productivity tools'
  ],
  authors: [{ name: 'Work Wizard Team' }],
  creator: 'Work Wizard',
  publisher: 'Work Wizard',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourworkwizard.com'),
  openGraph: {
    title: 'Work Wizard | Professional Software Development & Automation',
    description: 'Intelligent automation and project management tools for businesses and academics. Transform your workflow and achieve measurable results.',
    url: 'https://yourworkwizard.com/',
    siteName: 'Work Wizard',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Work Wizard - Professional Software Development & Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work Wizard | Professional Software Development & Automation',
    description: 'Intelligent automation and project management tools for businesses and academics. Transform your workflow and achieve measurable results.',
    site: '@WorkWizard',
    creator: '@WorkWizard',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://yourworkwizard.com/',
    languages: {
      'en-US': 'https://yourworkwizard.com/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Technology',
  // Organization structured data (JSON-LD)
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Work Wizard",
      "alternateName": "Work Wizard",
      "url": "https://yourworkwizard.com/",
      "logo": "https://yourworkwizard.com/Logo.png",
      "description": "Professional software development, automation, and project management services for businesses and academics. We transform workflows and deliver measurable results.",
      "foundingDate": "2024",
      "sameAs": [
        "https://twitter.com/WorkWizard",
        "https://linkedin.com/company/workwizard",
        "https://github.com/workwizard"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@yourworkwizard.com",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 40.7128,
          "longitude": -74.0060
        },
        "geoRadius": "10000000"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Software Development Services",
          "description": "Custom software development solutions for businesses and academic institutions"
        },
        {
          "@type": "Offer", 
          "name": "Automation Solutions",
          "description": "Intelligent automation tools to streamline workflows and increase productivity"
        },
        {
          "@type": "Offer",
          "name": "Project Management",
          "description": "Professional project management services for complex technical projects"
        }
      ]
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png?v=4" sizes="32x32" />
        <link rel="icon" href="/Logo.png?v=4" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon-32x32.png?v=4" />
        <link rel="apple-touch-icon" href="/Logo.png?v=4" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Work Wizard" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        {/* SEO meta tags are handled by Next.js metadata above */}
      </head>
      <body className={`min-h-screen bg-white text-black ${montserrat.variable} font-sans`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <Navbar />
        {/* Add padding-top to account for fixed navbar */}
        <main>
          {children}
        </main>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}