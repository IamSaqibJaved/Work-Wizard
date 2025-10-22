'use client';

import React from 'react';

export default function Guarantees() {
  const guarantees = [
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zero Plagiarism",
      description: "100% original, plagiarism-free content guaranteed on every assignment."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Money Back Guarantee",
      description: "Full refund if we fail to meet our quality standards or deliver plagiarized work."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Free Revisions",
      description: "Unlimited free revisions until you're completely satisfied with your assignment."
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="text-center group"
            >
               {/* Simple Icon */}
               <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 {guarantee.icon}
               </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {guarantee.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base max-w-sm mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
