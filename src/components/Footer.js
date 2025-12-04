'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/Logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-purple-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-l from-indigo-500/3 to-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/2 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-12">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Left Section - Company Info & Contact */}
            <div className="lg:col-span-1">
              {/* Company Logo and Name */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative w-20 h-20">
                  <Image
                    src={Logo}
                    alt="Work Wizard Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Work Wizard
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 mt-2"></div>
                </div>
              </div>
              
              {/* Company Blurb & Contact */}
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    About Work Wizard
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Intelligent work solutions for ethical academic support, research guidance, and modern
                    web/app development and e‑commerce. We help you plan, build, and scale.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Contact Information
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Email: Jawadnawaz61@gmail.com<br />
                    Phone: +44 7380 270004
                  </p>
                </div>
              </div>

              
              

              {/* Social Media */}
              <div className="flex space-x-4">
                {/* <Link href="https://www.facebook.com/dreamweaversllc/" className="group">
                  <div className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </Link> */}
                
                {/* Instagram logo */}
                {/* <Link href="https://www.instagram.com/dreamweaversllc/?hl=en" className="group" aria-label="Instagram">
                  <div className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    {/* Instagram SVG */}
                    {/* <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z"/>
                    </svg>
                  </div>
                </Link>  */}
                
                {/* <Link href="https://www.tiktok.com/@dreamweaversllc1" className="group">
                  <div className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                </Link> */}
                
                {/* <Link href="https://www.youtube.com/@hassanjahangirdw" className="group">
                  <div className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </Link> */}
              </div>
            </div>

            {/* Right Section - Quick Links & Services */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quick Links */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-purple-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Company
                  </h3>
                  <div className="space-y-3">
                    <Link href="/AboutUs" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      About Us
                    </Link>
                    <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Services
                    </Link>
                    <Link href="/Portfolio" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Portfolio
                    </Link>
                    <Link href="/#contact" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-purple-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Services
                  </h3>
                  <div className="space-y-3">
                    <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Research Guidance
                    </Link>
                    <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Web Development
                    </Link>
                    <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      App Development
                    </Link>
                    <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      UI/UX Design (Figma)
                    </Link>
                    <Link href="/#services" className="block text-gray-300 hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Data Analysis Coaching
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-purple-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Location
                </h3>
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  {/* Embedded Google Map */}
                  <div className="relative w-full h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1234567890!2d-0.0845!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876034c8c8c8c8c%3A0x1234567890abcdef!2s65%20Clifton%20Street%2C%20London%20EC2A%204JE%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                      title="Work Wizard Office Location"
                    ></iframe>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Visit our London office or connect with us remotely worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center">
            <div className="text-gray-400 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              © 2025 Work Wizard. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
