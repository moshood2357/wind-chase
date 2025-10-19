"use client"

import { Home, Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-amber-400" strokeWidth={1.5} />
              <span className="text-2xl font-light">
                Pacific <span className="font-semibold">Homes</span>
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Building luxury homes with exceptional value across Greater London
              and the Home Counties.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-amber-400 transition-colors"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="hover:text-amber-400 transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Locations</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>Greater London</li>
              <li>Buckinghamshire</li>
              <li>Berkshire</li>
              <li>Hampshire</li>
              <li>Hertfordshire</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-gray-400 font-light mb-4">
              Follow us on social media for the latest updates.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-light">
              © {currentYear} Pacific Homes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 font-light">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
