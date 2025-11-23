// TimelineItem.jsx - Clean and simple timeline item for recruiters
import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckSquare } from 'lucide-react';
import Icon from './Icon';

const TimelineItem = ({ experience, isLast, type = 'experience', index = 0 }) => {
  const isCurrentRole = experience.period.includes('Present');
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex relative pb-8"
    >
      {/* Simple timeline connector */}
      {!isLast && (
        <div className="absolute h-full w-0.5 bg-gray-700 left-5 top-12 hidden md:block" />
      )}
      
      {/* Clean timeline dot */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white z-10">
        <Icon name={experience.icon} size={18} />
        {/* Current role indicator */}
        {isCurrentRole && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900" />
        )}
      </div>
      
      {/* Clean content card */}
      <div className="flex-1 ml-6 bg-gray-800/50 p-5 rounded-lg border border-gray-700">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {experience.title}
              {isCurrentRole && (
                <span className="ml-2 px-2 py-1 text-xs bg-green-400/20 text-green-400 rounded-full">
                  Current
                </span>
              )}
            </h3>
            <p className="text-gray-400 text-sm">{experience.company}</p>
          </div>
          <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full mt-2 sm:mt-0">
            {experience.level}
          </span>
        </div>
        
        {/* Period and location */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          {experience.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          )}
        </div>
        
        {/* Key achievements */}
        {experience.achievements?.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Key Achievements:</h4>
            {experience.achievements.map((achievement, achIndex) => (
              <div key={achIndex} className="flex items-start gap-2">
                <CheckSquare size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Skills */}
        {experience.skills?.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Skills Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
