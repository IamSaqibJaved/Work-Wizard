'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from './utils/Reveal';
import Project5 from '../assets/Project2.png';
import Project2 from '../assets/Project1.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import Project1 from '../assets/Project5.png';
import Project6 from '../assets/Project6.png';
import Footer from './Footer';

const projects = [
  {
    id: 1,
    title: 'SwiftRoute - Next-Gen Courier Platform',
    description: `SwiftRoute is an intelligent logistics system designed to improve Pakistan’s courier industry by optimizing routes, enhancing real-time tracking, and 
simplifying scheduling. It offers scalable, secure operations with dynamic pricing and personalized delivery options. A key feature is package 
inspection, enabling customers to verify packages before acceptance, reducing returns and building trust. SwiftRoute streamlines delivery 
workflows, boosts efficiency, and supports the growth of Pakistan’s e-commerce logistics sector`,
    image: Project6,
    link: '/projects/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Supply Chain Management',
    description: `This report evaluates operational excellence in supply chain management, focusing on the key drivers of success such as leadership and strategy, and technology and innovation. It analyzes Amazon's exemplary practices in supply chain management, including inventory management, optimization of logistics, and the integration of advanced technologies like AI and blockchain. The report also discusses the importance of lean/agile integration to improve efficiency and responsiveness, ultimately enhancing customer satisfaction and reducing costs. With recommendations such as technological integration and strengthening supplier relationships, the report aims to provide actionable insights into improving supply chain operations for long-term success.`,
    image: Project5,
    link: '/projects/ecommerce-platform',
  },
  {
    id: 3,
    title: 'Dissertation',
    description: `This research report explores the intricate relationship between employee motivation and cross-cultural communication in the Indian pharmaceutical sector. The study highlights how cultural diversity in the workplace affects employees' perceptions of motivation, using Herzberg's Two-Factor Theory as a framework. Key areas of focus include how achievement, recognition, job security, and working conditions vary across cultures and influence job satisfaction. The report also discusses communication barriers, strategies for improving cross-cultural communication, and provides practical recommendations for managing multicultural teams.`,
    image: Project2,
    link: '/projects/mobile-banking',
  },
  {
    id: 4,
    title: 'Business Plan',
    description: `The Masala Vault WrapWay is a mobile food truck venture dedicated to bringing authentic Indian regional street food to the streets of Newcastle. Specializing in Indian wraps like Kolkata's Kathi Rolls, Rajasthan's Laal Maas, and Punjab's Tandoori Chicken, the business offers quick, affordable, and authentic meals served in fresh, soft parathas. With a focus on authentic Indian flavors and regional variety, The Masala Vault WrapWay caters to students, young professionals, and event-goers who crave convenient and flavorful food on-the-go. The food truck aims to fill the gap in the Newcastle market for genuine, regional Indian wraps, providing a unique and exciting alternative to the typical fast food options available in the city.`,
    image: Project3,
    link: '/projects/ai-analytics',
  },
  {
    id: 5,
    title: 'Deep Learning',
    description: `This project applies deep learning to classify wildlife species from images, using Convolutional Neural Networks (CNNs) to automate the process of identifying species in wildlife photography. The focus is on using transfer learning with pre-trained models, particularly ResNet50, to enhance model performance, especially with smaller image datasets. The project's goal is to improve accuracy and efficiency in monitoring wildlife species for conservation efforts. By employing data augmentation techniques and the power of transfer learning, the model achieved an impressive 99.42% accuracy on the test set, showcasing its effectiveness in real-world applications such as biodiversity monitoring and conservation.`,
    image: Project4,
    link: '/projects/healthcare-system',
  },
  {
    id: 6,
    title: 'Level III Diploma',
    description: `Level III Diploma of Social Health Care - coursework & certification project. Includes four assessed assignments covering personal development, communication, UK healthcare policy, and reflective practice.`,
    image: Project1,
    link: '/projects/real-estate',
    details: [
      {
        title: 'Assignment 1: Personal and Academic Development',
        description: `This assignment focuses on developing personal and academic skills within the context of health and social care. It explores challenges in academic writing, the improvement of study skills, and reflects on personal learning incidents using Gibbs' and Johns' models of reflection. The task includes the analysis of caregiver stress and dementia care, offering insights into the application of critical thinking and reflection in professional practice.`,
      },
      {
        title: 'Assignment 2: Communicating in Health and Social Care',
        description: `This assignment examines the importance of communication skills in health and social care settings. It compares two theoretical approaches to communication, identifies different communication types, and discusses the factors influencing communication. Furthermore, it evaluates the role of ICT in improving communication in these settings and explains the Data Protection Act 2018's relevance.`,
      },
      {
        title: 'Assignment 3: Healthcare Policy in the UK',
        description: `This assignment delves into the significant historical and contemporary landmarks in healthcare provision in the UK. It analyzes key healthcare policy reforms from the Labour Government, the Conservative/Liberal Coalition's health agenda, and recent healthcare proposals, focusing on their impact on service users.`,
      },
      {
        title: 'Assignment 4: Reflective Practice and Personal Development',
        description: `This assignment focuses on reflective practice in health and social care, specifically the use of reflective models and personal development plans (PDPs). It discusses how these models support professional development and how research can be integrated into practice to improve healthcare delivery.`,
      },
    ],
  },
];

