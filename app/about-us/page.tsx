"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="h-[350px] md:h-[480px] lg:h-[520px] relative w-full overflow-hidden">
          <Image
            src="/lounges.jpg"
            alt="About hero"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <h1 className="text-white font-bold mb-3 leading-tight text-3xl md:text-5xl">
                About Us
              </h1>
              <div className="mt-3 flex items-center gap-3 text-sm text-gray-200">
                <Link href="/" className="hover:underline">
                  Homepage
                </Link>
                <span className="text-white/50">/</span>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
          {/* Section 1 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-block bg-amber-100 text-amber-800 uppercase rounded-full px-3 sm:px-4 py-1 text-xs font-semibold mb-4">
                Welcome to Wind Chase
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Wind Chase was created to bridge the gap between the desire to
                own affordable and luxury homes with great value and exquisite
                quality. We pride ourselves in seeking out locations which offer
                an escape from the hustle and bustle of big cities and large
                towns whilst still offering great access to good transport
                links.
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
                alt="interior design"
                width={600}
                height={900}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </section>

          {/* Section 2 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
                Wind Chase Properties
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
                Wind Chase’s philosophy of uncompromising quality and design
                aesthetics ensures that each home created gives enjoyment and
                lasting memories, to be handed down to future generations.
              </p>

              <p className="text-gray-600 text-sm sm:text-base">
                Whatever the price range or house style, each home at Wind Chase is
                built in a carefully selected location and designed to
                complement its environment, while meeting the practical
                requirements of everyday living.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
