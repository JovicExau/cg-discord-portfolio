import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import projectsData from '@/data/projects.json';
import { Project } from '@/types';

const projects: Project[] = projectsData as Project[];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Mes <span className="text-blue-500">Projets</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets créatifs, alliant design moderne 
            et développement technique de pointe.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Projets en Vedette
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden bg-gray-900 border-gray-600">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-4">
                  {project.liveUrl && (
                    <Button variant="primary" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Icon name="external" size="sm" className="mr-2" />
                        Voir le projet
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="sm" className="mr-2" />
                        Code source
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Autres Projets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden bg-gray-900 border-gray-600">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={350}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-700 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{project.technologies.length - 3} autres
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="primary" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Icon name="external" size="sm" className="mr-1" />
                        Voir
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="sm" className="mr-1" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Intéressé par mon travail ?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            N'hésitez pas à me contacter pour discuter de votre prochain projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Me Contacter
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/cv.pdf" target="_blank">
                <Icon name="download" size="sm" className="mr-2" />
                Télécharger CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
