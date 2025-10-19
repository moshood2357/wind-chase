"use client"

import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
            Luxury Homes,
            <br />
            <span className="font-semibold text-amber-400">
              Exceptional Value
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Bridging the gap between affordable and luxury living. Discover
            exquisite 2-5 bedroom homes in prime locations across Greater
            London.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToContact}
              className="group bg-amber-600 text-white px-8 py-4 rounded-sm hover:bg-amber-700 transition-all flex items-center space-x-2 text-lg font-light shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Explore Our Homes</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToAbout}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-sm border border-white/20 hover:bg-white/20 transition-all text-lg font-light"
            >
              Learn More
            </button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
