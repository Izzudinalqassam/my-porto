// Projects.jsx
import { motion } from 'framer-motion';
import projects from '../data/projects.js';

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
  >
    {/* Particle Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10" />
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15
            }
          }}
          className="absolute rounded-full"
          style={{
            width: '8px',
            height: '8px',
            background: 'rgba(100, 210, 255, 0.2)',
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>

    <div className="relative z-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl">{project.icon}</span>
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {project.title}
          </span>
        </h3>
        <p className="text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base">{project.description}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-5">
          {project.tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-1.5 bg-gray-700/50 rounded-full text-xs sm:text-sm text-cyan-400 hover:bg-gray-600/50 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="w-full flex justify-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-xs sm:text-sm text-cyan-400"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Projects
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
