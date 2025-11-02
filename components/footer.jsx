import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-12">
      {/* Subscribe / Footer CTA */}
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
          <div>© 2025 Wind Chase Limited. All Rights Reserved.</div>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:underline">
              About us
            </Link>
            <Link href="#" className="hover:underline">
              Projects
            </Link>
            <Link href="#" className="hover:underline">
              Services
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
