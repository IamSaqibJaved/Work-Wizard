'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';
import Project4 from '../assets/Project4.jpg';

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: Project1,
    description: 'Modern e-commerce solution with advanced features',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: Project2,
    description: 'Secure banking application with biometric authentication',
    technologies: ['React Native', 'Firebase', 'AWS'],
    link: '/projects/mobile-banking'
  },
  {
    id: 3,
    title: 'AI-Powered Analytics',
    category: 'AI & Machine Learning',
    image: Project3,
    description: 'Intelligent data analytics platform with predictive insights',
    technologies: ['Python', 'TensorFlow', 'Django'],
    link: '/projects/ai-analytics'
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    category: 'Enterprise Solutions',
    image: Project4,
    description: 'Comprehensive healthcare management and patient care system',
    technologies: ['Angular', 'Java', 'PostgreSQL'],
    link: '/projects/healthcare-system'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: 'Web Development',
    image: Project1,
    description: 'Property listing and management platform with virtual tours',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    link: '/projects/real-estate'
  },
  {
    id: 6,
    title: 'IoT Smart Home System',
    category: 'IoT & Hardware',
    image: Project2,
    description: 'Connected home automation system with mobile control',
    technologies: ['Arduino', 'Raspberry Pi', 'Node.js'],
    link: '/projects/smart-home'
  }
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-[#83b4cc]/8 to-[#5a9bb8]/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-l from-[#5a9bb8]/8 to-[#83b4cc]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#83b4cc]/5 rounded-full blur-2xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="h-full w-full bg-grid-gray-400/10 bg-[size:40px_40px]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        {/* Clean Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] rounded-full"></div>
            <span className="text-[#83b4cc] font-semibold text-sm uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Portfolio
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-[#83b4cc] to-[#5a9bb8] rounded-full"></div>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore Our
            <span className="block bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore our diverse portfolio and discover how we&apos;re pushing boundaries and shaping the future with innovative solutions across various industries.
          </p>
        </div>

        {/* Images Only Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROJECTS.map((project) => (
            <Link 
              href={project.link} 
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden">
                {/* Project Image Only */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Always Visible Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* View Details Link */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-white text-sm font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          View Details
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Clean Call to Action */}
        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#83b4cc] to-[#5a9bb8] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            View Our All Work
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
