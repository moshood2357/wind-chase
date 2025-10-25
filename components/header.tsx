import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/chase.jpg"
            alt="logo"
            width={65}
            height={50}
            className=""
          />
        </div>
        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            About us
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Our Services
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-600 transition"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
