// ExperienceSection.jsx - Clean and simple experience section for recruiters
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import TimelineItem from '../ui/TimelineItem';
import experiences from '../../data/experiences.js';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative -mt-20 pt-20 pb-20 w-full px-4 max-w-4xl mx-auto">
      {/* Clean section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 mx-auto">
          <Briefcase size={28} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Professional Experience
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          3+ years in IT operations, system administration, and DevOps with quantified results
        </p>
      </motion.div>

      {/* Clean timeline */}
      <div className="relative">
        {/* Simple timeline line */}
        <div className="absolute h-full w-0.5 bg-gray-700 left-5 top-0 hidden md:block" />
        
        {/* Timeline items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
              type="experience"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
