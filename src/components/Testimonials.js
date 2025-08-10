'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mirth Jong',
    position: 'Clinic Director',
    image: '/Team1.jpg',
    quote: "The new website truly reflects our clinic's luxury experience. Clients now say they chose us because the design made them feel confident, comfortable, and assured before even walking in the door."
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Marketing Manager',
    image: '/Team2.jpg',
    quote: "DreamWeavers transformed our digital presence completely. The attention to detail and user experience they delivered exceeded our expectations. Our conversion rates have increased by 40%."
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'CEO, TechStart Inc.',
    image: '/Team3.jpg',
    quote: "Working with DreamWeavers was a game-changer for our startup. They understood our vision perfectly and delivered a solution that not only looks amazing but performs exceptionally well."
  },
  {
    id: 4,
    name: 'Emily Watson',
    position: 'E-commerce Director',
    image: '/Team4.jpg',
    quote: "The e-commerce platform they built for us is intuitive, fast, and beautiful. Our customers love the seamless shopping experience, and our sales have grown significantly since launch."
  }
];

export default function Testimonials() {
  const [position, setPosition] = useState(0);
  const [isAutoMoving, setIsAutoMoving] = useState(true);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // Create continuous loop by duplicating testimonials
  const createContinuousTestimonials = () => {
    const continuousArray = [];
    for (let i = 0; i < 15; i++) {
      continuousArray.push(...TESTIMONIALS);
    }
    return continuousArray;
  };

  const continuousTestimonials = createContinuousTestimonials();

  useEffect(() => {
    if (isAutoMoving) {
      timerRef.current = setTimeout(() => {
        setPosition(prev => {
          // Calculate the height of one complete set of testimonials
          const testimonialHeight = 200; // Approximate height of one testimonial card + margin
          const oneSetHeight = TESTIMONIALS.length * testimonialHeight;
          
          // If we've moved past one complete set, reset to the beginning
          if (Math.abs(prev) >= oneSetHeight) {
            return 0;
          }
          
          return prev - 2; // Move up by 2px
        });
      }, 50); // Faster movement
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [position, isAutoMoving]);

  const handleMouseEnter = () => {
    setIsAutoMoving(false);
  };

  const handleMouseLeave = () => {
    setIsAutoMoving(true);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 sm:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-[#83b4cc]/10 to-[#5a9bb8]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-l from-[#5a9bb8]/10 to-[#83b4cc]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#83b4cc]/5 rounded-full blur-2xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-gray-400/20 bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Content Section */}
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]"></div>
                <span className="text-[#83b4cc] font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Testimonials
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-[#83b4cc] to-[#5a9bb8]"></div>
              </div>
              
              <h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                What Our
                <span className="block bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                At DreamWeavers LLC, we believe in building lasting relationships with our clients. Our commitment to excellence, innovation, and customer satisfaction has earned us the trust and praise of businesses across various industries.
              </p>
            </div>
          </div>

          {/* Right: Continuous Testimonials Loop */}
          <div className="lg:col-span-7">
            <div 
              className="relative h-96 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={containerRef}
            >
              {/* Testimonials Container */}
              <div 
                className="transition-transform duration-1000 ease-linear"
                style={{ transform: `translateY(${position}px)` }}
              >
                {continuousTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="relative bg-white rounded-2xl shadow-lg border-l-4 border-l-[#83b4cc] border border-gray-200 p-6 mb-6"
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold bg-[#83b4cc] text-white">
                      &ldquo;
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex items-start space-x-4">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-700 leading-relaxed mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        
                        <div>
                          <h4 className="font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-[#83b4cc] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays for Smooth Transitions */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-gray-400 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(156 163 175 / 0.1)'%3e%3cpath d='m0 .5h32m-16 32v-32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
