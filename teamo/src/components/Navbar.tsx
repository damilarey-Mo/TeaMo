'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="TeaMo Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Testimonials
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                Log in
              </Link>
              <Link 
                href="/auth/register" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/features" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Features
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Pricing
            </Link>
            <Link href="/testimonials" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Testimonials
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Blog
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link href="/auth/login" className="block text-blue-600 hover:text-blue-700 px-3 py-2 text-base font-medium">
                Log in
              </Link>
              <Link 
                href="/auth/register" 
                className="block mt-2 bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 