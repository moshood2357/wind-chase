"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔹 Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/chase.jpg"
            alt="Pacific Homes logo"
            width={65}
            height={50}
            className="object-contain"
          />
        </div>

        {/* 🔹 Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Our Services
          </a>
          <a
            href="#projects"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Contact Us
          </a>
        </nav>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4">
            <a
              href="#"
              className="text-gray-800 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
