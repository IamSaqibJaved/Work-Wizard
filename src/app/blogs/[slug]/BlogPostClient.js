'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Project1 from '@/assets/blog1.jpg';
import Project2 from '@/assets/blog2.jpg';
import Project3 from '@/assets/blog3.jpg';
import Project4 from '@/assets/AboutUs1.jpg';
import Project5 from '@/assets/AboutUs2.jpg';
import Project6 from '@/assets/AboutUs3.jpg';
import Footer from '@/components/Footer';

function parseContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = null;
  let listItems = [];
  let isFAQSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('# ')) {
      // Main heading
      elements.push(
        <h1 key={i} className="text-3xl font-black text-gray-900 mt-8 mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      // Subheading
      isFAQSection = line.includes('FAQ');
      const headingText = line.substring(3);
      let headingId = '';
      
      // Generate ID based on heading content
      if (headingText.includes('Why AI Belongs')) {
        headingId = 'why-ai-belongs';
      } else if (headingText.includes('Core AI Marketing Tools')) {
        headingId = 'core-ai-tools';
      } else if (headingText.includes('Personalized Marketing')) {
        headingId = 'personalized-playbook';
      } else if (headingText.includes('Implementation Tips')) {
        headingId = 'implementation-tips';
      } else if (headingText.includes('Measuring ROI')) {
        headingId = 'measuring-roi';
      } else if (headingText.includes('Common Pitfalls')) {
        headingId = 'common-pitfalls';
      } else if (headingText.includes('FAQ')) {
        headingId = 'faqs';
      } else if (headingText.includes('Conclusion')) {
        headingId = 'conclusion';
      }
      
      elements.push(
        <h2 key={i} id={headingId} className="text-2xl font-bold text-gray-900 mt-8 mb-4 leading-tight scroll-mt-32" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {headingText}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      // Sub-subheading
      if (isFAQSection) {
        // FAQ Question styling
        elements.push(
          <div key={i} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {line.substring(4)}
            </h3>
          </div>
        );
      } else {
        // Regular sub-subheading
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {line.substring(4)}
          </h3>
        );
      }
    } else if (line.startsWith('![IMAGE:')) {
      // Image placeholder with enhanced styling
      const imageName = line.substring(8, line.length - 1);
      let imageSrc;
      let imageAlt;
      
      switch(imageName) {
        case 'ai-marketing-tools':
          imageSrc = Project1;
          imageAlt = 'AI Marketing Tools Dashboard';
          break;
        case 'customer-segmentation':
          imageSrc = Project2;
          imageAlt = 'Customer Segmentation Analytics';
          break;
        case 'content-optimization':
          imageSrc = Project3;
          imageAlt = 'Content Optimization Process';
          break;
        case 'personalized-marketing':
          imageSrc = Project4;
          imageAlt = 'Personalized Marketing Campaign';
          break;
        case 'roi-analytics':
          imageSrc = Project5;
          imageAlt = 'ROI Analytics Dashboard';
          break;
        case 'ai-implementation':
          imageSrc = Project6;
          imageAlt = 'AI Implementation Strategy';
          break;
        default:
          imageSrc = Project1;
          imageAlt = 'AI Marketing Solutions';
      }
      
      elements.push(
        <div key={i} className="my-8">
          <div className="relative group">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full inline-block">
                {imageAlt}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (line.startsWith('- ') && line.includes(':')) {
      // Bold list item (first part before colon)
      const colonIndex = line.indexOf(':');
      const boldText = line.substring(2, colonIndex);
      const restText = line.substring(colonIndex);
      listItems.push(
        <li key={i} className="mb-3 flex items-start">
          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span className="text-gray-700">
            <span className="font-bold text-gray-800">{boldText}</span>
            {restText}
          </span>
        </li>
      );
    } else if (line.startsWith('- ')) {
      // Regular list item
      listItems.push(
        <li key={i} className="mb-3 flex items-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span className="text-gray-700">{line.substring(2)}</span>
        </li>
      );
    } else if (line === '') {
      // Empty line - close current list if exists
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${i}`} className="mb-4 text-gray-700 space-y-1 bg-gray-50 p-4 rounded-xl border-l-4 border-purple-200">
            {listItems}
          </ul>
        );
        listItems = [];
      }
    } else if (line.length > 0) {
      // Regular paragraph with enhanced styling
      if (isFAQSection && !line.startsWith('###')) {
        // FAQ Answer styling
        elements.push(
          <div key={i} className="mb-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-base text-justify">
              {line}
            </p>
          </div>
        );
      } else {
        // Regular paragraph
        elements.push(
          <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base text-justify">
            {line}
          </p>
        );
      }
    }
  }

  // Close any remaining list
  if (listItems.length > 0) {
    elements.push(
      <ul key="final-list" className="mb-6 text-gray-700 space-y-1 bg-gray-50 p-6 rounded-xl border-l-4 border-purple-200">
        {listItems}
      </ul>
    );
  }

  return elements;
}

export default function BlogPostClient({ blog }) {
  const [activeSection, setActiveSection] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('h2[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${blog.title} - ${blog.excerpt}`;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const navItems = [
    { id: 'why-ai-belongs', label: 'AI in Your Strategy' },
    { id: 'core-ai-tools', label: 'Core AI Marketing Tools' },
    { id: 'personalized-playbook', label: 'Personalized Marketing' },
    { id: 'implementation-tips', label: 'Implementation Tips' },
    { id: 'measuring-roi', label: 'Measuring ROI' },
    { id: 'common-pitfalls', label: 'Common Pitfalls' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex gap-8 lg:gap-12">
            {/* Left Sidebar - Table of Contents */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-fit">
              <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                In This Article
              </h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm py-2 px-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-purple-100 text-purple-700 font-semibold border-l-4 border-purple-500'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Article Content */}
            <article className="flex-1 max-w-4xl">
              {parseContent(blog.content)}
              
              {/* Article Footer */}
              <div className="mt-20">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Share This Article
                      </h3>
                      <p className="text-gray-600 mb-6">Help others discover this valuable content</p>
                      <div className="flex space-x-4">
                        <button 
                          onClick={handleTwitterShare}
                          className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                          title="Share on Twitter"
                        >
                          <svg className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={handleFacebookShare}
                          className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                          title="Share on Facebook"
                        >
                          <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={handleLinkedInShare}
                          className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                          title="Share on LinkedIn"
                        >
                          <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                        <button 
                          onClick={handleCopyLink}
                          className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                          title="Copy link"
                        >
                          {copySuccess ? (
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href="/blogs"
                        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <span>Read More Articles</span>
                        <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}