export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} Pacific Homes Limited. All Rights Reserved.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              Projects
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-sm">
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          Built with ❤️ by Pacific Homes Team
        </div>
      </div>
    </footer>
  );
}
