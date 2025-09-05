export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'animation';
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'design' | 'tools';
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  current?: boolean;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  profileImage: string;
  backgroundImage?: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    };
    secondary: {
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    };
  };
}
