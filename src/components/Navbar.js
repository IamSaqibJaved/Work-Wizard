'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isSolid = !isHome || scrolled; // Force solid on non-home pages

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '/AboutUs' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '/Portfolio' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    // If not on home, redirect to home with hash to ensure correct section navigation
    if (!isHome) {
      window.location.href = `/${href}`; // e.g., '/#contact'
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isSolid 
        ? 'backdrop-blur-xl bg-slate-900/95 border-b border-purple-500/30 shadow-2xl shadow-purple-900/20' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 group">
            <Link href={isHome ? '#home' : '/#home'} className="flex items-center space-x-3" onClick={(e) => { if (isHome) handleSmoothScroll(e, '#home'); }}>
              <Image
                src={Logo}
                alt="DreamWeavers LLC Logo"
                width={80}
                height={80}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-white'
                }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Work Wizard
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => {
                // Handle About Us and Portfolio as page links
                if (item.name === 'About Us') {
                  return (
                    <Link
                      key={item.name}
                      href="/AboutUs"
                      className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group cursor-pointer ${
                        isSolid 
                          ? 'text-purple-200 hover:text-white' 
                          : 'text-white/90 hover:text-white drop-shadow-md'
                      }`}
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 ${
                        isSolid 
                          ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20'
                          : 'bg-white/20 backdrop-blur-sm'
                      }`}></div>
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                        isSolid 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                          : 'bg-white'
                      }`}></div>
                    </Link>
                  );
                }
                
                if (item.name === 'Portfolio') {
                  return (
                    <Link
                      key={item.name}
                      href="/portfolio"
                      className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group cursor-pointer ${
                        isSolid 
                          ? 'text-purple-200 hover:text-white' 
                          : 'text-white/90 hover:text-white drop-shadow-md'
                      }`}
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 ${
                        isSolid 
                          ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20'
                          : 'bg-white/20 backdrop-blur-sm'
                      }`}></div>
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                        isSolid 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                          : 'bg-white'
                      }`}></div>
                    </Link>
                  );
                }
                
                // Handle other items as hash anchor buttons
                return (
                <button
                  key={item.name}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group cursor-pointer ${
                    isSolid 
                      ? 'text-purple-200 hover:text-white' 
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 ${
                    isSolid 
                      ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20'
                      : 'bg-white/20 backdrop-blur-sm'
                  }`}></div>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                    isSolid 
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                      : 'bg-white'
                  }`}></div>
                </button>
                );
              })}
              {/* Blogs route link */}
              <Link
                href="/blogs"
                className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 group cursor-pointer ${
                  isSolid 
                    ? 'text-purple-200 hover:text-white' 
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="relative z-10">Blogs</span>
                <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 ${
                  isSolid 
                    ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20'
                    : 'bg-white/20 backdrop-blur-sm'
                }`}></span>
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                  isSolid 
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                    : 'bg-white'
                }`}></span>
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
              <button
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl group transition-all duration-300 cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
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
                isSolid 
                  ? 'text-purple-200 hover:text-white bg-purple-500/20 hover:bg-purple-500/30'
                  : 'text-white hover:text-purple-200 bg-white/20 hover:bg-white/30'
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
        <div className="mx-4 mb-4 rounded-2xl backdrop-blur-xl bg-slate-900/95 border border-purple-500/30 shadow-2xl shadow-purple-900/20">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => {
              // Handle About Us and Portfolio as page links in mobile
              if (item.name === 'About Us') {
                return (
                  <Link
                    key={item.name}
                    href="/AboutUs"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 text-purple-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20 cursor-pointer"
                    style={{ fontFamily: 'Montserrat, sans-serif', animationDelay: `${index * 50}ms` }}
                  >
                    <span className="ml-3">{item.name}</span>
                    <svg className="w-4 h-4 ml-auto transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              }
              
              if (item.name === 'Portfolio') {
                return (
                  <Link
                    key={item.name}
                    href="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 text-purple-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20 cursor-pointer"
                    style={{ fontFamily: 'Montserrat, sans-serif', animationDelay: `${index * 50}ms` }}
                  >
                    <span className="ml-3">{item.name}</span>
                    <svg className="w-4 h-4 ml-auto transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              }
              
              // Handle other items as hash anchor buttons
              return (
              <button
                key={item.name}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 group text-purple-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20 cursor-pointer text-left"
                style={{ fontFamily: 'Montserrat, sans-serif', animationDelay: `${index * 50}ms` }}
              >
                <span className="ml-3">{item.name}</span>
                <svg className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              );
            })}
            {/* Blogs route link in mobile */}
            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="flex items-center w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 text-purple-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20 cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="ml-3">Blogs</span>
              <svg className="w-4 h-4 ml-auto transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="pt-4 border-t border-purple-500/30">
              <button
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="flex items-center justify-center w-full px-6 py-4 text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span>Get Started</span>
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