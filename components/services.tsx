import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Demolition and Dismantling",
      description:
        "We are specialist for all demolition works from small extensions to industrial building wings, multi-family and single-family houses to small extensions and garages is part of our daily business.",
      image: "/demolition.jpeg",
    },
    {
      title: "Pacific Home Properties",
      description:
        "Luxury new family houses and apartments in prime locations throughout greater london and the home counties. Our homes are built to the highest standards of specification and finish with unrivalled craftsmanship.",
      image: "/house.jpg",
    },
    {
      title: "Property Management",
      description:
        "We are specialist in property management services with over 25 years' experience of letting and providing various services to corporate organizations, private landlords and serviced dwellings.",
      image: "/property.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-600 text-white px-4 py-2 text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Best Service you can Buy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Pacific homes is a developer of luxury new homes throughout greater
            london, buckinghamshire and the home counties. Combining
            aspirational design with over architectural expertise, we specialise
            in creating prestigious houses and apartments in premier locations
            around the united kingdom.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md animate-fadeIn transition"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-black text-white px-4 py-2 font-semibold hover:bg-gray-800 transition text-sm">
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
