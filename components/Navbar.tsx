import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Akram Guroo
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
