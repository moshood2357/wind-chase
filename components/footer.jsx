import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Wind Chase Limited. All Rights Reserved.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            <Link href="/about-us" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              About Us
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              Projects
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              Services
            </Link>
            <Link href="contact-us" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          Built with ❤️ by <span>
              <a
                rel="noopener noreferrer"
                className="underline text-blue-500"
                href="https://r2systemsolution.co.uk"
                target="_blank"
              >
                R2 system solution Ltd.
              </a>
            </span>
        </div>
      </div>
    </footer>
  );
}
