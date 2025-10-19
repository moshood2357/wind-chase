import {
  Building2,
  TreePine,
  Train,
  Sparkles,
  Shield,
  Home,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Building2,
      title: "Small Developments",
      description:
        "Intimate communities with character, not mass-produced estates",
    },
    {
      icon: TreePine,
      title: "Tranquil Settings",
      description: "Escape the hustle while staying connected to what matters",
    },
    {
      icon: Train,
      title: "Excellent Transport",
      description:
        "Premium locations with outstanding connectivity to major hubs",
    },
    {
      icon: Sparkles,
      title: "Luxury Finishes",
      description:
        "Exquisite attention to detail in every aspect of construction",
    },
    {
      icon: Shield,
      title: "High Standards",
      description: "Rigorous quality control throughout the building process",
    },
    {
      icon: Home,
      title: "Sense of Place",
      description: "Homes that blend seamlessly with their surroundings",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
            Our <span className="font-semibold text-amber-600">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A blend of distinct sense of place, style, and community within
            outstanding locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-sm border border-gray-100 hover:border-amber-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-amber-50 w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <Icon
                    className="h-8 w-8 text-amber-600 group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-sm p-12 text-center">
          <h3 className="text-3xl font-light text-white mb-4">
            Built by a{" "}
            <span className="font-semibold text-amber-400">Select Team</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We keep our build team to a select group who understand and adhere
            to the company&apos; ethos of luxury and value
          </p>
        </div>
      </div>
    </section>
  );
}
