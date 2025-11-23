// ExperienceSection.jsx - Professional experience timeline section
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import TimelineItem from '../ui/TimelineItem';
import { ANIMATION_CONFIG } from '../../utils/constants.js';
import experiences from '../../data/experiences.js';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative -mt-20 pt-20 pb-20 w-full px-4 max-w-4xl mx-auto overflow-hidden">
      {/* Enhanced section header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 mx-auto shadow-xl"
        >
          <Briefcase size={28} className="text-white" />
        </motion.div>
        <motion.h2
          {...ANIMATION_CONFIG.card}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Professional Journey
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          3+ years of experience in IT operations, system administration, and software development
        </motion.p>
      </motion.div>

      <div className="relative">
        {/* Enhanced timeline base with gradient */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute h-full w-0.5 bg-gradient-to-b from-gray-600 via-cyan-400 to-blue-500 left-5 top-0 hidden md:block origin-top"
        />
        
        {/* Timeline items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
              type="experience"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
