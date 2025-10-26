import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Demolition and Dismantling",
      description:
        "We specialize in all demolition works, from small extensions to industrial structures, multi-family and single-family houses. Every project is handled with precision and safety in mind.",
      image: "/demolition.jpeg",
    },
    {
      title: "Pacific Home Properties",
      description:
        "Luxury family homes and apartments in prime locations throughout Greater London and the Home Counties. Built with superior craftsmanship and high-end finishes.",
      image: "/house.jpg",
    },
    {
      title: "Property Management",
      description:
        "With over 25 years of experience, we provide property management services for corporate organizations, private landlords, and serviced dwellings.",
      image: "/property.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <span className="inline-block bg-yellow-600 text-white px-4 py-2 text-sm font-semibold mb-4 rounded-md">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The Best Service You Can Buy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            Pacific Homes is a developer of luxury new homes throughout Greater
            London, Buckinghamshire, and the Home Counties. Combining
            aspirational design with architectural excellence, we create
            prestigious homes in premier UK locations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-black text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-gray-800 transition">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
