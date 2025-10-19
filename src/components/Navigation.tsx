"use client"

import {  Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center justify-content-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            {/* <Home className="h-8 w-8 text-amber-600" strokeWidth={1.5} /> */}
            <Image
                            src = "/windchase.jpg"
                            alt= "logo"
                            width = {80}
                            height={90}
                            // className="absolute inset-0  object-cover group-hover:scale-110 transition-transform duration-700"
                          />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-amber-600 transition-colors font-light"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-amber-600 transition-colors font-light"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="text-gray-600 hover:text-amber-600 transition-colors font-light"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-sm hover:bg-amber-700 transition-all font-light"
            >
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-sm transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-sm transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-sm transition-colors"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 bg-amber-600 text-white hover:bg-amber-700 rounded-sm transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
