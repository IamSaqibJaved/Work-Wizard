// SEO utility functions for Work Wizard
export const SEO_CONFIG = {
  siteName: 'Work Wizard',
  siteUrl: 'https://yourworkwizard.com',
  defaultImage: '/Logo.png',
  twitterHandle: '@WorkWizard',
  author: 'Work Wizard Team',
  organization: {
    name: 'Work Wizard',
    alternateName: 'DreamWeavers LLC',
    foundingDate: '2024',
    email: 'info@yourworkwizard.com',
    socialProfiles: [
      'https://twitter.com/WorkWizard',
      'https://linkedin.com/company/workwizard',
      'https://github.com/workwizard'
    ]
  }
};

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = SEO_CONFIG.defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = SEO_CONFIG.author,
  section,
  tags = []
}) {
  const fullTitle = title.includes(SEO_CONFIG.siteName) 
    ? title 
    : `${title} | ${SEO_CONFIG.siteName}`;
  
  const fullUrl = url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl;
  const fullImage = image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'software development',
      'automation',
      'project management',
      'AI solutions',
      'business consulting',
      'academic research',
      'web development',
      'digital transformation',
      'Work Wizard'
    ],
    authors: [{ name: author }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.organization.name,
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: SEO_CONFIG.twitterHandle,
      creator: SEO_CONFIG.twitterHandle,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
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
  };
}

export function generateStructuredData({
  type = 'WebPage',
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  organization = SEO_CONFIG.organization,
  ...additionalProps
}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl,
    ...(image && { 
      image: image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image}` 
    }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(author && { 
      author: {
        '@type': 'Person',
        name: author
      }
    }),
    ...additionalProps
  };

  // Add organization context for certain types
  if (['Article', 'BlogPosting', 'WebPage'].includes(type)) {
    baseData.publisher = {
      '@type': 'Organization',
      name: organization.name,
      url: SEO_CONFIG.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}/Logo.png`
      }
    };
  }

  return baseData;
}

export function generateBlogPostStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author = SEO_CONFIG.author,
  wordCount,
  readTime,
  section,
  keywords = []
}) {
  return generateStructuredData({
    type: 'BlogPosting',
    title,
    description,
    url,
    image,
    publishedTime,
    modifiedTime,
    author,
    wordCount,
    timeRequired: readTime,
    articleSection: section,
    keywords,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl
    }
  });
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.organization.name,
    alternateName: SEO_CONFIG.organization.alternateName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/Logo.png`,
    description: 'Professional software development, automation, and project management services for businesses and academics.',
    foundingDate: SEO_CONFIG.organization.foundingDate,
    sameAs: SEO_CONFIG.organization.socialProfiles,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SEO_CONFIG.organization.email,
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.7128,
        longitude: -74.0060
      },
      geoRadius: '10000000'
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Software Development Services',
        description: 'Custom software development solutions for businesses and academic institutions'
      },
      {
        '@type': 'Offer', 
        name: 'Automation Solutions',
        description: 'Intelligent automation tools to streamline workflows and increase productivity'
      },
      {
        '@type': 'Offer',
        name: 'Project Management',
        description: 'Professional project management services for complex technical projects'
      }
    ]
  };
}

// Common SEO keywords by category
export const SEO_KEYWORDS = {
  general: [
    'software development',
    'automation',
    'project management',
    'AI solutions',
    'business consulting',
    'academic research',
    'web development',
    'digital transformation',
    'Work Wizard'
  ],
  services: [
    'custom software development',
    'business automation',
    'academic support',
    'data analysis',
    'web applications',
    'mobile development',
    'cloud solutions',
    'AI integration',
    'workflow optimization',
    'productivity tools'
  ],
  blog: [
    'software development blog',
    'automation insights',
    'AI marketing solutions',
    'project management tips',
    'web development tutorials',
    'business automation',
    'academic research tools',
    'data analysis guides',
    'workflow optimization',
    'digital transformation',
    'technology trends'
  ],
  portfolio: [
    'work wizard portfolio',
    'software development projects',
    'automation case studies',
    'business solutions',
    'web development projects',
    'mobile app development',
    'AI integration projects',
    'project management success',
    'client testimonials',
    'success stories',
    'technical expertise showcase'
  ]
};
