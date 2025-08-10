'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sora } from 'next/font/google';
import AboutUsImg from '../assets/AboutUs3.jpg';
// import AboutUsImg2 from '../assets/AboutUs2.jpg';

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
      title: 'Proven Success in E-commerce Solutions',
      label: 'Custom Solutions',
      target: 83,
      postfix: '%',
    },
    {
      title: 'Trusted E-commerce Range of Services',
      label: 'Strategic Support',
      target: 88,
      postfix: '%',
    },
    {
      title: 'Data-Driven Decision-Making',
      label: 'Advance Industry Insight',
      target: 95,
      postfix: '%',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Image left, text right */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Image with decorative rectangle */}
          <div className="lg:col-span-5 lg:px-8">
            <div className="relative w-full max-w-[20rem] sm:max-w-sm md:max-w-md mx-auto" style={{ height: matchedHeight ?? 'auto' }}>
              {/* Background illustrations */}
              <div className="pointer-events-none absolute inset-0 -z-20">
                <div className="absolute -top-10 -left-12 w-44 h-44 rounded-full bg-[#83b4cc]/20 blur-3xl" />
                <div className="absolute bottom-0 -right-10 w-56 h-56 rounded-full bg-[#5a9bb8]/20 blur-3xl" />
                <div className="absolute top-12 -right-8 w-40 h-40 rounded-full bg-[#83b4cc]/10 blur-2xl" />
                <div className="absolute -left-10 bottom-12 w-1 h-40 bg-gradient-to-b from-[#83b4cc] to-[#5a9bb8] rotate-12 opacity-40" />
                <div className="absolute left-12 -top-6 w-32 h-1 bg-gradient-to-r from-[#5a9bb8] to-[#83b4cc] -rotate-12 opacity-40" />
                <div className="absolute right-8 top-6 w-32 h-32 rounded-full border-2 border-dashed border-[#83b4cc]/30" />
                {/* <svg className="absolute -bottom-18 left-75 opacity-100 -z-10" width="200" height="180" viewBox="0 0 240 180" fill="none">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                      <circle cx="1.5" cy="1.5" r="1.5" fill="#83b4cc" />
                    </pattern>
                  </defs>
                  <rect width="240" height="180" fill="url(#dots)" />
                </svg> */}
              </div>

              {/* Accent rectangle
            //   <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-36 sm:w-44 h-36 sm:h-44 bg-[#83b4cc] rounded-lg -z-10" /> */}

              {/* Primary image */}
              <div className="relative z-10 h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src={AboutUsImg}
                  alt="About Dream Weavers"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Overlapping secondary image (larger and more overlap) */}
              
            </div>
          </div>

          {/* Right: Text */}
          
          <div className="lg:col-span-7 lg:px-8" ref={rightColRef}>
            <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]"></div>
                <span className="text-[#83b4cc] font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  About Us
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-[#83b4cc] to-[#5a9bb8]"></div>
              </div>
            {/* <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              About Us
            </h2> */}
            <h3 className={`${sora.className} text-lg sm:text-2xl font-bold text-gray-900`}>
              Transforming Ideas into Digital Success
            </h3>
            <div className="mt-4 space-y-3" style={{ textAlign: 'justify' }}>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Dream Weavers is a Pakistan-based e-commerce and software company helping brands scale
                through smart systems, automation, and digital infrastructure.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We specialize in building tailored e-commerce operations and tech-driven platforms that simplify
                business processes and support sustainable growth. From backend development to scalable storefronts,
                we provide end-to-end solutions that empower entrepreneurs and enterprises to thrive in the digital economy.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Whether you&apos;re launching a new brand or optimizing an existing one, we help you build systems that grow with you.
              </p>
            </div>

            {/* Stats directly under the text in the right column */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl border border-gray-200/70 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 p-4 shadow-sm hover:shadow-md"
                >
                  <div className="absolute inset-0 rounded-2xl pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

                  <div className="flex flex-col h-full">
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]">
                        <Counter target={item.target} start={start} postfix={item.postfix} />
                      </span>
                    </div>
                    <p className="mt-2 text-gray-900 text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.title}
                    </p>
                    {item.label && (
                      <p className="mt-1 text-xs text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.label}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


