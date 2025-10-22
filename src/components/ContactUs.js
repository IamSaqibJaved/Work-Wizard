'use client';

import React, { useState } from 'react';
import { openWhatsApp } from './utils/whatsapp';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneE164NoPlus = '447380270004';
    const rawMessage = `Hello Work Wizard,\n\nMy name is ${formData.firstName} ${formData.lastName}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nProject details:\n${formData.message}`;
    openWhatsApp(phoneE164NoPlus, rawMessage);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-l from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Header + Contact Information */}
          <div className="lg:col-span-5 order-1 lg:order-1">
          
            {/* Contact Information Section */}
            <div className="p-6 sm:p-8">
              {/* Section Header (moved to align with left column) */}
              <div className="mb-8 sm:mb-10">
                <div className="mb-6">
                  <span className="text-purple-600 text-lg font-bold tracking-wider uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Contact Us
                  </span>
                  <div className="w-16 h-0.5 bg-purple-600 mt-2"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  We’d Love To Hear From You
                </h2>
                <p className="text-base text-gray-600 leading-relaxed max-w-3xl text-justify" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Tell us about your project, goals, or challenges. Our team will get back to you promptly with next steps and tailored guidance.
                </p>
              </div>
              
              {/* Section subheading handled above */}

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Phone Numbers
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm sm:text-base">+44 7380 270004</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Email Address
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm sm:text-base">Yourworkwizard@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Office Locations
                      </h4>
                    <div className="space-y-2 text-gray-600">
                      <p className="leading-relaxed text-sm sm:text-base">Worship Square, 65 Clifton Street, London, EC2A 4JE, United Kingdom</p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours removed as requested */}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 order-2 lg:order-2 self-start">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* Enhanced Form Background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Fields Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 bg-gray-50 hover:bg-white text-sm sm:text-base"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 bg-gray-50 hover:bg-white text-sm sm:text-base"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 bg-gray-50 hover:bg-white text-sm sm:text-base"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#83b4cc]/20 focus:border-[#83b4cc] transition-all duration-300 placeholder-gray-400 bg-gray-50 hover:bg-white text-sm sm:text-base"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Research Guidance</option>
                      <option>Academic Coaching & Tutoring</option>
                      <option>Editing, Formatting & Referencing</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>UI/UX Design (Figma)</option>
                      <option>Shopify Store Creation</option>
                      <option>eBay Dropshipping (USA & UK)</option>
                      <option>Amazon FBM Setup & Management</option>
                      <option>Presentations with Speaker Notes</option>
                      <option>Originality & Academic Integrity Support</option>
                      <option>Data Analysis Coaching (SPSS, Excel, Python)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all duration-300 placeholder-gray-400 resize-none bg-gray-50 hover:bg-white text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                      placeholder="Tell us about your project, requirements, and timeline..."
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 rounded-md border border-purple-400/60 bg-white accent-purple-600 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600 transition-all duration-200 shadow-sm"
                    />
                    <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      I agree to the{' '}
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}
                        className="text-purple-600 underline hover:text-indigo-600 transition-colors font-medium"
                      >
                        privacy policy
                      </a>
                      {' '}and consent to being contacted regarding my inquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-indigo-600 hover:to-purple-600 transform hover:scale-[1.02] transition-all duration-300 focus:ring-4 focus:ring-purple-500/20 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Privacy Policy Modal */}
    {showPrivacy && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" onClick={() => setShowPrivacy(false)} aria-hidden="true" />
        <div className="relative bg-white w-[92%] sm:w-[600px] max-h-[80vh] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>Privacy Policy</h3>
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-label="Close privacy policy"
            >
              <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-5 sm:px-6 py-4 overflow-y-auto space-y-4 text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p>
              We respect your privacy. We collect the information you provide in this form to respond to your inquiry and deliver the services you request. We do not sell your personal information.
            </p>
            <p>
              Information collected may include your name, email, phone, service interest, and message details. We process this data on the basis of legitimate interest and with your consent.
            </p>
            <p>
              We implement reasonable security measures to protect your data. You can request access, correction, or deletion of your data by contacting us at <span className="font-medium">Yourworkwizard@gmail.com</span>.
            </p>
            <p>
              By submitting this form, you consent to being contacted regarding your inquiry via email, phone, or messaging apps you provide. We retain data only as long as necessary to fulfill the purposes outlined above.
            </p>
          </div>
          <div className="px-5 sm:px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

