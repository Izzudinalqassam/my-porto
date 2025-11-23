// ProjectCard.jsx - Optimized project card component
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Icon from './Icon';
import { STATUS_COLORS } from '../../utils/constants.js';

// Simplified particle background with fewer elements
const ParticleBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5" />
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 0.2, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3
          }
        }}
        className="absolute rounded-full"
        style={{
          width: '6px',
          height: '6px',
          background: 'rgba(100, 210, 255, 0.15)',
          filter: 'blur(1px)',
          top: `${20 + i * 20}%`,
          left: `${10 + i * 15}%`
        }}
      />
    ))}
  </div>
);

const ProjectCard = memo(({ project, index }) => {
  const statusColors = STATUS_COLORS[project.status] || STATUS_COLORS.Development;

  const handleGithubClick = () => {
    window.open(project.githubUrl, '_blank');
  };

  const handleDemoClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <ParticleBackground />
      
      <div className="relative z-10">
        <div className="text-center">
          {/* Project icon */}
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-md"
            >
              <Icon name={project.icon} size={24} className="text-white" />
            </motion.div>
          </div>
          
          {/* Project title and description */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {project.title}
            </span>
          </h3>
          <p className="text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-5">
            {project.tags?.map((tag, tagIndex) => (
              <span 
                key={tagIndex} 
                className="px-3 py-1.5 bg-gray-700/50 rounded-full text-xs sm:text-sm text-cyan-400 hover:bg-gray-600/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Language and status */}
          <div className="flex justify-center gap-4 mb-4 text-xs sm:text-sm">
            <span className="px-2 py-1 bg-gray-700/50 rounded text-gray-300">
              {project.language}
            </span>
            <span className={`px-2 py-1 rounded ${statusColors.bg} ${statusColors.text}`}>
              {project.status}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-full flex justify-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
                onClick={handleGithubClick}
                title="View on GitHub"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={20} className="text-cyan-400" />
              </motion.button>
              
              {project.githubUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
                  onClick={handleDemoClick}
                  title="View Live Demo"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink size={20} className="text-cyan-400" />
                </motion.button>
              )}
            </div>
            
            {/* Tech stack */}
            <div className="flex flex-wrap justify-center gap-2">
              {project.techStack?.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800/50 rounded-full text-xs sm:text-sm text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
