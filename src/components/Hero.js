'use client';

import React from 'react';

/**
 * Hero component with a YouTube background video that autoplays, loops, and hides YouTube UI.
 * Pass a `videoId` (YouTube ID) to customize the background video.
 */
export default function Hero({
  videoId = 'aqz-KE-bpKQ',
  titleTop = 'We Build Exceptional',
  titleBottom = 'Digital Experiences',
  subtitle = "Web, mobile, and cloud solutions crafted for growth",
  ctaLabel = "Start a Project",
  ctaHref = "#contact",
}) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&color=white`;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/*
            Cover technique: ensure the iframe is always larger than the container
            so it visually covers it without letterboxing.
          */}
          <iframe
            title="Hero Background"
            src={embedUrl}
            className="pointer-events-none block w-[120vw] h-[67.5vw] min-w-[177.78vh] min-h-[100vh]"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        {/* Vignette and gradient overlays for readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 h-full flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-white drop-shadow-xl text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="block">{titleTop}</span>
            <span className="block">{titleBottom}</span>
          </h1>
          <p
            className="mt-4 mx-auto max-w-3xl text-white/90 text-base sm:text-lg md:text-2xl drop-shadow"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {subtitle}
          </p>

          <div className="mt-8">
            <a
              href={ctaHref}
              onClick={e => {
                // Only handle smooth scroll for hash links
                if (ctaHref.startsWith('#')) {
                  e.preventDefault();
                  const targetId = ctaHref.replace('#', '');
                  const element = document.getElementById(targetId);
                  if (element) {
                    const offsetTop = element.offsetTop - 100; // adjust for navbar height if needed
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-semibold text-white bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] rounded-full shadow-lg hover:shadow-xl group transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#5a9bb8] to-[#83b4cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>{ctaLabel}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


