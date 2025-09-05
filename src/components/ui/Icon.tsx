import React from 'react';
import { cn } from '@/lib/utils';

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Icon: React.FC<IconProps> = ({ name, className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const iconMap: Record<string, string> = {
    home: 'lni lni-home',
    user: 'lni lni-user',
    briefcase: 'lni lni-briefcase',
    mail: 'lni lni-envelope',
    linkedin: 'lni lni-linkedin-original',
    github: 'lni lni-github-original',
    twitter: 'lni lni-twitter-original',
    dribbble: 'lni lni-dribbble',
    download: 'lni lni-download',
    external: 'lni lni-external-link',
    menu: 'lni lni-menu',
    close: 'lni lni-close',
    code: 'lni lni-code',
    design: 'lni lni-palette',
    tools: 'lni lni-tools',
    certificate: 'lni lni-certificate',
    creativity: 'lni lni-bulb',
    performance: 'lni lni-rocket',
    collaboration: 'lni lni-users'
  };

  const iconClass = iconMap[name] || 'lni lni-question-circle';

  return (
    <i className={cn(iconClass, sizeClasses[size], className)}></i>
  );
};

export default Icon;
