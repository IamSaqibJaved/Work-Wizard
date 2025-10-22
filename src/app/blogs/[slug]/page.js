import React from 'react';
import Link from 'next/link';
import BlogPostClient from './BlogPostClient';
import { BLOGS } from '@/data/blogs';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = BLOGS.find(b => b.slug === resolvedParams.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | Work Wizard',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.keywords || [
      'software development', 'automation', 'AI solutions', 'project management',
      'business consulting', 'academic research', 'web development', 'digital transformation'
    ],
    authors: [{ name: 'Work Wizard Team' }],
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: `https://yourworkwizard.com/blogs/${blog.slug}`,
      images: [
        {
          url: blog.image.src || '/blog1.jpg',
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      publishedTime: blog.date,
      authors: ['Work Wizard Team'],
      tags: [blog.tag],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [blog.image.src || '/blog1.jpg'],
    },
    alternates: {
      canonical: `https://yourworkwizard.com/blogs/${blog.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "image": blog.image.src || 'https://yourworkwizard.com/blog1.jpg',
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
          "@type": "Organization",
          "name": "Work Wizard",
          "url": "https://yourworkwizard.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Work Wizard",
          "logo": {
            "@type": "ImageObject",
            "url": "https://yourworkwizard.com/Logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://yourworkwizard.com/blogs/${blog.slug}`
        },
        "url": `https://yourworkwizard.com/blogs/${blog.slug}`,
        "wordCount": blog.content.split(' ').length,
        "timeRequired": blog.readTime,
        "articleSection": blog.tag,
        "keywords": blog.keywords || [blog.tag]
      })
    }
  };
}

// Blog data is now imported from BlogPostClient component

export default function BlogPost({ params }) {
  const resolvedParams = React.use(params);
  const blog = BLOGS.find(b => b.slug === resolvedParams.slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-purple-600 hover:text-purple-800">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPostClient blog={blog} />;
}
