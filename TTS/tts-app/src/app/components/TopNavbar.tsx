"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaCommentDots, FaArrowRight, FaHeart} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white backdrop-blur-md bg-opacity-90 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Logo.ico" alt="Logo" className="w-10 h-10" />

            <span className="text-2xl font-bold"><Link href="/">Edma Voicefy</Link></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 font-semibold">
              {/* donate */}
            <Link
                 href="/pages/donate"
                 className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
           <FaHeart className="w-5 h-5" />
          <span>Donate</span>
          </Link>
            {/* Feedback Button */}
            <Link
              href="/pages/contact"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <FaCommentDots className="w-5 h-5" />
              <span>Give us Feedback</span>
            </Link>

            {/* Sign In Button */}
            <Link
              href="/pages/auth/signin"
              className="flex items-center space-x-2 px-5 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <span>Sign In</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/pages/auth/signup"
              className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link
                 href="/pages/donate"
                 className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
           <FaHeart className="w-5 h-5" />
          <span>Donate</span>
          </Link>
            <Link
              href="/pages/contact"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaCommentDots className="w-5 h-5" />
              <span>Give us Feedback</span>
            </Link>

            <Link
              href="/pages/auth/signin"
              className="flex items-center space-x-2 px-5 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <span>Sign In</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pages/auth/signup"
              className="block px-6 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
