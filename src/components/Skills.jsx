// Skills.jsx - Optimized technical and soft skills showcase component
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Star } from 'lucide-react';
import Icon from './ui/Icon';
import { ANIMATION_CONFIG } from '../utils/constants.js';
import skills from '../data/skills.js';

// Optimized background with fewer particles
const SkillBackground = () => {
  const particles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.8,
    duration: 15 + Math.random() * 10
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: 0
          }}
          animate={{ 
            x: [`${particle.x}%`, `${particle.x + 10}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y + 10}%`, `${particle.y}%`],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            background: `rgba(100, 200, 255, 0.2)`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

// Optimized skill item component
const SkillItem = memo(({ skill, index }) => {
  return (
    <motion.div
      className="flex items-center p-2 rounded-lg bg-gray-900/30 hover:bg-gray-900/60 transition-all duration-200"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
        <CheckCircle size={10} className="text-cyan-400" />
      </div>
      <span className="ml-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors">
        {skill}
      </span>
    </motion.div>
  );
});

SkillItem.displayName = 'SkillItem';

// Optimized skill category component
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

// Main skills component
const Skills = () => {
  return (
    <section id="skills" className="py-16 w-full px-4 max-w-6xl mx-auto relative overflow-hidden">
      <SkillBackground />
      
      {/* Optimized section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 mx-auto shadow-lg"
        >
          <Star size={24} className="text-white" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical & Soft Skills
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Comprehensive skill set spanning technical expertise, development tools, and interpersonal abilities
        </p>
      </motion.div>

      {/* Optimized skills grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {skills.map((category, index) => (
          <SkillCategory
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>

      {/* Simplified floating elements */}
      <motion.div
        className="absolute top-16 left-8 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-500/5 blur-lg"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-16 right-8 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/5 to-pink-500/5 blur-lg"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Skills;
