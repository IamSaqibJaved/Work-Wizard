import React from 'react';
import PortfolioPage from '../../components/PortfolioPage';

export const metadata = {
  title: 'Portfolio | Work Wizard - Our Success Stories & Project Showcase',
  description: 'Explore Work Wizard\'s portfolio of successful projects, case studies, and innovative solutions in software development, automation, and business consulting.',
  keywords: [
    'work wizard portfolio', 'software development projects', 'automation case studies', 'business solutions',
    'web development projects', 'mobile app development', 'AI integration projects', 'project management success',
    'client testimonials', 'success stories', 'technical expertise showcase'
  ],
  openGraph: {
    title: 'Portfolio | Work Wizard - Our Success Stories',
    description: 'See our portfolio of projects and case studies in software development, automation, and business solutions.',
    url: 'https://yourworkwizard.com/portfolio',
    images: [
      {
        url: '/Project1.jpg',
        width: 1200,
        height: 630,
        alt: 'Work Wizard Portfolio - Project Showcase',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Work Wizard - Our Success Stories',
    description: 'See our portfolio of projects and case studies in software development, automation, and business solutions.',
    images: ['/Project1.jpg'],
  },
  alternates: {
    canonical: 'https://yourworkwizard.com/portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Portfolio | Work Wizard",
      "description": "Explore Work Wizard's portfolio of successful projects, case studies, and innovative solutions in software development and automation.",
      "url": "https://yourworkwizard.com/portfolio",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Work Wizard Projects",
        "description": "Collection of successful software development and automation projects"
      }
    })
  }
};

export default function PortfolioRoute() {
  return <PortfolioPage />;
}
