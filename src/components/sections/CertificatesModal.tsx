'use client';

import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificatesModal: React.FC<CertificatesModalProps> = ({ isOpen, onClose }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: "React Developer",
      description: "Certification officielle React par Meta",
      date: "2023",
      icon: "Capture d'écran 2026-03-01 144338.png",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Certification Google UX Design",
      date: "2022",
      icon: "Capture d'écran 2026-03-01 144457.png",
      color: "from-red-600 to-pink-600"
    },
    {
      id: 3,
      title: "Next.js Expert",
      description: "Certification Vercel Next.js",
      date: "2023",
      icon: "Capture d'écran 2026-03-01 144743.png",
      color: "from-gray-800 to-gray-900"
    },
    {
      id: 4,
      title: "TypeScript",
      description: "Certification Microsoft TypeScript",
      date: "2022",
      icon: "Capture d'écran 2026-03-01 144803.png",
      color: "from-blue-700 to-blue-900"
    },
    {
      id: 5,
      title: "Animation",
      description: "Certification Adobe After Effects",
      date: "2021",
      icon: "Capture d'écran 2026-03-01 144836.png",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <>
      <style>{`
        .certificates-modal-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.6) rgba(255, 255, 255, 0.1);
        }

        .certificates-modal-content::-webkit-scrollbar {
          width: 10px;
        }

        .certificates-modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          margin: 8px 0;
        }

        .certificates-modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .certificates-modal-content::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.95) 0%, rgba(8, 145, 178, 0.95) 100%);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
        }

        /* Glasmorphism */
        .certificates-modal-glass {
          background: rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2) !important;
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          animation: zoomIn 0.3s ease-in-out;
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .cert-card {
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        className="certificates-modal-glass"
      >
        <div className="certificates-modal-content max-h-[70vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="cert-card group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCert(`/Certificats/${cert.icon}`)}
              >
                {/* Image avec overlay */}
                <img
                  src={`/Certificats/${cert.icon}`}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Glass card info - Icon centered */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      className="w-12 h-12 text-white drop-shadow-lg" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Lightbox */}
      {selectedCert && (
        <div className="lightbox-overlay" onClick={() => setSelectedCert(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedCert(null)}
              title="Fermer"
            >
              ✕
            </button>
            <img
              src={selectedCert}
              alt="Certificate fullscreen"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificatesModal;