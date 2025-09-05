'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { navigationItems, socialLinks } from '@/data/navigation';
import { cn } from '@/lib/utils';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary-600 text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? 'close' : 'menu'} size="md" />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
              className={cn(
        'fixed left-0 top-0 h-screen w-80 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out',
        'lg:translate-x-0 lg:static lg:z-auto lg:w-80',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 border-b border-gray-700">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Image
                  src="/images/profile.jpg"
                  alt="AcZone Profile"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-blue-600 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-600 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-white">Jovic BATA-NGUIMBI</h2>
                <p className="text-sm text-gray-400">Creative Designer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group',
                      pathname === item.href
                        ? 'bg-blue-700 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name={item.icon} size="sm" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex justify-center space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-700 text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size="sm" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center">
              Copyright © 2024 Jovic BATA-NGUIMBI. Tous droits réservés.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
