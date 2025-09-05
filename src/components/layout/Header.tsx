'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <span className="text-blue-600 font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold">AcZone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-200 transition-colors duration-200">
            Accueil
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">
            À Propos
          </Link>
          <Link href="/projects" className="hover:text-blue-200 transition-colors duration-200">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            Me Contacter
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
