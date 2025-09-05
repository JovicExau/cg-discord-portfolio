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
    href: '/projects',
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
    url: 'https://linkedin.com/in/aczone',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/aczone',
    icon: 'github'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/aczone',
    icon: 'twitter'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/aczone',
    icon: 'dribbble'
  }
];
