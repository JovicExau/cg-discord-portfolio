import { HeroData } from '@/types';

export const heroData: HeroData = {
  name: "Jovic BATA-NGUIMBI",
  title: "Creative Designer",
  subtitle: "Animation & Coding",
  description: "Je suis un designer créatif et développeur web spécialisé dans l'animation et le coding. Avec plus de 10 ans d'expérience, je crée des expériences numériques exceptionnelles qui allient esthétique et fonctionnalité.",
  email: "jovic.bata@email.com",
  profileImage: "/images/profile.jpg",
  backgroundImage: "/images/hero-bg.jpg",
  ctaButtons: {
    primary: {
      text: "Télécharger CV",
      href: "/cv.pdf",
      variant: "primary"
    },
    secondary: {
      text: "Me Contacter",
      href: "/contact",
      variant: "secondary"
    }
  }
};
