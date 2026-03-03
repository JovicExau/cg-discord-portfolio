'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { heroData } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.2); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .glass-button:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 pt-2 pb-0 lg:pt-2 lg:pb-0 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Content */}
            <div className="flex flex-col slide-in-left" style={{ gap: '1.25rem' }}>
              {/* Main heading */}
              <div className="space-y-3">
                <div>
                  <p className="text-blue-600 font-semibold text-lg mb-2">Bienvenue 👋</p>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2">
                    Je suis <span className="gradient-text">{heroData.name}</span>
                  </h1>
                  <p className="text-lg lg:text-xl font-semibold text-gray-300">
                    {heroData.title}
                  </p>
                </div>

                <div>
                  <p className="text-base lg:text-lg text-gray-400">
                    {heroData.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-2xl font-light">
                {heroData.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={heroData.ctaButtons.secondary.href}>
                  <button className="glass-button inline-flex items-center justify-center gap-2 rounded-xl font-semibold px-6 py-3 text-base w-full sm:w-auto group">
                    {heroData.ctaButtons.secondary.text}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
              </div>

              {/* Social proof — pb-px pour 1px d'écart exact avec le bas du conteneur */}
              <div className="flex items-center gap-6 pb-px">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">10+</span> Projets réalisés
                </p>
              </div>
            </div>

            {/* Visual - Profile Image */}
            <div className="relative slide-in-right hidden lg:flex lg:items-start lg:justify-center">
              <div className="relative">
                {/* Animated background blur */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-full blur-3xl glow-animation"></div>
                
                {/* Profile image circle — agrandie de 72 à 88 */}
                <div className="relative w-88 h-88 mx-auto" style={{ width: '22rem', height: '22rem' }}>
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl float-animation">
                    <Image
                      src={heroData.profileImage}
                      alt="Jovic BATA-NGUIMBI - Software Engineer"
                      fill
                      className="object-cover object-[center_-20px]"
                      priority
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg text-white text-sm font-semibold flex items-center gap-2 animate-bounce">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Software
                  </div>

                  <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg text-white text-sm font-semibold flex items-center gap-2" style={{ animation: 'bounce 1s infinite 0.5s' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Innovant
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-6 -left-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute bottom-1/4 -left-8 w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          </div>

          {/* Mobile profile image */}
          <div className="mt-8 lg:hidden relative">
            <div className="relative mx-auto" style={{ width: '18rem', height: '18rem' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-full blur-2xl"></div>
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600/20 shadow-xl float-animation">
                <Image
                  src={heroData.profileImage}
                  alt="Jovic BATA-NGUIMBI"
                  fill
                  className="object-cover object-[center_top]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;