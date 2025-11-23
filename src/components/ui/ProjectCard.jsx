// ProjectCard.jsx - Clean and simple project card for recruiters
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Icon from './Icon';

const ProjectCard = memo(({ project, index }) => {
  const handleGithubClick = () => {
    window.open(project.githubUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col"
    >
      <div className="text-center">
        {/* Project icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <Icon name={project.icon} size={20} className="text-white" />
          </div>
        </div>
        
        {/* Project title and description */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.techStack?.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack?.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-700 text-gray-400 rounded">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Language and status */}
        <div className="flex justify-center gap-3 mb-4 text-xs">
          <span className="px-2 py-1 bg-gray-700/50 rounded text-gray-400">
            {project.language}
          </span>
          <span className={`px-2 py-1 rounded ${
            project.status === 'Active' 
              ? 'bg-green-400/20 text-green-400' 
              : project.status === 'Development'
              ? 'bg-blue-400/20 text-blue-400'
              : 'bg-gray-400/20 text-gray-400'
          }`}>
            {project.status}
          </span>
        </div>

        {/* GitHub button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2 mt-auto"
          onClick={handleGithubClick}
          title={`View ${project.title} on GitHub`}
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github size={16} />
          View Project
        </motion.button>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
