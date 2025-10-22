'use client';

import React, { useState } from 'react';

const iconCommon = {
  width: 40,
  height: 40,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#7c3aed',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function IconCode() {
  return (
    <svg {...iconCommon}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function IconWeb() {
  return (
    <svg {...iconCommon}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconMobile() {
  return (
    <svg {...iconCommon}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}
function IconCloud() {
  return (
    <svg {...iconCommon}>
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 7 7 0 0 0-13.5 1.5A4.5 4.5 0 0 0 6.5 19h11z" />
    </svg>
  );
}
function IconMegaphone() {
  return (
    <svg {...iconCommon}>
      <path d="M3 11v2a4 4 0 0 0 4 4h1" />
      <path d="M15 11v2" />
      <path d="M21 8v8l-6-3-6 3V5l6 3 6-3z" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg {...iconCommon}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-3.6-3.6" />
    </svg>
  );
}
function IconCart() {
  return (
    <svg {...iconCommon}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function IconRobot() {
  return (
    <svg {...iconCommon}>
      <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
      <circle cx="12" cy="16" r="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <path d="M7 11h10" />
    </svg>
  );
}
function IconStore() {
  return (
    <svg {...iconCommon}>
      <path d="M2 3h20v14H2z" />
      <path d="M2 17h20" />
      <path d="M6 21v-4" />
      <path d="M18 21v-4" />
      <path d="M12 21v-4" />
    </svg>
  );
}

const SERVICES = [
  
  {
    title: 'Research Guidance',
    icon: IconCloud,
    bullets: [
      'Topic refinement and proposal coaching',
      'Literature review strategy and sourcing',
      'Methodology advising and best practices',
      'Ethical, skills-building support throughout',
    ],
  },
  
  
  {
    title: 'Web Development',
    icon: IconWeb,
    bullets: [
      'Modern, responsive websites',
      'Performance, SEO and accessibility focus',
      'API integration and CMS setup',
      'Ongoing support and maintenance',
    ],
  },
  {
    title: 'App Development',
    icon: IconMobile,
    bullets: [
      'Cross‑platform mobile apps',
      'Scalable architecture and testing',
      'Backend and cloud integration',
      'Deployment and release support',
    ],
  },
  {
    title: 'Academic Coaching & Tutoring',
    icon: IconMobile,
    bullets: [
      'One-on-one guidance and concept mastery',
      'Exam preparation and study strategies',
      'Module brief interpretation and planning',
      'Structured learning plans tailored to you',
    ],
  },
  {
    title: 'Editing, Formatting & Referencing',
    icon: IconMegaphone,
    bullets: [
      'Professional editing for clarity and cohesion',
      'APA, Harvard, MLA and more formatting',
      'Citation review and reference checks',
      'Proofreading for grammar and consistency',
    ],
  },
  {
    title: 'Shopify Store Creation',
    icon: IconCart,
    bullets: [
      'Complete store setup end‑to‑end',
      'Custom theme design and branding',
      'Products, payments and app integrations',
      'Conversion‑oriented configurations',
    ],
  },
  {
    title: 'eBay Dropshipping (USA & UK)',
    icon: IconStore,
    bullets: [
      'Professional store setup and optimization',
      'Product research from trusted suppliers',
      'Price automation and inventory updates',
      'Order handling and growth guidance',
    ],
  },
  {
    title: 'Amazon FBM Setup & Management',
    icon: IconStore,
    bullets: [
      'Seller account setup and optimization',
      'Listing creation and keyword optimization',
      'Inventory, shipping and returns workflows',
      'End‑to‑end order handling support',
    ],
  },
  {
    title: 'UI/UX Design (Figma)',
    icon: IconCode,
    bullets: [
      'User‑centered wireframes and prototypes',
      'Design systems and component libraries',
      'Usability and accessibility principles',
      'Developer‑ready handoff assets',
    ],
  },
  {
    title: 'Presentations with Speaker Notes',
    icon: IconMegaphone,
    bullets: [
      'Engaging slides tailored to your audience',
      'Clear narratives and visual storytelling',
      'Speaker notes and rehearsal guidance',
      'Brand‑consistent templates and assets',
    ],
  },
  {
    title: 'Originality & Academic Integrity Support',
    icon: IconSearch,
    bullets: [
      'Guidance on paraphrasing and citation',
      'Understanding similarity reports',
      'Best practices to avoid plagiarism',
      'Uphold academic policies with confidence',
    ],
  },
  {
    title: 'Data Analysis Coaching (SPSS, Excel, Python)',
    icon: IconRobot,
    bullets: [
      'Statistical planning and analysis walkthroughs',
      'Code and formula reviews with explanations',
      'Data visualization best practices',
      'Results interpretation coaching',
    ],
  },
];

export default function Services() {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (index) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-14 sm:py-14 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #7c3aed 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, #6366f1 0%, transparent 50%)`,
        }}></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="mb-20">
          <div className="mb-6">
            <span className="text-purple-600 text-lg font-bold tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </span>
            <div className="w-16 h-0.5 bg-purple-600 mt-2"></div>
          </div>
          
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            How We Can Help You
          </h2>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            From ethical academic support and research guidance to full‑stack development and e‑commerce setups, we help you achieve your goals with quality, transparency, and on‑time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isFlipped = flippedCards.has(index);
            return (
              <div key={index} className="group [perspective:1000px]">
                <div 
                  className={`relative h-72 w-full rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 [transform-style:preserve-3d] cursor-pointer md:cursor-default ${
                    isFlipped ? '[transform:rotateY(180deg)] scale-105' : ''
                  } md:group-hover:[transform:rotateY(180deg)] md:group-hover:scale-105`}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Front */}
                  <div className="absolute inset-0 p-8 backface-hidden [transform:rotateY(0deg)] flex flex-col">
                    <div className="h-16 w-16 grid place-items-center rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:from-purple-200 group-hover:to-indigo-200 transition-colors duration-300">
                      <Icon />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Explore how we design and deliver this service to match your goals.
                    </p>
                    {/* Mobile tap indicator */}
                    <div className="mt-auto text-xs text-purple-600 font-medium md:hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Tap to see details
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 p-8 backface-hidden [transform:rotateY(180deg)] flex flex-col bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl">
                    <h4 className="text-base font-bold text-purple-700 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      What you get
                    </h4>
                    <ul className="space-y-3 text-xs text-gray-700 flex-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.bullets.map((b, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Mobile tap indicator */}
                    <div className="mt-auto text-xs text-purple-600 font-medium md:hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Tap to go back
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}