'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { heroData } from '@/data/hero';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Salut, je suis{' '}
                <span className="text-blue-500">{heroData.name}</span>!
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-blue-400">
                  {heroData.title}
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-blue-500">
                  {heroData.subtitle}
                </h3>
              </div>
            </div>

            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                className="group"
              >
                <Link href={heroData.ctaButtons.primary.href} className="flex items-center">
                  <Icon name="download" size="sm" className="mr-2" />
                  {heroData.ctaButtons.primary.text}
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                <Link href={heroData.ctaButtons.secondary.href} className="flex items-center">
                  {heroData.ctaButtons.secondary.text}
                  <Icon name="external" size="sm" className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <Icon name="mail" size="sm" />
              <a 
                href={`mailto:${heroData.email}`}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                {heroData.email}
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-600 rounded-full opacity-30 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-gray-700">
                  <Image
                    src={heroData.profileImage}
                    alt="Jovic BATA-NGUIMBI - Creative Designer"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-[center_15%]"
                    priority
                  />
                  
                  {/* Gradient overlay for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>
                
                {/* Floating elements - repositioned for circular shape */}
                <div className="absolute top-10 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-bounce-slow border-2 border-gray-800">
                  💻
                </div>
                <div className="absolute bottom-10 -left-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce-slow border-2 border-gray-800" style={{ animationDelay: '0.5s' }}>
                  ✨
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
