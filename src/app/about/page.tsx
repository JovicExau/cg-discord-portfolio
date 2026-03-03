'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import SkillsModal from '@/components/sections/SkillsModal';
import CertificatesModal from '@/components/sections/CertificatesModal';
import Timeline from '@/components/Timeline';

export default function AboutPage() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isCertificatesModalOpen, setIsCertificatesModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>

      <div className="min-h-screen bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-4 lg:py-6">

          {/* Hero Section */}
          <div className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4 glow-animation">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              À Propos de <span className="text-blue-600">Moi</span>
            </h1>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Développeur logiciel passionné par la construction d&apos;expériences numériques exceptionnelles et innovantes.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2 animate-slide-up">
            {/* Image avec effet glassmorphism */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Gradient background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Image container */}
                <div className="relative w-full h-72 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl float-animation">
                  <Image
                    src="/images/about.jpeg"
                    alt="Jovic BATA-NGUIMBI - Software Engineer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-[center_80%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Mon <span className="text-blue-600">Parcours</span>
                </h2>
                <div className="space-y-2">
                  <p className="text-gray-300 text-base leading-relaxed">
                    Passionné par le développement logiciel, je suis un développeur junior motivé 
                    à concevoir des applications performantes et utiles qui résolvent des problèmes réels.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Avec une formation académique solide en informatique et une première expérience 
                    pratique en startup et agences, je souhaite contribuer activement à des projets innovants.
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Ma curiosité, ma rigueur et ma volonté d&apos;apprentissage continu me permettent d&apos;évoluer rapidement dans le domaine du développement.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setIsSkillsModalOpen(true)}
                  className="group text-base font-semibold"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 0l-4 4m4-4l-4-4" />
                  </svg>
                  Voir mes Compétences
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsCertificatesModalOpen(true)}
                  className="group text-base font-semibold"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Voir mes Certificats
                </Button>
              </div>
            </div>
          </div>



          {/* Timeline Section */}
          <div className="animate-fade-in">
            <Timeline />
          </div>
        </div>
      </div>

      {/* Modals */}
      <SkillsModal 
        isOpen={isSkillsModalOpen} 
        onClose={() => setIsSkillsModalOpen(false)} 
      />
      <CertificatesModal 
        isOpen={isCertificatesModalOpen} 
        onClose={() => setIsCertificatesModalOpen(false)} 
      />
    </>
  );
}
