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
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .sidebar-nav-item {
          animation: fadeInLeft 0.4s ease both;
        }

        .sidebar-nav-item:nth-child(1) { animation-delay: 0.05s; }
        .sidebar-nav-item:nth-child(2) { animation-delay: 0.1s; }
        .sidebar-nav-item:nth-child(3) { animation-delay: 0.15s; }
        .sidebar-nav-item:nth-child(4) { animation-delay: 0.2s; }
        .sidebar-nav-item:nth-child(5) { animation-delay: 0.25s; }
        .sidebar-nav-item:nth-child(6) { animation-delay: 0.3s; }

        .nav-link-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 60%;
          background: #3b82f6;
          border-radius: 0 4px 4px 0;
        }

        .social-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .social-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(59, 130, 246, 0.15);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .social-btn:hover::after {
          opacity: 1;
        }

        .sidebar-glow {
          box-shadow: 1px 0 30px rgba(0, 0, 0, 0.4);
        }

        .profile-ring {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8, #1e3a8a);
          padding: 2px;
          border-radius: 9999px;
        }

        .profile-ring-inner {
          border-radius: 9999px;
          overflow: hidden;
          background: #111827;
        }
      `}</style>

      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-gray-900 text-white shadow-xl border border-gray-700/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? 'close' : 'menu'} size="md" />
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 z-50 transform transition-transform duration-300 ease-in-out sidebar-glow',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #111827 60%, #0f172a 100%)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(29,78,216,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        <div className="relative flex flex-col h-full">

          {/* Profile Section */}
          <div className="px-6 pt-8 pb-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Avatar — perfectly round, no border, gradient ring */}
              <div className="relative">
                <div className="profile-ring" style={{ width: '72px', height: '72px' }}>
                  <div className="profile-ring-inner w-full h-full">
                    <Image
                      src="/images/hero.png"
                      alt="Jovic BATA-NGUIMBI"
                      width={68}
                      height={68}
                      className="object-cover w-full h-full"
                      style={{ borderRadius: '9999px', display: 'block' }}
                    />
                  </div>
                </div>
                {/* Online dot */}
                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-gray-900 shadow-lg shadow-emerald-500/30" />
              </div>

              <div className="text-center space-y-0.5">
                <h2 className="text-sm font-bold text-white tracking-wide">Jovic BATA-NGUIMBI</h2>
                <p className="text-xs text-blue-400 font-medium tracking-widest uppercase">Software Engineer</p>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-6 h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 overflow-y-auto">
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest px-3 mb-3">Menu</p>
            <ul className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} className="sidebar-nav-item">
                    <Link
                      href={item.href}
                      className={cn(
                        'relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                        isActive
                          ? 'nav-link-active bg-blue-600/15 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={cn(
                        'flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 shrink-0',
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                          : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-white'
                      )}>
                        <Icon name={item.icon} size="sm" />
                      </span>
                      <span className="text-sm font-medium">{item.name}</span>
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow shadow-blue-400/50" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Links + Footer */}
          <div className="px-6 pb-6 pt-4">
            <div className="h-px w-full mb-5" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

            <div className="flex justify-center gap-2 mb-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn w-9 h-9 flex items-center justify-center rounded-xl bg-gray-800/80 text-gray-400 hover:text-white border border-gray-700/50 hover:border-blue-500/40"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size="sm" />
                </a>
              ))}
            </div>

            <p className="text-xs text-gray-600 text-center leading-relaxed">
              © 2024 Jovic BATA-NGUIMBI
            </p>
          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;