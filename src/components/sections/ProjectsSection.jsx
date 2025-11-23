// ProjectsSection.jsx - Clean and simple projects section for recruiters
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import projects from '../../data/projects.js';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 w-full px-4 max-w-4xl mx-auto">
      {/* Clean section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 mx-auto">
          <Code size={28} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Full-stack web development projects with modern technologies
        </p>
      </motion.div>

      {/* Clean project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="h-full">
            <ProjectCard 
              project={project} 
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
