'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Footer from './Footer';
import Reveal from './utils/Reveal';

export default function AboutUs() {
  const stats = [
    { number: 250, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: '+', label: 'Happy Clients' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  // Animated Counter Component
  function AnimatedCounter({ end, suffix, duration = 1200 }) {
    const [count, setCount] = useState(0);
    const ref = useRef();
    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);
      let frame;
      function animate() {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          frame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      }
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [end, duration]);
    return (
      <span ref={ref}>{count}{suffix}</span>
    );
  }

  const values = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality work that exceeds expectations and drives measurable results.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges and stay ahead of the curve.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and build strong partnerships with our clients to achieve shared success.',
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business relationships and deliverables.',
    },
  ];

  // const team = [
  //   {
  //     name: 'Hassan Jahangir',
  //     role: 'CEO & Founder',
  //     image: require('../assets/Team1.jpg'),
  //     description: 'Visionary leader with 15+ years in business strategy and operations management.',
  //   },
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'Chief Technology Officer',
  //     image: require('../assets/Team2.jpg'),
  //     description: 'Tech innovator specializing in AI, machine learning, and scalable systems architecture.',
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'Head of Research',
  //     image: require('../assets/Team3.jpg'),
  //     description: 'PhD researcher with expertise in data analysis and cross-cultural organizational behavior.',
  //   },
  //   {
  //     name: 'Emily Rodriguez',
  //     role: 'Operations Director',
  //     image: require('../assets/Team4.jpg'),
  //     description: 'Operations expert focused on supply chain optimization and process excellence.',
  //   },
  // ];

  return (
    <>
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 sm:py-16 md:py-20" style={{ paddingTop: '100px' }}>
        {/* Enhanced Background with Geometric Patterns */}
        <div className="absolute inset-0">
          {/* Primary Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-slate-900/90"></div>
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-l from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/25 to-indigo-400/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mt-12">
            {/* Company Badge */}
            
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[0.9] tracking-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Transforming Ideas
              </span>
              <span className="block bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
                Into Impact
              </span>
            </h2>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
              <div className="w-3 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full"></div>
            </div>
            
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed max-w-3xl mx-auto font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We are a team of passionate innovators, researchers, and strategists dedicated to delivering excellence across research, technology, and business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="relative -mt-6 sm:-mt-8 mb-8 sm:mb-10 md:mb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-purple-200/30 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <Reveal key={index} direction="up" delayMs={index * 150}>
                  <div className="text-center group">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={1200 + index * 200} />
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #7c3aed 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, #6366f1 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Story
                </span>
                <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-purple-600 to-indigo-600"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Building Tomorrow&apos;s Solutions Today
              </h2>
              
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p>
                  Founded with a vision to bridge the gap between research and practical implementation, our company has grown into a trusted partner for organizations seeking innovative solutions to complex challenges.
                </p>
                <p>
                  From supply chain optimization to deep learning applications, from cross-cultural research to business planning, we bring a multidisciplinary approach that combines academic rigor with real-world pragmatism.
                </p>
                <p>
                  Our journey has been marked by successful collaborations, groundbreaking research, and a commitment to delivering measurable value to every client we serve.
                </p>
              </div>
            </div>

            <div className="relative order-1 md:order-2 hidden md:block">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl overflow-hidden shadow-xl border border-purple-200/30">
                <Image
                  src={require('../assets/blog1.jpg')}
                  alt="Work Wizard team collaborating on a project - Our Story"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #7c3aed 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, #6366f1 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Values
              </span>
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-purple-600 to-indigo-600"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              What Drives Us Forward
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our core values shape every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white border border-purple-200/30 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center hover:border-purple-300 hover:shadow-xl hover:scale-105 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 sm:mb-6 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {value.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #7c3aed 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, #6366f1 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Team
              </span>
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-purple-600 to-indigo-600"></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Meet The Experts
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden border border-purple-200/30 hover:shadow-xl hover:border-purple-300 hover:scale-105 transition-all duration-500"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {member.name}
                  </h3>
                  
                  <p className="text-purple-600 font-bold text-xs sm:text-sm mb-2 sm:mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Enhanced Background with Geometric Patterns */}
        <div className="absolute inset-0">
          {/* Primary Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-slate-900/90"></div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-l from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-400/25 to-indigo-400/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Work Together?
          </h2>
          
          <p className="text-base sm:text-lg text-purple-100 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let&apos;s discuss how we can help transform your vision into reality with innovative solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              className="group relative inline-flex items-center justify-center text-center px-6 py-3 overflow-hidden text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.hash = '#contact';
                }
              }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <a
              href="/portfolio"
              className="group inline-flex items-center justify-center text-center px-6 py-3 text-sm font-semibold text-purple-200 border-2 border-purple-400/60 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="mr-2">View Our Work</span>
              <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}