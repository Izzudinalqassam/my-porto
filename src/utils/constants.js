// constants.js - Shared constants for application

// Color schemes for different levels and statuses
export const LEVEL_COLORS = {
  Internship: {
    bg: 'from-cyan-400 to-blue-700',
    hover: 'hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg'
  },
  Staff: {
    bg: 'from-cyan-400 to-blue-700',
    hover: 'hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg'
  },
  'Study Independent': {
    bg: 'from-cyan-400 to-blue-700',
    hover: 'hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg'
  }
};

export const STATUS_COLORS = {
  Active: {
    bg: 'bg-green-900/50',
    text: 'text-green-400'
  },
  Development: {
    bg: 'bg-yellow-900/50',
    text: 'text-yellow-400'
  },
  Completed: {
    bg: 'bg-gray-700/50',
    text: 'text-gray-400'
  }
};

export const ANIMATION_CONFIG = {
  // Common animation configurations
  card: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  hover: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 }
  },
  scale: {
    whileHover: { scale: 1.05 }
  }
};

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
};

// Social and external links
export const SOCIAL_LINKS = {
  github: 'https://github.com/Izzudinalqassam',
  linkedin: 'https://linkedin.com/in/Izzudinalqassam',
  email: 'izzudin.alqa@gmail.com'
};

export default {
  LEVEL_COLORS,
  STATUS_COLORS,
  ANIMATION_CONFIG,
  BREAKPOINTS,
  SOCIAL_LINKS
};
