// SkillsSection.jsx - Technical and soft skills showcase section
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SkillCategory from '../ui/SkillCategory';
import skills from '../../data/skills.js';

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

const SkillsSection = () => {
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

export default SkillsSection;
