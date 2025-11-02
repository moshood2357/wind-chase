import Image from "next/image";

export default function Contacts() {
  return(
    <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
      <div>
        <div className="mb-4">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-semibold">
            CONTACT
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold">
          We’re Here To Help You
        </h2>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          We are waiting for you at our office in London or online. Contact us
          via{" "}
          <a
            href="mailto:enquiries@pacifichomesltd.co.uk"
            className="text-amber-600 font-medium"
          >
            enquiries@pacifichomesltd.co.uk
          </a>
          <br />
          Tel: +44 (0) 1908 911 945 or the contact form below your idea. We are
          here to answer any question.
        </p>

        {/* Contact Form */}
        <form className="mt-8 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="button"
            className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop"
          alt="team meeting"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
  )
}
