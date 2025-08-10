"use client";
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { useState, useEffect, useRef } from 'react';

const Events = () => {
  const [imagePosition, setImagePosition] = useState(0);
  const [isAutoMoving, setIsAutoMoving] = useState(true);
  const timerRef = useRef(null);

  // Sample event images with event details
  const eventImages = [
    {
      image: '/Team1.jpg',
      title: 'Tech Innovation Summit',
      description: 'Leading discussions on AI and blockchain solutions'
    },
    {
      image: '/Team2.jpg',
      title: 'Startup Accelerator',
      description: 'Mentoring emerging fintech startups'
    },
    {
      image: '/Team3.jpg',
      title: 'Digital Transformation',
      description: 'Enterprise technology strategies workshop'
    },
    {
      image: '/Team4.jpg',
      title: 'Cloud Computing Expo',
      description: 'Next-gen infrastructure showcase'
    },
    {
      image: '/AboutUs1.jpg',
      title: 'AI Ethics Symposium',
      description: 'Ethical AI development discussions'
    },
    {
      image: '/AboutUs2.jpg',
      title: 'Cybersecurity Summit',
      description: 'Advanced protection strategies'
    },
    {
      image: '/AboutUs3.jpg',
      title: 'Data Science Conference',
      description: 'Big data and ML innovations'
    },
    {
      image: '/AboutUs.png',
      title: 'Future of Work Forum',
      description: 'Workplace technology exploration'
    }
  ];

  // Create a much longer array to ensure continuous coverage
  const createContinuousImages = () => {
    const continuousArray = [];
    for (let i = 0; i < 20; i++) {
      continuousArray.push(...eventImages);
    }
    return continuousArray;
  };

  const continuousImages = createContinuousImages();

  useEffect(() => {
    if (isAutoMoving) {
      timerRef.current = setTimeout(() => {
        setImagePosition(prev => prev - 3);
      }, 10);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [imagePosition, isAutoMoving]);

  const handleMouseEnter = () => {
    setIsAutoMoving(false);
  };

  const handleMouseLeave = () => {
    setIsAutoMoving(true);
  };

  const handleNext = () => {
    setImagePosition(prev => {
      const newPosition = prev - 400;
      // If we've moved too far left, reset to show the beginning
      if (newPosition < -400 * 10) {
        return 0;
      }
      return newPosition;
    });
  };

  const handlePrev = () => {
    setImagePosition(prev => {
      const newPosition = prev + 400;
      // If we've moved too far right, reset to show the end
      if (newPosition > 0) {
        return -400 * 10;
      }
      return newPosition;
    });
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[#83b4cc]/10 to-[#5a9bb8]/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#83b4cc]/10 to-[#5a9bb8]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-[#83b4cc]/15 to-[#5a9bb8]/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-bl from-[#83b4cc]/20 to-[#5a9bb8]/20 rounded-full blur-lg"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]"></div>
            <span className="text-[#83b4cc] font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Events & News
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-[#83b4cc] to-[#5a9bb8]"></div>
          </div>
          
          {/* Title with Contextual Illustrations */}
          <div className="relative flex items-center justify-center mb-4">
            {/* Left Side Illustration - Calendar/Events */}
            {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-70">
              <svg width="80" height="80" viewBox="0 0 100 100" className="text-[#83b4cc]">
                <defs>
                  <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#83b4cc" />
                    <stop offset="100%" stopColor="#5a9bb8" />
                  </linearGradient>
                </defs>
                
                <rect x="15" y="25" width="70" height="60" rx="8" fill="url(#calendarGradient)" />
                <rect x="20" y="30" width="60" height="50" rx="4" fill="white" opacity="0.9" />
                
                
                <rect x="20" y="30" width="60" height="12" rx="4" fill="url(#calendarGradient)" />
                
                <circle cx="30" cy="20" r="3" fill="url(#calendarGradient)" />
                <circle cx="70" cy="20" r="3" fill="url(#calendarGradient)" />
                <rect x="27" y="15" width="6" height="10" rx="3" fill="url(#calendarGradient)" />
                <rect x="67" y="15" width="6" height="10" rx="3" fill="url(#calendarGradient)" />
                
                
                <circle cx="30" cy="55" r="2" fill="#83b4cc" />
                <circle cx="40" cy="55" r="2" fill="#83b4cc" />
                <circle cx="50" cy="55" r="2" fill="#83b4cc" />
                <circle cx="60" cy="55" r="2" fill="#83b4cc" />
                <circle cx="70" cy="55" r="2" fill="#83b4cc" />
                <circle cx="25" cy="65" r="2" fill="#83b4cc" />
                <circle cx="35" cy="65" r="2" fill="#83b4cc" />
                <circle cx="45" cy="65" r="3" fill="url(#calendarGradient)" />
                <circle cx="55" cy="65" r="2" fill="#83b4cc" />
                <circle cx="65" cy="65" r="2" fill="#83b4cc" />
                <circle cx="75" cy="65" r="2" fill="#83b4cc" />
              </svg>
            </div> */}

            <h3 className="text-4xl font-bold text-gray-900 relative z-10">
              <span className="text-black">
                Stay Updated
              </span>
            </h3>

            {/* Right Side Illustration - News/Media */}
            {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-70">
              <svg width="80" height="80" viewBox="0 0 100 100" className="text-[#83b4cc]">
                <defs>
                  <linearGradient id="newsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#83b4cc" />
                    <stop offset="100%" stopColor="#5a9bb8" />
                  </linearGradient>
                </defs>
                
                <rect x="15" y="20" width="70" height="55" rx="6" fill="url(#newsGradient)" />
                <rect x="18" y="23" width="64" height="49" rx="4" fill="white" opacity="0.95" />
                
               
                <rect x="22" y="27" width="56" height="8" rx="2" fill="url(#newsGradient)" />
               
                <rect x="22" y="40" width="25" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                <rect x="22" y="45" width="25" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                <rect x="22" y="50" width="20" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                <rect x="22" y="55" width="25" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                
                <rect x="52" y="40" width="25" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                <rect x="52" y="45" width="25" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                <rect x="52" y="50" width="20" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                <rect x="52" y="55" width="25" height="3" rx="1.5" fill="#83b4cc" opacity="0.7" />
                
                <circle cx="50" cy="85" r="8" fill="url(#newsGradient)" opacity="0.8" />
                <path d="M46 82 L50 86 L54 82" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="50" cy="80" r="1.5" fill="white" />
              </svg>
            </div> */}
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest events, conferences, and news from DreamWeavers LLC
          </p>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Images Container */}
            <div className="py-8">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(${imagePosition}px)` }}
              >
                {continuousImages.map((event, index) => (
                  <div
                    key={`event-${index}`}
                    className="relative group flex-shrink-0 w-96 h-80 mx-4 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    
                    {/* Always Visible Event Info - Reduced height to prevent overlap */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-out">
                      <div className="text-white">
                        <h4 className="text-lg font-bold mb-1 line-clamp-1">{event.title}</h4>
                        <p className="text-xs text-gray-300 line-clamp-1">{event.description}</p>
                      </div>
                    </div>

                    {/* Enhanced Hover Overlay - Completely separate from always-visible content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#83b4cc]/95 via-[#83b4cc]/90 to-[#83b4cc]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-end p-6 z-20">
                      <div className="text-white w-full">
                        <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                        <p className="text-sm leading-relaxed text-white/95 mb-4">{event.description}</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-xs text-white/90 font-medium">Click to learn more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Positioned on left and right edges */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-white/90 hover:bg-white text-[#83b4cc] hover:text-[#5a9bb8] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/30 z-30"
              aria-label="Previous images"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-white/90 hover:bg-white text-[#83b4cc] hover:text-[#5a9bb8] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/30 z-30"
              aria-label="Next images"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Events;