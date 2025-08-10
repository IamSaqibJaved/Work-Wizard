'use client';

import React from 'react';

const iconCommon = {
  width: 40,
  height: 40,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#83b4cc',
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
    title: 'Custom Software Development',
    icon: IconCode,
    bullets: [
      'End-to-end architecture and delivery',
      'Clean, scalable, maintainable code',
      'API-first, modular systems',
      'Security and performance baked in',
    ],
  },
  {
    title: 'Web Development',
    icon: IconWeb,
    bullets: [
      'High-performance web apps',
      'Modern UI frameworks and SSR',
      'Accessibility and SEO best practices',
      'Analytics and optimization',
    ],
  },
  {
    title: 'Mobile Application Development',
    icon: IconMobile,
    bullets: [
      'iOS and Android development',
      'Offline-first and sync patterns',
      'Native performance, polished UX',
      'CI/CD and store deployment',
    ],
  },
  {
    title: 'SaaS Development',
    icon: IconCloud,
    bullets: [
      'Multi-tenant architectures',
      'Subscription and billing flows',
      'Observability and SLOs',
      'Scalable cloud infrastructure',
    ],
  },
  {
    title: 'Digital Marketing',
    icon: IconMegaphone,
    bullets: [
      'Performance-driven campaigns',
      'Brand positioning and strategy',
      'Content and creative ops',
      'Reporting and growth loops',
    ],
  },
  {
    title: 'Search Engine Optimization (SEO)',
    icon: IconSearch,
    bullets: [
      'Technical SEO audits',
      'On-page and schema optimization',
      'Content strategy and backlinks',
      'Core Web Vitals improvements',
    ],
  },
  {
    title: 'Shopify Store Development',
    icon: IconCart,
    bullets: [
      'Custom themes and apps',
      'Optimized product experiences',
      'Checkout and subscription flows',
      'Integration with ERP/CRM',
    ],
  },
  {
    title: 'AI Automation',
    icon: IconRobot,
    bullets: [
      'Intelligent process automation',
      'Machine learning integration',
      'Predictive analytics solutions',
      'AI-powered decision support',
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className=" mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]"></div>
            <span className="text-[#83b4cc] font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-[#83b4cc] to-[#5a9bb8]"></div>
          </div>
          
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            How We Can Help You
          </h2>
                      <p className="text-lg text-gray-600 max-w-3xl " style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Transform your business and ideas with our tailored solutions. Whether you&apos;re aiming to revolutionize your operations, enhance user experiences, or expand your reach, we provide the tools and technologies to make it happen.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group [perspective:1000px]">
                <div className="relative h-64 w-full rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 p-6 backface-hidden">
                    <div className="h-12 w-12 grid place-items-center rounded-xl bg-[#83b4cc]/10">
                      <Icon />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Explore how we design and deliver this service to match your goals.
                    </p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 p-6 rotate-y-180 backface-hidden [transform:rotateY(180deg)]">
                    <h4 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      What you get
                    </h4>
                    <ul className="mt-3 list-disc pl-4 space-y-2 text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
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