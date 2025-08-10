'use client';

import React from 'react';
import Image from 'next/image';
import CEO from '../assets/Team1.jpg'
import LM from '../assets/Team3.jpg'
import GM from '../assets/Team2.jpg'
import PM from '../assets/Team4.jpg'

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Muhammad Hassan Jahangir',
    position: 'CEO/Founder',
    image: CEO,
  },
  {
    id: 2,
    name: 'Muhammad Mohsin',
    position: 'General Manager',
    image: GM,
  },
  {
    id: 3,
    name: 'Muhammad Hasnain',
    position: 'Logistic Manager',
    image: LM,
  },
  {
    id: 4,
    name: 'Urwa Hassan',
    position: 'Project Manager',
    image: PM,
  }
];

export default function OurTeam() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 sm:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-[#83b4cc]/10 to-[#5a9bb8]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-[#5a9bb8]/10 to-[#83b4cc]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#83b4cc]/5 rounded-full blur-2xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-gray-400/20 bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content Section */}
          <div className="lg:col-span-5">
            {/* Section Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8]"></div>
                <span className="text-[#83b4cc] font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Our Team
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-[#83b4cc] to-[#5a9bb8]"></div>
              </div>
              
              <h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Meet Our
                <span className="block bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] bg-clip-text text-transparent">
                  Exceptional Team
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Exceptional professionals united by a passion for innovation and excellence in digital transformation. Our team brings together diverse expertise and unwavering commitment to deliver outstanding results for our clients.
              </p>
            </div>
          </div>

          {/* Right: Team Images - Simple 4 image layout */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="relative group transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                    {/* Member Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-[center_20%]"
                      />
                      
                      {/* Simple Overlay - Always visible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {member.name}
                          </h4>
                          <p className="text-[#83b4cc] font-semibold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {member.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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