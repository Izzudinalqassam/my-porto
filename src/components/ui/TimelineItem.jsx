// TimelineItem.jsx - Enhanced timeline item component for experience/education
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Award, GraduationCap, CheckSquare } from 'lucide-react';
import Icon from './Icon';
import { LEVEL_COLORS, ANIMATION_CONFIG } from '../../utils/constants.js';

const TimelineItem = ({ experience, isLast, type = 'experience' }) => {
  const colors = LEVEL_COLORS[experience.level] || LEVEL_COLORS.Internship;

  return (
    <motion.div
      {...ANIMATION_CONFIG.card}
      transition={{ ...ANIMATION_CONFIG.card.transition, delay: experience.id * 0.1 }}
      className="flex relative pb-12 group"
    >
      {/* Enhanced timeline connector with gradient animation */}
      {!isLast && (
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: experience.id * 0.1 + 0.2 }}
          className={`h-full w-0.5 absolute left-5 top-10 bg-gradient-to-b ${colors.bg} origin-top`}
        />
      )}
      
      {/* Enhanced timeline dot with pulse animation */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: experience.id * 0.1 + 0.1 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center text-white z-10 shadow-lg relative overflow-hidden`}
      >
        {/* Animated background pattern */}
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute inset-0 opacity-20"
        >
          <div className={`w-full h-full rounded-full bg-gradient-to-r ${colors.bg}`} />
        </motion.div>
        <Icon name={experience.icon} size={20} className="relative z-10" />
      </motion.div>
      
      {/* Enhanced content card with hover effects */}
      <motion.div
        {...ANIMATION_CONFIG.hover}
        className={`bg-gray-800/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm transition-all duration-300 ${colors.hover} group-hover:shadow-2xl group-hover:shadow-cyan-500/30`}
      >
        {/* Enhanced header with icons */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div className="flex-1">
            <motion.div className="flex items-center gap-3 mb-2">
              <Icon name="Briefcase" size={16} className="text-cyan-400" />
              <motion.h3 
                {...ANIMATION_CONFIG.fadeIn}
                transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.2 }}
                className="text-xl font-bold text-white"
              >
                {experience.title}
              </motion.h3>
            </motion.div>
            <motion.p 
              {...ANIMATION_CONFIG.fadeIn}
              transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.25 }}
              className="text-gray-400 flex items-center gap-2"
            >
              <Icon name={experience.level === 'Staff' ? 'Award' : 'GraduationCap'} size={14} className="text-gray-500" />
              {experience.company}
            </motion.p>
          </div>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-xs px-3 py-1.5 rounded-full bg-gradient-to-r ${colors.bg} text-white font-medium shadow-md`}
          >
            {experience.level}
          </motion.span>
        </div>
        
        {/* Enhanced period and location with icons */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <motion.div 
            {...ANIMATION_CONFIG.fadeIn}
            transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.35 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <Calendar size={14} className="text-cyan-400" />
            <span>{experience.period}</span>
          </motion.div>
          {experience.location && (
            <motion.div 
              {...ANIMATION_CONFIG.fadeIn}
              transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.4 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <MapPin size={14} className="text-cyan-400" />
              <span>{experience.location}</span>
            </motion.div>
          )}
        </div>
        
        {/* Enhanced skills with category grouping */}
        {experience.skills && (
          <motion.div 
            {...ANIMATION_CONFIG.fadeIn}
            transition={{ ...ANIMATION_CONFIG.fadeIn.transition, delay: 0.45 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-px h-4 bg-gray-600" />
              <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">Technical Skills</h4>
              <div className="w-px h-4 bg-gray-600" />
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  {...ANIMATION_CONFIG.scale}
                  className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 border border-gray-600 hover:border-cyan-400 transition-all duration-300 font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Enhanced achievements with progress indicators */}
        {experience.achievements?.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-px h-4 bg-gray-600" />
              <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">Key Achievements</h4>
              <div className="w-px h-4 bg-gray-600" />
            </div>
            <div className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  {...ANIMATION_CONFIG.hover}
                  className="flex items-start p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300"
                >
                  <CheckSquare size={16} className="mr-3 mt-0.5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
