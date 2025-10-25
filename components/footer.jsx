export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm">© 2020 Pacific Homes Limited. All Rights Reserved.</p>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition text-sm">
              About us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition text-sm">
              Projects
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition text-sm">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition text-sm">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
