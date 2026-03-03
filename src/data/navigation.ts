import { NavigationItem, SocialLink } from '@/types';

export const navigationItems: NavigationItem[] = [
  {
    name: 'Accueil',
    href: '/',
    icon: 'home',
    current: true
  },
  {
    name: 'À Propos',
    href: '/about',
    icon: 'user'
  },
  {
    name: 'Projets',
    href: '/projets',
    icon: 'briefcase'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: 'mail'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'http://www.linkedin.com/in/jovic-bata-nguimbi-153511261',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/JovicExau',
    icon: 'github'
  }
];
