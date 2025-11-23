// SkillCategory.jsx - Skill category component with icon and skills list
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Icon from './Icon';
import SkillItem from './SkillItem';

const SkillCategory = memo(({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1
      }}
      whileHover={{ 
        y: -3
      }}
      className={`relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl group overflow-hidden`}
    >
      {/* Simplified animated background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Optimized icon with reduced animations */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: index * 0.1 + 0.1,
          duration: 0.3
        }}
        whileHover={{ 
          scale: 1.05
        }}
        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 shadow-md relative overflow-hidden`}
      >
        <Icon name={category.icon} size={24} className="text-white" />
      </motion.div>

      {/* Enhanced title */}
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        {category.name}
        {category.name.includes("Learning") && (
          <div className="text-yellow-400">
            <Zap size={14} />
          </div>
        )}
      </h3>

      {/* Optimized skills list */}
      <div className="space-y-1.5 max-h-72 overflow-y-auto">
        {category.items.map((skill, skillIndex) => (
          <SkillItem 
            key={skillIndex} 
            skill={skill} 
            index={skillIndex}
          />
        ))}
      </div>

      {/* Category badge */}
      <div className={`absolute top-3 right-3 px-2 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-medium shadow-md`}>
        {category.items.length} skills
      </div>
    </motion.div>
  );
});

SkillCategory.displayName = 'SkillCategory';

export default SkillCategory;
