"use client";

import Header from "@/components/header";
import { TypingText } from "@/components/typing-text";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="h-[350px] md:h-[480px] lg:h-[520px] relative w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
            alt="contact hero"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h1 className="text-white font-bold mb-3 leading-tight text-3xl md:text-5xl">
                Contact us via the{" "}
                <span className="text-amber-400">
                  <TypingText
                    phrases={["telephone", "email", "contact form"]}
                  />
                </span>
              </h1>
              <div className="mt-3 flex items-center gap-3 text-sm text-gray-200">
                <Link href="/" className="hover:underline">
                  Homepage
                </Link>
                <span className="text-white/50">/</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-semibold">
                CONTACT
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              We’re Here To Help You
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              We are waiting for you at our office in London or online. Contact
              us via{" "}
              <a
                href="mailto:enquiries@pacifichomesltd.co.uk"
                className="text-amber-600 font-medium"
              >
                enquiries@pacifichomesltd.co.uk
              </a>
              <br />
              Tel: +44 (0) 1908 911 945 or the contact form below your idea. We
              are here to answer any question.
            </p>

            {/* Contact Form */}
            <form className="mt-8 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop"
              alt="team meeting"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>© 2025 Pacific Homes Limited. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Projects
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
