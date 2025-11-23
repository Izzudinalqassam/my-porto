// EducationSection.jsx - Educational background timeline section
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target } from 'lucide-react';
import TimelineItem from '../ui/TimelineItem';
import { ANIMATION_CONFIG } from '../../utils/constants.js';
import education from '../../data/education.js';

const EducationSection = () => {
  // Transform education data to match TimelineItem format
  const transformedEducation = education.map(edu => ({
    ...edu,
    icon: 'GraduationCap',
    level: edu.degree.split(' ')[0], // Extract level for coloring
    type: 'education'
  }));

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
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute h-full w-0.5 bg-gradient-to-b from-gray-600 via-cyan-400 to-blue-500 left-5 top-0 hidden md:block origin-top"
        />
        
        {/* Timeline items */}
        <div className="space-y-12">
          {transformedEducation.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              experience={edu}
              isLast={index === transformedEducation.length - 1}
              type="education"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
