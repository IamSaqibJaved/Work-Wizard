import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { BLOGS } from '@/data/blogs';

export const metadata = {
  title: 'Blog | Work Wizard - Insights on Software Development & Automation',
  description: 'Discover expert insights, tutorials, and industry trends in software development, automation, AI solutions, and project management from Work Wizard\'s expert team.',
  keywords: [
    'software development blog', 'automation insights', 'AI marketing solutions', 'project management tips',
    'web development tutorials', 'business automation', 'academic research tools', 'data analysis guides',
    'workflow optimization', 'digital transformation', 'technology trends', 'work wizard blog'
  ],
  openGraph: {
    title: 'Blog | Work Wizard - Expert Insights & Tutorials',
    description: 'Expert insights on software development, automation, and project management from Work Wizard\'s team.',
    url: 'https://yourworkwizard.com/blogs',
    images: [
      {
        url: '/blog1.jpg',
        width: 1200,
        height: 630,
        alt: 'Work Wizard Blog - Expert Insights',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Work Wizard - Expert Insights & Tutorials',
    description: 'Expert insights on software development, automation, and project management.',
    images: ['/blog1.jpg'],
  },
  alternates: {
    canonical: 'https://yourworkwizard.com/blogs',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Work Wizard Blog",
      "description": "Expert insights, tutorials, and industry trends in software development, automation, and project management.",
      "url": "https://yourworkwizard.com/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Work Wizard",
        "url": "https://yourworkwizard.com"
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "AI Marketing Solutions: How Businesses Can Stay Ahead",
          "url": "https://yourworkwizard.com/blogs/ai-marketing-solutions-stay-ahead",
          "datePublished": "2025-01-15",
          "author": {
            "@type": "Organization",
            "name": "Work Wizard"
          }
        }
      ]
    })
  }
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-white pt-24 sm:pt-28 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #7c3aed 0%, transparent 50%), radial-gradient(circle at 80% 80%, #6366f1 0%, transparent 50%)',
            }}
          ></div>
        </div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="text-purple-600 text-sm font-bold tracking-wider uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Blog
            </span>
            <div className="w-12 h-0.5 bg-purple-600 mt-1"></div>
          </div>
          <div className="relative">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[0.85] tracking-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              RAW
              <br />
              <span className="text-purple-600">INSIGHTS</span>
            </h1>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-purple-600 rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gray-900 rotate-12"></div>
          </div>
          <p
            className="mt-4 text-base text-gray-600 max-w-xl leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Unfiltered thoughts on automation, design, and building things that matter.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {BLOGS.map((post, index) => (
            <article
              key={post.slug}
              className={`group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-2'
              }`}
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-purple-200 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-lg hover:shadow-xl">
                {/* Cover image */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Rough tag */}
                  <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 text-xs font-bold tracking-wider transform -rotate-2">
                    {post.tag}
                  </div>
                  
                  {/* Date badge */}
                  <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 text-xs font-black transform rotate-2">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <h2
                    className="text-lg sm:text-xl font-black text-gray-900 group-hover:text-purple-600 transition-colors leading-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500">{post.readTime}</span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center font-black text-black hover:text-purple-600 transition-colors group/link"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      READ
                      <svg
                        className="ml-2 w-3 h-3 transform group-hover/link:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Rough decorative elements */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rotate-45"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rotate-12"></div>
              </div>
              
              {/* Glitch effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-lg">
            <h3 className="text-xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              MORE COMING SOON
            </h3>
            <p className="text-sm text-gray-600 mb-4">Stay tuned for more raw insights and unfiltered thoughts.</p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white font-bold hover:bg-purple-600 transition-colors text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              GET IN TOUCH
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}