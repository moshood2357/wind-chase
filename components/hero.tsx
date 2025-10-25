import { TypingText } from "./typing-text"

export default function Hero() {
  return (
    <section
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/luxury.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
          Affordable Luxury homes with <TypingText />
        </h1>
        <p className="text-white text-lg mb-8 max-w-2xl">
          Across Greater London including some of the most affluent areas of
          Buckinghamshire, Berkshire, Hampshire and Hertfordshire.
        </p>
        <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition w-fit">
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
}
