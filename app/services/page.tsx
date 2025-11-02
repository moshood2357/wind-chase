import Header from "@/components/header";
import { TypingText } from "@/components/typing-text";
import Image from "next/image";

export default function PacificHomesLanding() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header / Nav */}
      <Header/>

      {/* Hero */}
      <section className="relative">
        <div className="h-[420px] md:h-[540px] lg:h-[620px] w-full overflow-hidden relative">
          <Image
            src="/lorry.jpg"
            alt="construction site"
            width={500}
            height={500}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          />

          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-0 md:pl-12 md:pr-24">
              <h1
                className="text-white font-bold mb-4 leading-tight tracking-tight
            text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl
            whitespace-nowrap overflow-hidden text-ellipsis"
              >
                We Build{" "}
                <span className="inline-block min-w-[260px] text-amber-400">
                  <TypingText
                    phrases={[
                      "Your Dream Home",
                      "Professional",
                      "best services",
                    ]}
                  />
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-200 opacity-90">
                <a href="#" className="hover:underline">
                  Homepage
                </a>
                <span className="text-white/50">/</span>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services intro */}
      <section id="services" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-semibold">
              OUR SERVICES
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold">
              The Best Service you can Buy
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Can&apos;t decide which online course to choose? Take a look at 6
              the most popular online courses in 2019 learn online. Browse
              Popular Services.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden border transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/property.jpg"
                width={500}
                height={500}
                alt="property management"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="font-semibold">Property Management</h3>
                <p className="mt-3 text-sm text-gray-600">
                  We are specialist in property management services with over 25
                  years&apos; experience of letting and providing various
                  services to corporate organizations, private landlords and
                  serviced dwellings.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition"
                  >
                    READ MORE{" "}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm overflow-hidden border transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/demolition.jpeg"
                width={500}
                height={500}
                alt="demolition"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="font-semibold">Demolition And Dismantling</h3>
                <p className="mt-3 text-sm text-gray-600">
                  We are specialist for all demolition works from small
                  extensions to industrial building wings, multi-family and
                  single-family houses to small extensions and garages is part
                  of our daily business.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition"
                  >
                    READ MORE{" "}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Large property card */}
          <div className="mt-8 bg-white border rounded-lg overflow-hidden shadow-sm transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=4d6f2bde7a1b6e3b5a7b9a6b"
              alt="modern home"
              width={500}
              height={500}
              className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="font-semibold">Pacific Home Properties</h3>
              <p className="mt-3 text-sm text-gray-600">
                We have a selection of exciting schemes in the pipeline across
                uk in a broad range of locations, each situated in a
                highly-sought after areas. <br /><br />
                Our developments appeal to a wide
                range of the capital’s buyers - whether you are looking for a
                central base, an investment opportunity, a first time buyer
                property or a larger family home. Pacific&apos;s philosophy of
                uncompromising quality and design aesthetics ensures that each
                home created gives enjoyment and lasting memories, to be handed
                down to future generations. <br /><br />
                The pacific homes story is not just
                about building houses. Since its formation the company&apos;s ethos
                of responsible development has created an enviable award-winning
                reputation for excellence and innovation. Today pacific homes is
                widely recognised for being the cutting edge of contemporary
                design, and particularly for the way it meets the aspirations,
                personal preferences and changing lifestyles of homebuyers.
                Whatever the price range or house style, each pacific home is
                built in a carefully selected location and designed to
                complement its environment, while meeting the practical
                requirements of everyday living. Quality and imagination
                combined with meticulous attention to exterior and internal
                detail are the key factors that have enabled pacific homes to
                secure its strong reputation for excellence.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition"
                >
                  READ MORE{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe / Footer CTA */}
      <footer className="bg-gray-900 text-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h4 className="text-lg font-bold">
                Subscribe to our mailing list for latest updates with flat{" "}
                <span className="font-extrabold">10% discount</span> promo code.
              </h4>
              <p className="mt-2 text-gray-300 text-sm">
                We’ll send you occasional updates, news and promotions.
                Unsubscribe anytime.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <input
                aria-label="Your email"
                type="email"
                placeholder="Your email"
                className="w-full md:w-auto flex-1 px-4 py-3 rounded border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-4 py-3 bg-amber-600 hover:bg-amber-500 rounded text-white font-semibold transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between">
            <div>© 2025 Pacific Homes Limited. All Rights Reserved.</div>
            <div className="flex items-center gap-6 mt-3 md:mt-0">
              <a href="#" className="hover:underline">
                About us
              </a>
              <a href="#" className="hover:underline">
                Projects
              </a>
              <a href="#" className="hover:underline">
                Services
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
