"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Branding */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src="/Logo.ico" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-blue-500">Edma Voicefy: Read with Voice</span>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 mb-4 md:mb-0 font-medium">
          <Link href="/pages/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="/pages/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-8">
          <Link href="https://github.com/Razack2/Edma-voicefy" target="_blank" className="hover:text-blue-400 transition-colors">
            <FaGithub size={30} />
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Edma Voicefy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
