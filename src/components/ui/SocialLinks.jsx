// SocialLinks.jsx - Professional social media links component
import { motion } from "framer-motion";

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/izzudinalqassam",
      ariaLabel: "GitHub Profile",
      svgPath: "M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C21.14 22.18 24 16.42 24 12A10 10 0 0012 2z",
      featured: true
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/izzudinalqassam",
      ariaLabel: "LinkedIn Profile",
      svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      featured: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className={`flex justify-center lg:justify-start gap-4 mt-8 ${className}`}
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
            link.featured 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-cyan-400 hover:scale-110 shadow-lg shadow-cyan-400/25' 
              : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50'
          }`}
          aria-label={link.ariaLabel}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={link.svgPath} />
          </svg>
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
