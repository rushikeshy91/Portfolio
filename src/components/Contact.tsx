"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Get In Touch
        </h2>
        <p className="text-center text-blue-400 mb-12 text-lg">
          Let&apos;s discuss your IAM and security needs
        </p>
        
        <div className="bg-slate-800 border border-blue-500/30 rounded-lg shadow-2xl p-8">
          {/* Secure Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-green-400 text-sm font-mono">Secure Contact Form</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
                placeholder="How can I help with your IAM or security needs?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-800 border border-blue-500/20 rounded-lg p-6">
            <svg className="w-8 h-8 text-blue-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <div className="text-gray-400 text-sm mb-1">Email</div>
            <a href="mailto:rushikesh.yeldari@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              rushikesh.yeldari@example.com
            </a>
          </div>
          
          <div className="bg-slate-800 border border-blue-500/20 rounded-lg p-6">
            <svg className="w-8 h-8 text-cyan-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <div className="text-gray-400 text-sm mb-1">LinkedIn</div>
            <a href="https://linkedin.com/in/rushikesh-yeldari" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Connect with me
            </a>
          </div>
          
          <div className="bg-slate-800 border border-blue-500/20 rounded-lg p-6">
            <svg className="w-8 h-8 text-blue-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <div className="text-gray-400 text-sm mb-1">Location</div>
            <div className="text-blue-400">Pune, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
