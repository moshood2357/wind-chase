import { TypingText } from "./typing-text";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden">
      {/* 🔹 Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="heroVideo"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/luxury.png"
          aria-hidden="true"
        >
          <source src="/luxury.mp4" type="video/mp4" />
          <source src="/luxury.webm" type="video/webm" />
        </video>

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔹 Hero Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto text-left">
        <h1 className="text-white font-bold mb-4 leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap overflow-hidden text-ellipsis">
          Affordable Luxury Homes {" "}
          <span className="block align-baseline">
            with <TypingText />
          </span>
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Across Greater London including some of the most affluent areas of
          Buckinghamshire, Berkshire, Hampshire and Hertfordshire.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all duration-300">
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
}
