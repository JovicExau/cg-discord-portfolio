import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import Icon from '@/components/ui/Icon';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
                      <h1 className="text-4xl font-bold text-white mb-4">
            Contactez-<span className="text-blue-500">Moi</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter 
            de vos besoins et voir comment nous pouvons collaborer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Parlons de votre projet
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Je suis toujours ravi de découvrir de nouveaux projets et de collaborer 
                avec des clients passionnés. Que ce soit pour un site web, une application 
                mobile ou un projet de design, je suis là pour vous accompagner.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="mail" size="sm" className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a 
                    href="mailto:jovic.bata@email.com"
                    className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    jovic.bata@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="phone" size="sm" className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Téléphone</h3>
                  <a 
                    href="tel:+33123456789"
                    className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="map-pin" size="sm" className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Localisation</h3>
                  <p className="text-gray-300">Paris, France</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-white mb-3">Suivez-moi</h3>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com/in/aczone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" size="sm" />
                </a>
                <a
                  href="https://github.com/aczone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Icon name="github" size="sm" />
                </a>
                <a
                  href="https://twitter.com/aczone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Icon name="twitter" size="sm" />
                </a>
                <a
                  href="https://dribbble.com/aczone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                  aria-label="Dribbble"
                >
                  <Icon name="dribbble" size="sm" />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">
                Temps de réponse
              </h3>
              <p className="text-gray-300 text-sm">
                Je m'efforce de répondre à tous les messages dans les 24 heures. 
                Pour les demandes urgentes, n'hésitez pas à m'appeler directement.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