export default function PortfolioPage() {
  const [openId, setOpenId] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
  <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-600"></div>
            <span className="px-4 text-indigo-600 font-semibold text-sm uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Portfolio
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-600"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Featured Projects
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore our comprehensive collection of research, analysis, and business ventures
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={project.id} direction={isEven ? 'left' : 'right'} delayMs={80 * index}>
                <div className={`group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-indigo-100 transition-all duration-500 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image Container */}
                    <div className="w-full md:w-5/12 lg:w-1/2 flex items-center justify-center bg-gray-50">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        className="transition-transform duration-700 max-w-full max-h-full" 
                      />
                    </div>

                    {/* Content Container */}
                    <div className="w-full md:w-7/12 lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="h-px w-6 bg-indigo-600"></span>
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
                        {project.description}
                      </p>

                      {project.details && (
                        <button
                          onClick={() => setOpenId(openId === project.id ? null : project.id)}
                          className="inline-flex items-center gap-2 text-indigo-600 font-semibold group/btn"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          <span>{openId === project.id ? 'Hide Details' : 'View Details'}</span>
                          <svg 
                            className={`w-5 h-5 transition-transform duration-300 ${openId === project.id ? 'rotate-180' : 'group-hover/btn:translate-x-1'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={openId === project.id ? "M5 15l7-7 7 7" : "M9 5l7 7-7 7"} />
                          </svg>
                        </button>
                      )}

                      {/* Tabbed Details Panel for Last Project */}
                      {project.details && openId === project.id && (
                        <div 
                          className="absolute left-0 top-0 w-full h-full bg-gray-50 bg-opacity-95 border border-gray-200 rounded-xl overflow-hidden z-20 flex flex-col" 
                          style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.12)' }}
                        >
                          <button
                            onClick={() => setOpenId(null)}
                            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 group/btn absolute bottom-6 right-6 z-30 px-4 py-2 bg-white border border-indigo-600 rounded-lg shadow hover:bg-indigo-50"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            <span>Hide Details</span>
                            <svg 
                              className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          {/* Tabs */}
                          <div className="flex border-b border-gray-200 bg-white overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-100" style={{ minHeight: '56px' }}>
                            {project.details.map((detail, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-300 border-b-2 ${
                                  activeTab === idx
                                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
                                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                              >
                                Assignment {idx + 1}
                              </button>
                            ))}
                          </div>

                          {/* Tab Content */}
                          <div className="p-6 lg:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-gray-100" style={{ flex: 1, minHeight: 0 }}>
                            <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {project.details[activeTab].title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
                              {project.details[activeTab].description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}