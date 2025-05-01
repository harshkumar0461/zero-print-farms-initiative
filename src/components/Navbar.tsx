
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-zeroprint-green">ZeroPrint</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-zeroprint-green">
              Home
            </a>
            <a href="#mission" className="font-medium hover:text-zeroprint-green">
              About
            </a>
            <a href="#solutions" className="font-medium hover:text-zeroprint-green">
              Our Solutions
            </a>
            <a href="#how-it-works" className="font-medium hover:text-zeroprint-green">
              How It Works
            </a>
            <a href="#contact" className="font-medium hover:text-zeroprint-green">
              Contact
            </a>
            <a
              href="#join-waitlist"
              className="btn-primary"
            >
              Join The Waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-zeroprint-green hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#mission"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
            >
              Our Solutions
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
            >
              Contact
            </a>
            <a
              href="#join-waitlist"
              className="block px-3 py-3 rounded-md text-center bg-zeroprint-green text-white font-medium"
            >
              Join The Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
