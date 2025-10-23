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
  title: 'Work Wizard | Assignment Helper & Academic Assistant - Web Developer Services',
  description: 'Professional Assignment Helper and Academic Assistant services. Expert web developers providing assignment support, academic coaching, research guidance, and custom software development for students and businesses.',
  icons: {
    icon: [
      { url: '/Logo.png?v=5', type: 'image/png', sizes: '192x192' },
      { url: '/Logo.png?v=5', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-32x32.png?v=5', sizes: '32x32' }
    ],
    shortcut: '/Logo.png?v=5',
    apple: [
      { url: '/Logo.png?v=5', sizes: '180x180' }
    ],
  },
  keywords: [
    'assignment helper', 'assignment maker', 'academic assistant', 'academic helper', 'web developer',
    'assignment writing service', 'academic coaching', 'research guidance', 'thesis help', 'dissertation support',
    'homework help', 'essay writing', 'academic tutoring', 'study support', 'assignment assistance',
    'software development', 'web development', 'mobile app development', 'UI/UX design', 'data analysis',
    'academic integrity', 'referencing help', 'editing services', 'proofreading', 'formatting assistance',
    'Work Wizard', 'DreamWeavers LLC', 'student support', 'academic success', 'professional development'
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
    title: 'Work Wizard | Assignment Helper & Academic Assistant Services',
    description: 'Expert Assignment Helper and Academic Assistant providing assignment support, academic coaching, and web development services. Professional academic assistance for students and businesses.',
    url: 'https://yourworkwizard.com/',
    siteName: 'Work Wizard',
    images: [
      {
        url: '/Logo.png',
        width: 512,
        height: 512,
        alt: 'Work Wizard - Professional Software Development & Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work Wizard | Assignment Helper & Academic Assistant Services',
    description: 'Professional Assignment Helper and Academic Assistant services. Expert academic support, assignment assistance, and web development for students and businesses.',
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
    'application/ld+json': JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Work Wizard",
        "alternateName": ["Assignment Helper", "Academic Assistant", "Academic Helper"],
        "url": "https://yourworkwizard.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourworkwizard.com/Logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Professional Assignment Helper and Academic Assistant services. Expert academic support, assignment assistance, research guidance, and web development for students and businesses.",
        "foundingDate": "2025",
        "sameAs": [
          "https://twitter.com/WorkWizard",
          "https://linkedin.com/company/workwizard",
          "https://github.com/workwizard"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "yourworkwizard@gmail.com",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "UK"
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
            "name": "Assignment Helper Services",
            "description": "Professional assignment assistance, academic coaching, and research guidance for students"
          },
          {
            "@type": "Offer", 
            "name": "Academic Assistant Services",
            "description": "Comprehensive academic support including tutoring, editing, and formatting assistance"
          },
          {
            "@type": "Offer",
            "name": "Web Development Services",
            "description": "Custom web development, mobile apps, and software solutions for businesses and academic institutions"
          },
          {
            "@type": "Offer",
            "name": "Academic Coaching & Tutoring",
            "description": "One-on-one guidance, exam preparation, and study strategies for academic success"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Work Wizard - Assignment Helper & Academic Assistant",
        "url": "https://yourworkwizard.com/",
        "description": "Professional Assignment Helper and Academic Assistant services. Expert academic support, assignment assistance, research guidance, and web development for students and businesses.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yourworkwizard.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Assignment Helper Services",
        "description": "Professional assignment assistance, academic coaching, and research guidance for students",
        "provider": {
          "@type": "Organization",
          "name": "Work Wizard"
        },
        "serviceType": "Academic Support",
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://yourworkwizard.com/",
          "serviceSmsNumber": "+1-XXX-XXX-XXXX"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Academic Assistant Services",
        "description": "Comprehensive academic support including tutoring, editing, and formatting assistance",
        "provider": {
          "@type": "Organization",
          "name": "Work Wizard"
        },
        "serviceType": "Academic Tutoring",
        "areaServed": "Worldwide"
      }
    ])
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
        {/* Additional logo meta tags for Google */}
        <meta property="og:image" content="https://yourworkwizard.com/Logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Work Wizard - Assignment Helper & Academic Assistant" />
        <meta name="twitter:image" content="https://yourworkwizard.com/Logo.png" />
        <meta name="twitter:image:alt" content="Work Wizard - Assignment Helper & Academic Assistant" />
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