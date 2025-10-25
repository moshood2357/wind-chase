export default function About() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/lamp.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">PacificHomes</h2>

        <div className="space-y-6 text-white text-lg leading-relaxed">
          <p>
            The pacific homes story is not just about building houses. Since its
            formation the company&apos;s ethos of responsible development has created
            an enviable award-winning reputation for excellence and innovation.
          </p>

          <p>
            Today pacific homes is widely recognized for being the cutting edge
            of contemporary design, and particularly for the way it meets the
            aspirations, personal preferences and changing lifestyles of
            home buyers.
          </p>

          <p>
            Whatever the price range or house style, each pacific home is built
            in a carefully selected location and designed to complement its
            environment, while meeting the practical requirements of everyday
            living.
          </p>

          <p>
            Quality and imagination combined with meticulous attention to
            exterior and internal detail are the key factors that have enabled
            pacific homes to secure its strong reputation for excellence.
          </p>
        </div>

        <button className="mt-12 bg-yellow-600 text-white px-8 py-3 font-semibold hover:bg-yellow-700 transition">
          GET STARTED NOW →
        </button>
      </div>
    </section>
  );
}
