import { useState } from "react";
import { MapPin, Bed, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  propertyType: string;
  image: string;
  fullDescription: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Sunset Villa",
    description:
      "Modern luxury villa with panoramic ocean views and infinity pool.",
    location: "South Croydon",
    bedrooms: 5,
    propertyType: "ongoing",
    image: "/ongoing.jpg",
    fullDescription:
      "Experience unparalleled luxury in this stunning modern villa featuring floor-to-ceiling windows, open-concept living spaces, and breathtaking ocean views. The property includes a state-of-the-art infinity pool, spa, and outdoor entertainment area.",
    features: [
      "Infinity Pool",
      "Ocean View",
      "Smart Home System",
      "Private Beach Access",
      "Home Theater",
    ],
  },
  {
    id: "2",
    title: "Metropolitan Loft",
    description:
      "Contemporary downtown loft with industrial chic design elements.",
    location: "New York, NY",
    bedrooms: 2,
    propertyType: "Completed",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription:
      "This beautifully renovated loft combines industrial charm with modern luxury. Exposed brick walls, high ceilings, and oversized windows create a unique urban living experience in the heart of downtown.",
    features: [
      "Exposed Brick",
      "High Ceilings",
      "Rooftop Access",
      "Gym",
      "Concierge Service",
    ],
  },
  {
    id: "3",
    title: "Garden Estate",
    description:
      "Elegant colonial home surrounded by manicured gardens and privacy.",
    location: "Charleston, SC",
    bedrooms: 4,
    propertyType: "Completed",
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription:
      "A timeless estate featuring classic architecture, wraparound porches, and beautifully landscaped grounds. This property offers the perfect blend of historical charm and modern amenities.",
    features: [
      "Garden",
      "Guest House",
      "Wine Cellar",
      "Library",
      "Tennis Court",
    ],
  },
  {
    id: "4",
    title: "Mountain Retreat",
    description:
      "Secluded mountain cabin with stunning alpine views and modern comforts.",
    location: "Aspen, CO",
    bedrooms: 3,
    propertyType: "Completed",
    image:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription:
      "Escape to this luxurious mountain retreat featuring rustic elegance, vaulted ceilings, and panoramic mountain views. Perfect for year-round recreation with ski-in/ski-out access.",
    features: [
      "Ski Access",
      "Mountain View",
      "Fireplace",
      "Hot Tub",
      "Game Room",
    ],
  },
  {
    id: "5",
    title: "Lakefront Manor",
    description:
      "Spacious waterfront property with private dock and boathouse.",
    location: "Lake Tahoe, NV",
    bedrooms: 6,
    propertyType: "Completed",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription:
      "This magnificent lakefront manor offers direct water access, private dock, and stunning sunset views. Features include a gourmet kitchen, entertainment wing, and outdoor living spaces.",
    features: [
      "Private Dock",
      "Lake View",
      "Boathouse",
      "Chef Kitchen",
      "Wine Storage",
    ],
  },
  {
    id: "6",
    title: "Desert Oasis",
    description:
      "Contemporary desert residence with sustainable design and natural beauty.",
    location: "Scottsdale, AZ",
    bedrooms: 4,
    propertyType: "Completed",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription:
      "A masterpiece of sustainable architecture blending seamlessly with the desert landscape. Features solar panels, drought-resistant landscaping, and indoor-outdoor living spaces.",
    features: [
      "Solar Panels",
      "Desert View",
      "Pool & Spa",
      "Outdoor Kitchen",
      "Meditation Garden",
    ],
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* <Headers /> */}

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our curated collection of exceptional properties, each
              offering unique character and unparalleled quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.propertyType}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{project.bedrooms} BD</span>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={300}
                height={300}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>
              <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold">
                {selectedProject.propertyType}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {selectedProject.title}
              </h2>

              <div className="flex items-center gap-6 mb-6 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-lg">{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-amber-500" />
                  <span className="text-lg">
                    {selectedProject.bedrooms} Bedrooms
                  </span>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {selectedProject.fullDescription}
              </p>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-amber-500 text-white py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                  Schedule Viewing
                </button>
                <button className="flex-1 bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
