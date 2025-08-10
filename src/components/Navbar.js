/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'backdrop-blur-xl bg-white/95 border-b border-gray-200/50 shadow-2xl shadow-gray-900/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 group">
            <Link href="#home" className="flex items-center space-x-3" onClick={(e) => handleSmoothScroll(e, '#home')}>
              <Image
                src={Logo}
                alt="DreamWeavers LLC Logo"
                width={50}
                height={50}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  DreamWeavers LLC
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group cursor-pointer ${
                    scrolled 
                      ? 'text-gray-700 hover:text-[#83b4cc]' 
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-[#83b4cc]/10 to-[#5a9bb8]/10'
                      : 'bg-white/20 backdrop-blur-sm'
                  }`}></div>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]'
                      : 'bg-white'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-semibold text-white bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] rounded-full shadow-lg hover:shadow-xl group transition-all duration-300 cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#5a9bb8] to-[#83b4cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <span>Let's Connect</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#83b4cc] bg-white/50 hover:bg-white/80'
                  : 'text-white hover:text-[#83b4cc] bg-white/20 hover:bg-white/30'
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 translate-x-3' : ''
                  }`}
                ></span>
                <span
                  className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current rounded-full transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-out ${
        isOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      } overflow-hidden`}>
        <div className="mx-4 mb-4 rounded-2xl backdrop-blur-xl bg-white/95 border border-gray-200/50 shadow-2xl shadow-gray-900/10">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 group text-gray-700 hover:text-[#83b4cc] hover:bg-gradient-to-r hover:from-[#83b4cc]/10 hover:to-[#5a9bb8]/10 cursor-pointer text-left"
                style={{ fontFamily: 'Montserrat, sans-serif', animationDelay: `${index * 50}ms` }}
              >
                <span className="ml-3">{item.name}</span>
                <svg className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200/50">
              <button
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="flex items-center justify-center w-full px-6 py-4 text-white font-semibold bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span>Let's Connect</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;