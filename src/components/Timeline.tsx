import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  place: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "Depuis 2021",
    title: "Licence Professionnelle en Informatique",
    place: "CFI-CIRAS / Brazzaville",
    description: "Formation approfondie en développement et conception de systèmes. Programmation avancée, bases de données, architectures logicielles, méthodologies agiles, tests et sécurité informatique. Projets pratiques en équipe."
  },
  {
    year: "Août 2023 - Novembre 2023",
    title: "Stagiaire",
    place: "CDHD / Brazzaville",
    description: "Tâches administratives : signature de documents, réalisation d'impressions, assistance aux responsables."
  },
  {
    year: "Décembre 2023 - Mai 2024",
    title: "Rédacteur",
    place: "KOSMOS EDITION / Brazzaville",
    description: "Tenue de stands lors d'événements, participation à la rédaction d'œuvres, contribution aux tâches d'édition."
  },
  {
    year: "Juin 2025 - Septembre 2025",
    title: "Développeur Fullstack Stagiaire",
    place: "CABINET CEPI / Brazzaville",
    description: "Développement frontend web et mobile, contribution backend et conception de bases de données, intégration front-end / back-end, tests logiciels et assurance qualité."
  }
];

const Timeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div ref={timelineRef} className={`relative max-w-4xl mx-auto mt-8 mb-1 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full md:block hidden"></div>
      <div className="absolute left-6 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full md:hidden"></div>

      {timelineData.map((item, index) => (
        <div key={index} className={`relative mb-6 ${index % 2 === 0 ? '' : ''} md:flex md:items-center`}>
          {/* Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg md:block hidden"></div>
          <div className="absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg md:hidden"></div>

          {/* Card */}
          <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md ${index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto'} mx-auto md:mx-0 ml-12 md:ml-0`}>
            <div className="text-sm font-semibold text-blue-400 mb-2">{item.year}</div>
            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
            <div className="text-sm text-gray-400 mb-3">{item.place}</div>
            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
