import { HeroData } from '@/types';

export const heroData: HeroData = {
  name: "Jovic BATA-NGUIMBI",
  title: "Software Engineer",
  subtitle: "Agile and Coding",
  description: "Passionné par le développement logiciel, je suis un développeur motivé à concevoir des applications performantes et utiles. Avec une formation académique solide et une première expérience pratique, je souhaite contribuer activement à des projets innovants. Ma curiosité, ma rigueur et ma volonté d'apprentissage continuent me permettent d'évoluer rapidement dans le domaine du développement.",
  email: "jovic.bata@email.com",
  profileImage: "/images/new.png",
  backgroundImage: "/images/hero-bg.jpg",
  ctaButtons: {
    primary: {
      text: "Télécharger CV",
      href: "/CV.pdf",
      variant: "primary"
    },
    secondary: {
      text: "Me Contacter",
      href: "/contact",
      variant: "secondary"
    }
  }
};
