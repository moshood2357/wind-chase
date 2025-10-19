"use client"

import { MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Locations() {
  const locations = [
    {
      name: "Greater London",
      description: "Premium developments in prime London locations",
      image:
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Buckinghamshire",
      description: "Exclusive homes in one of the most affluent counties",
      image:
        "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Berkshire",
      description: "Luxury living in the heart of the Thames Valley",
      image:
        "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Hampshire",
      description: "Beautiful homes in stunning countryside settings",
      image:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Hertfordshire",
      description: "Perfect blend of rural charm and urban convenience",
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
            Prime{" "}
            <span className="font-semibold text-amber-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Exquisite homes situated across the most affluent areas of Greater
            London and the Home Counties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.slice(0, 3).map((location, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-gray-900 aspect-[4/5] cursor-pointer"
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin
                      className="h-5 w-5 text-amber-400"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-2xl font-semibold text-white">
                      {location.name}
                    </h3>
                  </div>
                  <p className="text-gray-200 font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {location.description}
                  </p>
                  <div className="flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-light">Explore</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {locations.slice(3).map((location, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-gray-900 aspect-[16/9] cursor-pointer"
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin
                      className="h-5 w-5 text-amber-400"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-2xl font-semibold text-white">
                      {location.name}
                    </h3>
                  </div>
                  <p className="text-gray-200 font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {location.description}
                  </p>
                  <div className="flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-light">Explore</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
