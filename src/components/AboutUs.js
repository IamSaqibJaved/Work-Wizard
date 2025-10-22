'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sora } from 'next/font/google';
import heroLanding from '../assets/heroLanding.png';

const sora = Sora({ subsets: ['latin'], weight: ['700'] });

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function Counter({ target, start, duration = 1600, postfix = '' }) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (!start) return;
    cancelAnimationFrame(frameRef.current);
    startTimeRef.current = 0;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(eased * target);
      setValue(current);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return (
    <span>
      {formatNumber(value)}{postfix}
    </span>
  );
}

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const rightColRef = useRef(null);
  const [matchedHeight, setMatchedHeight] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStart(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Match left image stack height to right content on large screens
  useEffect(() => {
    const measure = () => {
      const isLarge = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
      if (!isLarge) {
        setMatchedHeight(null);
        return;
      }
      const h = rightColRef.current?.offsetHeight ?? null;
      setMatchedHeight(h);
    };

    measure();

    let ro;
    if (typeof ResizeObserver !== 'undefined' && rightColRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(rightColRef.current);
    }
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      ro?.disconnect();
    };
  }, []);

  const stats = [
    {
      title: 'Projects Delivered',
      label: 'Successful Outcomes',
      target: 250,
      postfix: '+',
    },
    
    {
      title: 'On-Time Delivery',
      label: 'Reliable Service',
      target: 99,
      postfix: '%',
    },
    {
      title: 'Client Satisfaction',
      label: 'Quality Assured',
      target: 98,
      postfix: '%',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
        }}></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10">
        {/* Two-column layout with content on left, image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div className="mb-2">
              <span className="text-purple-600 text-lg font-bold tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                About Us
              </span>
              <div className="w-16 h-0.5 bg-purple-600 mt-2"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Smart Automation
            </h2>

            {/* Description */}
            <div className="text-base text-gray-600 leading-relaxed max-w-2xl text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p>
                Work Wizard is your one-stop platform for everything workflow automation and project management. 
                We help businesses streamline their processes, boost productivity, and achieve remarkable efficiency 
                through cutting-edge technology and intelligent solutions.{' '}
                <a 
                  href="/AboutUs" 
                  className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200 underline decoration-2 underline-offset-2 hover:decoration-purple-400"
                >
                  Read More
                </a>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 pb-5">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300">
                  <div className="relative">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Counter target={item.target} start={start} postfix={item.postfix} />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image as Background (hidden on smaller screens) */}
          <div className="relative overflow-hidden hidden lg:block">
            {/* Main Image Container - Part of background */}
            <div className="relative">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                  src={heroLanding}
                  alt="Work Wizard Team"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Subtle gradient overlay for seamless blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50/30 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


