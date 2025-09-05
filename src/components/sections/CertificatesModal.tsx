'use client';

import React from 'react';
import Modal from '@/components/ui/Modal';
import Icon from '@/components/ui/Icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificatesModal: React.FC<CertificatesModalProps> = ({ isOpen, onClose }) => {
  const certificates = [
    {
      id: 1,
      title: "React Developer",
      description: "Certification officielle React par Meta",
      date: "2023",
      icon: "certificate"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Certification Google UX Design",
      date: "2022",
      icon: "design"
    },
    {
      id: 3,
      title: "Next.js Expert",
      description: "Certification Vercel Next.js",
      date: "2023",
      icon: "code"
    },
    {
      id: 4,
      title: "TypeScript",
      description: "Certification Microsoft TypeScript",
      date: "2022",
      icon: "tools"
    },
    {
      id: 5,
      title: "Animation",
      description: "Certification Adobe After Effects",
      date: "2021",
      icon: "design"
    },
    {
      id: 6,
      title: "AWS Cloud",
      description: "Certification AWS Solutions Architect",
      date: "2023",
      icon: "tools"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mes Certificats">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card key={cert.id} hover className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={cert.icon} className="text-white text-2xl" />
              </div>
              <CardTitle className="text-blue-500">{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-4">
                {cert.description}
              </p>
              <div className="text-xs text-gray-400">
                Obtenu en {cert.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Modal>
  );
};

export default CertificatesModal;
