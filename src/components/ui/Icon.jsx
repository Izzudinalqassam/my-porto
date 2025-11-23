// Icon.jsx - Reusable icon component with Lucide React integration
import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * Reusable Icon component
 * @param {string} name - Icon name from Lucide React
 * @param {number} size - Icon size in pixels
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to icon
 */
export const Icon = ({ name, size = 20, className = '', ...props }) => {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide React`);
    return <LucideIcons.HelpCircle size={size} className={className} {...props} />;
  }

  return <IconComponent size={size} className={className} {...props} />;
};

export default Icon;
