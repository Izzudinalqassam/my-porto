// education.jsx - Educational background timeline component
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Target } from 'lucide-react';
import Icon from './ui/Icon';
import { ANIMATION_CONFIG } from '../utils/constants.js';
import education from '../data/education.js';

// Constants for consistent styling
const LEVEL_COLORS = {
  Bachelor: {
    bg: 'from-cyan-400 to-blue-500',
    hover: 'hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg'
  },
  High: {
    bg: 'from-cyan-400 to-blue-500',
    hover: 'hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg'
  },
  default: {
    bg: 'from-gray-400 to-gray-600',
    hover: 'hover:border-gray-400 hover:shadow-gray-500/20 hover:shadow-lg'
  }
};

// Helper function to get color scheme
const getLevelColors = (degree) => {
  const key = degree.split(' ')[0];
  return LEVEL_COLORS[key] || LEVEL_COLORS.default;
};

// Education timeline item component
const EducationItem = ({ education, isLast }) => {
  const colors = getLevelColors(education.degree);

  return (
    <motion.div
      {...ANIMATION_CONFIG.card}
      transition={{ ...ANIMATION_CONFIG.card.transition, delay: education.id * 0.1 }}
      className="flex relative pb-12"
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className={`h-full w-0.5 absolute left-5 top-10 bg-gradient-to-b ${colors.bg}`} />
      )}
      
      {/* Timeline dot with icon */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center text-white z-10`}>
        <Icon name="GraduationCap" size={20} />
      </div>
      
      {/* Content card */}
      <div className="flex-grow pl-6">
        <motion.div
          {...ANIMATION_CONFIG.hover}
          className={`bg-gray-800/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm transition-all duration-300 ${colors.hover}`}
        >
          {/* Header with title and period badge */}
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <motion.h3 
                {...ANIMATION_CONFIG.fadeIn}
                transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.2 }}
                className="text-xl font-bold text-white"
              >
                {education.degree}
              </motion.h3>
              <p className="text-gray-400">{education.institution}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${colors.bg} text-white`}>
              {education.period}
            </span>
          </div>
          
          {/* Location and GPA */}
          {education.location && (
            <p className="text-gray-400 text-sm flex items-center mt-1">
              <MapPin size={14} className="mr-1" />
              {education.location}
            </p>
          )}
          {education.gpa && (
            <p className="text-gray-400 text-sm mt-1">GPA: {education.gpa}</p>
          )}
          
          {/* Coursework */}
          {education.coursework?.length > 0 && (
            <motion.div 
              {...ANIMATION_CONFIG.fadeIn}
              transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.3 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {education.coursework.map((course, index) => (
                <motion.span
                  key={index}
                  {...ANIMATION_CONFIG.scale}
                  className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-200 border border-gray-700"
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Highlights */}
          {education.highlights?.length > 0 && (
            <motion.div 
              {...ANIMATION_CONFIG.fadeIn}
              transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.4 }}
              className="mt-4 space-y-2"
            >
              {education.highlights.map((highlight, index) => (
                <motion.p
                  key={index}
                  {...ANIMATION_CONFIG.hover}
                  className="text-gray-400 text-sm flex items-start"
                >
                  <Award size={16} className="mr-2 text-cyan-400 flex-shrink-0" />
                  {highlight}
                </motion.p>
              ))}
            </motion.div>
          )}

          {/* Achievements */}
          {education.achievements?.length > 0 && (
            <motion.div 
              {...ANIMATION_CONFIG.fadeIn}
              transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.5 }}
              className="mt-4 space-y-2"
            >
              {education.achievements.map((achievement, index) => (
                <motion.p
                  key={index}
                  {...ANIMATION_CONFIG.hover}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <Target size={16} className="mr-2 text-cyan-400 flex-shrink-0" />
                  {achievement}
                </motion.p>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main education component
const Education = () => {
  return (
    <section id="education" className="py-20 w-full px-4 max-w-4xl mx-auto">
      <motion.h2 
        {...ANIMATION_CONFIG.card}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white text-center"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Educational Background
        </span>
      </motion.h2>

      <div className="relative">
        {/* Timeline base line */}
        <div className="absolute h-full w-0.5 bg-gray-700 left-5 top-0 hidden md:block" />
        
        {/* Timeline items */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationItem
              key={edu.id}
              education={edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
