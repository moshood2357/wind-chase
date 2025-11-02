
import Image from "next/image";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Header*/}
      <Header />

      {/* Hero */}

      <section className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10">
          <Image
            src="/lounge.jpeg"
            alt="Pacific Homes"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        {/* 🔹 Hero Text Content */}
        <div className="absolute top-30 left-40 z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto text-left">
          <h1
            className="text-white font-bold mb-4
            text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl
            whitespace-nowrap overflow-hidden "
          >
            About Us
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-0 mt-24">
        {/* Section 1 */}
        <section className="bg-white py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-block bg-amber-100 text-amber-800 uppercase rounded-full px-3 sm:px-4 py-1 text-xs font-semibold mb-4">
                Welcome to Pacific Homes
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Pacific homes was created to bridge the gap between the desire
                to own affordable and luxury homes with great value and
                exquisite quality. We pride ourselves in seeking out locations
                which offer an escape from the hustle and bustle of big cities
                and large towns whilst still offering great access to good
                transport links.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                We are establishing ourselves as the go-to house builder for
                those seeking 2-5 bed houses set within small developments and
                built to exceptionally high standards and to this end we keep
                our build team to a select group who understand and adhere to
                the company&apos;s ethos of luxury and value.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                All our homes are a blend of distinct sense of place, style, and
                community within outstanding locations. These exquisite homes
                are situated in prime locations across Greater London including
                some of the most affluent areas of Buckinghamshire, Berkshire,
                Hampshire and Hertfordshire.
              </p>
            </div>

            <div className="lg:col-span-5">
              <Image
                src="/interior.jpg"
                alt="kitchen"
                width={600}
                height={900}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Image
                src="/interior.jpg"
                alt="living area"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>
            <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-md">
              <div className="inline-block bg-amber-100 text-amber-800 uppercase rounded-full px-3 py-1 text-xs font-semibold mb-4">
                Pacific Home Properties
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Exciting schemes across the UK
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3 text-sm sm:text-base">
                We have a selection of exciting schemes in the pipeline across
                the UK in a broad range of locations, each situated in highly
                sought-after areas. Our developments appeal to a wide range of
                buyers — whether you’re looking for a central base, an
                investment opportunity, a first-time buyer property, or a larger
                family home.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">
                Pacific’s philosophy of uncompromising quality and design
                aesthetics ensures that each home created gives enjoyment and
                lasting memories, to be handed down to future generations.
              </p>

              <p className="text-gray-600 text-sm sm:text-base">
                Whatever the price range or house style, each Pacific Home is
                built in a carefully selected location and designed to
                complement its environment, while meeting the practical
                requirements of everyday living.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm">
            © 2020 Pacific Homes Limited. All Rights Reserved.
          </div>
          <ul className="flex flex-wrap justify-center gap-5 text-sm">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
