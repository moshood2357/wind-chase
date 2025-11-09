"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    // ✅ Only run scroll tracking on the landing page
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = [
        { id: "hero", name: "home" },
        { id: "about", name: "about" },
        { id: "services", name: "services" },
        { id: "projects", name: "projects" },
        { id: "contact", name: "contact" },
      ];

      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.name;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="py-3 bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* 🔹 Logo */}
        <div className="flex items-center">
          <Image
            src="/chase.png"
            alt="wind chase logo"
            width={150}
            height={80}
            className="object-contain"
          />
        </div>

        {/* 🔹 Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/", name: "Home", id: "home" },
            { href: "/services", name: "Our Services", id: "services" },
            { href: "/about-us", name: "About Us", id: "about" },
            { href: "/projects", name: "Projects", id: "projects" },
            { href: "/contact-us", name: "Contact Us", id: "contact" },
          ].map((link) => {
            const isActive =
              pathname === "/" && activeSection === link.id
                ? true
                : pathname === link.href && pathname !== "/"
                ? true
                : false;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`pb-1 border-b-2 transition-all duration-300 ${
                  isActive && pathname === "/"
                    ? "border-yellow-600 text-yellow-600" // highlight (landing scroll)
                    : isActive
                    ? "border-transparent text-yellow-600" // just yellow text on other pages
                    : "border-transparent text-gray-800 hover:text-yellow-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
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
            {[
              { href: "/", name: "Home" },
              { href: "/services", name: "Our Services" },
              { href: "/about-us", name: "About Us" },
              { href: "/projects", name: "Projects" },
              { href: "/contact-us", name: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-yellow-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
