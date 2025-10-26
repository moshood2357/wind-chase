export default function About() {
  return (
    <section
      className="relative py-20 sm:py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(/lamp.jpg)",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Pacific Homes
        </h2>

        <div className="space-y-6 text-white text-base sm:text-lg md:text-xl leading-relaxed font-light">
          <p>
            The Pacific Homes story is not just about building houses. Since its
            formation, our ethos of responsible development has built an
            award-winning reputation for excellence and innovation.
          </p>

          <p>
            Today, Pacific Homes is recognized for being at the cutting edge of
            contemporary design — meeting the aspirations, preferences, and
            evolving lifestyles of modern home buyers.
          </p>

          <p>
            Whatever the style or price range, every Pacific Home is designed to
            complement its surroundings while fulfilling the practical demands
            of daily living.
          </p>

          <p>
            Quality, imagination, and meticulous attention to both exterior and
            interior details are the hallmarks that define Pacific Homes’
            reputation for excellence.
          </p>
        </div>

        <button className="mt-12 bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-yellow-700 transition duration-300 shadow-md">
          GET STARTED NOW →
        </button>
      </div>
    </section>
  );
}
