import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Simple Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            NEW GOLF CARTS
          </Link>
          <Link href="/brands/denago" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            DENAGO
          </Link>
          <Link href="/brands/evolution" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            EVOLUTION
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            ABOUT
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            CONTACT
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            PRIVACY POLICY
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            TERMS OF SERVICE
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <div className="text-gray-600 text-sm">
            © 2025 Ocean County Golf Carts. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}