import { Award, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
                Building Dreams,
                <br />
                <span className="font-semibold text-amber-600">
                  Creating Communities
                </span>
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Pacific Homes was created to bridge the gap between the desire to
              own affordable and luxury homes with great value and exquisite
              quality.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We pride ourselves in seeking out locations which offer an escape
              from the hustle and bustle of big cities and large towns whilst
              still offering great access to good transport links.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We are establishing ourselves as the go-to house builder for those
              seeking 2-5 bed houses set within small developments and built to
              exceptionally high standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-sm hover:shadow-lg transition-all group">
              <div className="bg-amber-600 w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Exceptional Quality
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Built to exceptionally high standards with meticulous attention
                to detail
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm hover:shadow-lg transition-all group sm:mt-12">
              <div className="bg-amber-600 w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Carefully selected sites offering tranquility with excellent
                connectivity
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-sm hover:shadow-lg transition-all group">
              <div className="bg-amber-600 w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Select Team
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A carefully chosen build team adhering to our ethos of luxury
                and value
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 rounded-sm text-white hover:shadow-lg transition-all sm:mt-12">
              <div className="text-4xl font-bold mb-2">2-5</div>
              <p className="text-amber-100 font-light">
                Bedroom homes in small, exclusive developments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
