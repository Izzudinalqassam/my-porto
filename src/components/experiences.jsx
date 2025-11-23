// experiences.jsx - Professional experience timeline component
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckSquare } from 'lucide-react';
import Icon from './ui/Icon';
import { LEVEL_COLORS, ANIMATION_CONFIG } from '../utils/constants.js';
import experiences from '../data/experiences.js';

// Timeline item component
const TimelineItem = ({ experience, isLast }) => {
  const colors = LEVEL_COLORS[experience.level] || LEVEL_COLORS.Internship;

  return (
    <motion.div
      {...ANIMATION_CONFIG.card}
      transition={{ ...ANIMATION_CONFIG.card.transition, delay: experience.id * 0.1 }}
      className="flex relative pb-12"
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className={`h-full w-0.5 absolute left-5 top-10 bg-gradient-to-b ${colors.bg}`} />
      )}
      
      {/* Timeline dot with icon */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center text-white z-10`}>
        <Icon name={experience.icon} size={20} />
      </div>
      
      {/* Content card */}
      <div className="flex-grow pl-6">
        <motion.div
          {...ANIMATION_CONFIG.hover}
          className={`bg-gray-800/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm transition-all duration-300 ${colors.hover}`}
        >
          {/* Header with title and badge */}
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <motion.h3 
                {...ANIMATION_CONFIG.fadeIn}
                transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.2 }}
                className="text-xl font-bold text-white"
              >
                {experience.title}
              </motion.h3>
              <p className="text-gray-400">{experience.company}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${colors.bg} text-white`}>
              {experience.level}
            </span>
          </div>
          
          {/* Period and location */}
          <p className="text-gray-400 text-sm mt-1">{experience.period}</p>
          {experience.location && (
            <p className="text-gray-400 text-sm flex items-center">
              <MapPin size={14} className="mr-1" />
              {experience.location}
            </p>
          )}
          
          {/* Skills */}
          <motion.div 
            {...ANIMATION_CONFIG.fadeIn}
            transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {experience.skills?.map((skill, index) => (
              <motion.span
                key={index}
                {...ANIMATION_CONFIG.scale}
                className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-200 border border-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Achievements */}
          {experience.achievements?.length > 0 && (
            <motion.div 
              {...ANIMATION_CONFIG.fadeIn}
              transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.4 }}
              className="mt-4 space-y-2"
            >
              {experience.achievements.map((achievement, index) => (
                <motion.p
                  key={index}
                  {...ANIMATION_CONFIG.hover}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <CheckSquare size={16} className="mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
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

// Main experience component
const Experience = () => {
  return (
    <section id="experience" className="relative -mt-20 pt-20 pb-20 w-full px-4 max-w-4xl mx-auto">
      <motion.h2
        {...ANIMATION_CONFIG.card}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-white text-center"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Professional Experience
        </span>
      </motion.h2>

      <div className="relative">
        {/* Timeline base line */}
        <div className="absolute h-full w-0.5 bg-gray-700 left-5 top-0 hidden md:block" />
        
        {/* Timeline items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
