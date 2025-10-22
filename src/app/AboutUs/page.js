
export const metadata = {
  title: 'About Us | Work Wizard - Meet Our Expert Team & Company Story',
  description: 'Learn about Work Wizard\'s mission, values, and the expert team driving innovation in software development and automation. Discover our commitment to excellence and client success.',
  keywords: [
    'about work wizard', 'work wizard team', 'software development company', 'automation experts',
    'project management team', 'business consulting team', 'academic support specialists', 'company story',
    'mission and values', 'expert developers', 'professional services'
  ],
  openGraph: {
    title: 'About Us | Work Wizard - Meet Our Expert Team',
    description: 'Meet the Work Wizard team and discover our story, values, and commitment to excellence in software development and automation.',
    url: 'https://yourworkwizard.com/aboutus',
    images: [
      {
        url: '/AboutUs.png',
        width: 1200,
        height: 630,
        alt: 'Work Wizard Team - About Us',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Work Wizard - Meet Our Expert Team',
    description: 'Meet the Work Wizard team and discover our story, values, and commitment to excellence.',
    images: ['/AboutUs.png'],
  },
  alternates: {
    canonical: 'https://yourworkwizard.com/aboutus',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Us | Work Wizard",
      "description": "Learn about Work Wizard's mission, values, and the expert team driving innovation in software development and automation.",
      "url": "https://yourworkwizard.com/aboutus",
      "mainEntity": {
        "@type": "Organization",
        "name": "Work Wizard",
        "description": "Professional software development, automation, and project management services for businesses and academics."
      }
    })
  }
};

import AboutUsPage from '../../components/AboutUsPage';

export default function AboutUs() {
  return <AboutUsPage />;
}
