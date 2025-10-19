"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
                Start Your
                <br />
                <span className="font-semibold text-amber-600">
                  Journey Home
                </span>
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Discover how Pacific Homes can help you find your perfect luxury
              home. Our team is ready to guide you through every step of the
              journey.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-amber-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 font-light">
                    +44 (0) 20 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-amber-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 font-light">
                    hello@pacifichomes.co.uk
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="h-5 w-5 text-amber-600"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                  <p className="text-gray-600 font-light">
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-sm">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Why Choose Pacific Homes?
              </h3>
              <ul className="space-y-3 text-gray-300 font-light">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Exceptional build quality
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Prime, carefully selected locations
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Affordable luxury homes
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Small, exclusive developments
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-sm shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none"
                  placeholder="+44 (0) 20 1234 5678"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your dream home..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-6 py-4 rounded-sm hover:bg-amber-700 transition-all flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
